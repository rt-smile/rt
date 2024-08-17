import React from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const MarkdownRenderer:React.FC<{content: string}> = ({ content }) => {
  const renderedMarkdown = md.render(content);

  return (
    <div
      className=""
      dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
    />
  );
};

export default MarkdownRenderer;
