import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-200 flex flex-col  justify-center min-h-screen py-2">
      <Head>
        <title>Camb Roofing</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-col  justify-center flex-1 px-4 sm:px-20 text-gray-700">
        <h1 className="text-2xl font-bold flex flex-col ">
          Uder 
          Construction
        </h1>
        <h1 className="text-6xl font-bold py-2">          
          <a className="text-yellow-600" href="https://cambroofing.co.uk">
            Camb Roofing
          </a>
        </h1>
        <p className="pt-4">          
          Our website is currently undergoing scheduled maintenance.
        </p>
        <p>
          We should be working shortly. 
        </p>
        <p>
          Thank you for your patience.
        </p>
      </main>

      <footer className="text-gray-600 text-xs flex items-center justify-center w-full h-14 border-t">        
          Powered by{' '}
          <a  className="font-mono p-2" href="https://weslleyoliveira.com/">Weslley Oliveira</a>         
      </footer>
    </div>
  )
}

