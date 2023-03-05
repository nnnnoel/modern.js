import { join } from 'path';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { MdxjsEsm } from 'mdast-util-mdxjs-esm';
import { demosVirtualModules } from '../virtualModule';
import { PACKAGE_ROOT } from '../constants';
/**
 * remark plugin to transform code to jsx
 */
export const remarkTsxToReact: Plugin<[], Root> = () => {
  return tree => {
    const demos: MdxjsEsm[] = [];
    let index = 0;
    // FIXME: fix path
    demos.push(getASTNodeImport(`API`, join(PACKAGE_ROOT, 'dist/esm/api.js')));
    demos.push(
      getASTNodeImport(
        `CodeContainer`,
        join(PACKAGE_ROOT, 'dist/esm/codeContainer.js'),
      ),
    );
    visit(tree, 'code', node => {
      if (node.lang === 'jsx' || node.lang === 'tsx') {
        const code = node.value;
        // FIXME: fix path
        const virtualModulePath = join(
          '/Users/bytedance/modern.js/packages/cli/doc-core',
          'node_modules',
          `virtual-demo${++index}.js`,
        );
        demosVirtualModules.writeModule(virtualModulePath, code);

        demos.push(getASTNodeImport(`Demo${index}`, virtualModulePath));
        Object.assign(node, {
          type: 'mdxJsxFlowElement',
          name: 'CodeContainer',
          children: [
            {
              type: 'mdxJsxFlowElement',
              name: `Demo${index}`,
            },
            {
              type: 'code',
              value: code,
              lang: 'typescript',
            },
          ],
        });
      }
    });

    tree.children.unshift(...demos);
  };
};

const getASTNodeImport = (name: string, from: string) =>
  ({
    type: 'mdxjsEsm',
    value: `import ${name} from "${from}"`,
    data: {
      estree: {
        type: 'Program',
        sourceType: 'module',
        body: [
          {
            type: 'ImportDeclaration',
            specifiers: [
              {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name },
              },
            ],
            source: {
              type: 'Literal',
              value: from,
              raw: `"${from}"`,
            },
          },
        ],
      },
    },
  } as MdxjsEsm);
