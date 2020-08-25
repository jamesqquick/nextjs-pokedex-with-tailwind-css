import Head from 'next/head';
export default function Home({ children, title }) {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto max-w-xl pt-8 min-h-screen">
                {children}
            </main>
        </div>
    );
}
