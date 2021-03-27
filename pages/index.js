import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Camb Roofing</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://cambroofing.co.uk">
            Camb Roofing!
          </a>
        </h1>

        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">        
          Powered by{' '}
          <a  className="font-mono p-2" href="https://weslleyoliveira.com/">Weslley Oliveira</a>         
      </footer>
    </div>
  )
}
