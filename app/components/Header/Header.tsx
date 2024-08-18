import Link from 'next/link';

export default function Header() {
  return (
    <header className=" p-4">
      <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] text-center">
            RT Smile
          </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/a">
              About
            </Link>
          </li>
          <li>
            <Link href="/b">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
