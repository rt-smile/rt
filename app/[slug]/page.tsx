// app/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownIt from 'markdown-it';
// import { ArtPlum } from "../components/index";
import Shiki from '@shikijs/markdown-it'

const md = new markdownIt({html: true});

md.use(await Shiki({
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  }
}))

export default async function Post({ params }: any) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app', 'blog', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
console.log(fileContents);

  const { data, content } = matter(fileContents);

  // Convert Markdown to HTML using markdown-it
  const contentHtml = md.render(content);

  return (
    <>
      <div className="prose mx-auto fade-enter-active">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      {/* <ArtPlum /> */}
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
