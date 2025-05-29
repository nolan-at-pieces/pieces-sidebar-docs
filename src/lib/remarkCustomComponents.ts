
import { visit } from 'unist-util-visit';
import type { Root, Element, Text } from 'hast';

// Remark plugin to transform custom syntax into JSX components
export function remarkCustomComponents() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      // Transform callouts: :::callout{type="info" title="Note"}
      if (node.tagName === 'p' && node.children.length > 0) {
        const firstChild = node.children[0] as Text;
        if (firstChild.type === 'text' && firstChild.value.startsWith(':::')) {
          const match = firstChild.value.match(/:::(\w+)(?:\{([^}]*)\})?\s*(.*)/);
          if (match && parent && typeof index === 'number') {
            const [, componentType, props, content] = match;
            
            if (componentType === 'callout') {
              // Parse props
              const propMatches = props?.match(/(\w+)="([^"]*)"/g) || [];
              const parsedProps = propMatches.reduce((acc, prop) => {
                const [key, value] = prop.split('=');
                acc[key] = value.replace(/"/g, '');
                return acc;
              }, {} as Record<string, string>);

              // Create callout element
              const calloutElement: Element = {
                type: 'element',
                tagName: 'Callout',
                properties: parsedProps,
                children: content ? [{ type: 'text', value: content }] : []
              };

              parent.children[index] = calloutElement;
            }
          }
        }
      }

      // Transform steps: :::steps
      if (node.tagName === 'p' && node.children.length > 0) {
        const firstChild = node.children[0] as Text;
        if (firstChild.type === 'text' && firstChild.value === ':::steps') {
          if (parent && typeof index === 'number') {
            const stepsElement: Element = {
              type: 'element',
              tagName: 'Steps',
              properties: {},
              children: []
            };

            parent.children[index] = stepsElement;
          }
        }
      }
    });
  };
}
