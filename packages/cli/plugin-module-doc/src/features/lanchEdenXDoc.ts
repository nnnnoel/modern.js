import path from 'path';
import type { UserConfig } from '@modern-js/doc-core';
import { pluginAutoSidebar } from '@modern-js/doc-plugin-auto-sidebar';
import { fs, fastGlob } from '@modern-js/utils';
import { demosVirtualModules } from '../virtualModule';
import { Options } from '../types';
import { remarkTsxToReact } from '../mdx/code-to-jsx';

export async function launchEdenXDoc({
  languages,
  appDir,
  demosDir,
  doc,
  isProduction,
  docgenDir,
  useTemplate,
}: Required<Options>) {
  const json = JSON.parse(
    fs.readFileSync(path.resolve(appDir, './package.json'), 'utf8'),
  );
  const root = useTemplate
    ? path.join(appDir, docgenDir)
    : path.join(appDir, demosDir);
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
        tools: {
          webpackChain: (chain, { webpack, CHAIN_ID }) => {
            // 新增插件
            chain.plugin('demo-virtual-module').use(demosVirtualModules);
          },
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
      markdown: {
        remarkPlugins: [remarkTsxToReact],
      },
      ...doc,
    },
  };

  if (isProduction) {
    await build(root, edenxDocConfig);
  } else {
    await dev(root, edenxDocConfig);
  }
}
