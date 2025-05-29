
export function processCustomSyntax(content: string): string {
  // Transform callout syntax: :::info[Title] or :::warning{title="Warning"}
  content = content.replace(
    /:::(\w+)(?:\[([^\]]*)\]|\{title="([^"]*)"\})?\n([\s\S]*?):::/g,
    (match, type, title1, title2, innerContent) => {
      const title = title1 || title2 || '';
      // Convert to HTML that ReactMarkdown can process
      return `<div data-callout="${type}" data-title="${title}">\n\n${innerContent.trim()}\n\n</div>`;
    }
  );

  // Transform simple callout syntax: :::info
  content = content.replace(
    /:::(\w+)\n([\s\S]*?):::/g,
    (_, type, innerContent) => {
      return `<div data-callout="${type}">\n\n${innerContent.trim()}\n\n</div>`;
    }
  );

  // Transform Steps and Step components to HTML
  content = content.replace(/<Steps>/gi, () => {
    return '<div data-steps="true">';
  });
  content = content.replace(/<\/Steps>/gi, () => {
    return '</div>';
  });
  content = content.replace(/<Step\s+number="(\d+)"(?:\s+title="([^"]*)")?>/gi, (_, number, title) => {
    return `<div data-step="${number}" data-step-title="${title || ''}">`;
  });
  content = content.replace(/<\/Step>/gi, () => {
    return '</div>';
  });

  // Transform ExpandableImage components to HTML
  content = content.replace(/<ExpandableImage\s+src="([^"]*)"(?:\s+alt="([^"]*)")?(?:\s+caption="([^"]*)")?\/>/gi, (_, src, alt, caption) => {
    // Ensure caption is preserved in both data-caption and alt attributes
    const safeAlt = alt || '';
    const safeCaption = caption || '';
    return `<img src="${src}" alt="${safeAlt}" data-caption="${safeCaption}" />`;
  });

  return content;
}
