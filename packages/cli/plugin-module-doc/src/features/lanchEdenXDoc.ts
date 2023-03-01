import path from 'path';
import type { UserConfig } from '@modern-js/doc-core';
import { pluginAutoSidebar } from '@modern-js/doc-plugin-auto-sidebar';
import { fs, fastGlob } from '@modern-js/utils';
import { Options } from '../types';

export async function launchEdenXDoc({
  languages,
  appDir,
  doc,
  isProduction,
  docgenDir,
}: Required<Options>) {
  const json = JSON.parse(
    fs.readFileSync(path.resolve(appDir, './package.json'), 'utf8'),
  );
  const root = doc?.root ?? path.join(appDir, docgenDir);
  const DEFAULT_LANG = languages[0];
  const { dev, build } = await import('@modern-js/doc-core');

  const edenxDocConfig: UserConfig = {
    doc: {
      title: json.name,
      lang: DEFAULT_LANG,
      builderConfig: {
        dev: {
          port: 3333,
        },
      },
      plugins: [
        pluginAutoSidebar({
          root,
          categories: languages
            .map(lang => {
              const categories = fastGlob.sync('*', {
                cwd: path.join(root, lang),
                onlyDirectories: true,
              });
              if (categories.length === 0) {
                return [lang];
              }
              return categories.map(category => `${lang}/${category}`);
            })
            .flat(),
          collapsed: false,
        }),
      ],
      // 全局样式，定制主题颜色
      globalStyles: path.join(__dirname, '../../index.css'),
      themeConfig: {
        // 关闭暗黑模式切换按钮
        darkMode: false,
        // 国际化配置
        locales: languages.map(lang => ({
          lang,
          label: lang,
          outlineTitle: lang === 'zh' ? '目录' : 'ON THIS PAGE',
        })),
      },
    },
  };

  if (isProduction) {
    await build(root, edenxDocConfig);
  } else {
    await dev(root, edenxDocConfig);
  }
}
