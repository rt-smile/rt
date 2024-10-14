// app/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';
import Shiki from '@shikijs/markdown-it';

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/rt' : '';

const md = new markdownIt({ html: true });

md.use(await Shiki({
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  }
}));

// Custom rule to adjust image paths in markdown content
md.renderer.rules.image = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const srcIndex = token.attrIndex('src');

  // Check if token.attrs and token.attrs[srcIndex] exist
  if (token.attrs && token.attrs[srcIndex] && token.attrs[srcIndex][1].startsWith('/img/')) {
    // Prepend basePath when in production
    token.attrs[srcIndex][1] = `${basePath}${token.attrs[srcIndex][1]}`;
  }

  return self.renderToken(tokens, idx, options);
};

export default async function Post({ params }: any) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app', 'blog', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  // Convert Markdown to HTML using markdown-it
  const contentHtml = md.render(content);

  return (
    <>
      <div className="prose mx-auto fade-enter-active">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}

// Generate static params for each markdown file in the 'blog' directory
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app', 'blog'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
