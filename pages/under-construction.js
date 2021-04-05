import Head from 'next/head'

export default function UnderConstruction() {
  return (
    <div className="bg-gray-200 flex flex-col  justify-center min-h-screen py-2">
      <Head>
        <title>Camb Roofing</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Our website is currently undergoing scheduled maintenance. We should be working shortly. Thank you for your patience."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/Camb.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg&widths=50&heights=50`}
        />
        <meta name="og:title" content="Camb Roofing" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="flex flex-col  justify-center flex-1 px-4 sm:px-20 text-gray-700">
        <h1 className="text-xl font-bold flex flex-col ">
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
          <a  className="font-mono p-2 italic text-blue-800" href="https://weslleyoliveira.com/">Weslley Oliveira</a>         
      </footer>
    </div>
  )
}
