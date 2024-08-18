// import Image from "next/image";
// import { MarkdownRenderer } from './components/index';
// import markdownContent from './demo.md'

// export default function Home() {
//   return (
//     <>
//         <h1 className="flex flex-col items-center justify-between p-10">
//           {/* <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           /> */}
//           <span className="text-2xl relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] text-center">
//             RT Smile
//           </span>
//         </h1>
//       <main className="flex flex-col items-center justify-between p-24">
//         <MarkdownRenderer content={markdownContent} />
//       </main>
//     </>
//   );
// }

// pages/index.tsx

// app/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { ArtPlum } from './components/index'

export default async function Home() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app', 'blog'));

  const posts = files.map((filename) => {
    const filePath = path.join(process.cwd(), 'app', 'blog', filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
    };
  });
  console.log(posts);
  

  return (
    <>
      <div id='index' className='fade-enter-active flex flex-col items-center'>
        <h1>Patience</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ArtPlum />
    </>
  );
}
