import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({ children, title = 'Терминал оплаты' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <main>
          <div>
            {children}
          </div>
      </main>
    </>
  )
}