import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Head from 'next/head'; // Importando el componente Head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty API",
  description: "Rick & Morty API with Next.js, TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`
          body { font-family: ${inter.style.fontFamily}; }
        `}</style>
      </Head>
      <body className={inter.className}>
        <nav className="bg-green-500 p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link href="/" passHref>
                <p className="text-white hover:text-green-200 font-medium text-lg transition duration-200 ease-in-out">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/favorites" passHref>
                <p className="text-white hover:text-green-200 font-medium text-lg transition duration-200 ease-in-out">Favorites</p>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
