import Nav from '../components/nav'
import Head from 'next/head'

function layout({ children }) {
    return (
        <>
            <Head>
                <title>Camb Roofing</title>
                <link rel="icon" href="/ico.png" />
                <meta
                    name="description"
                    content="Our website is currently undergoing scheduled maintenance. We should be working shortly. Thank you for your patience."
                />
                <meta
                    property="og:image"
                    content="/ico.png"
                />
                <meta name="og:title" content="Camb Roofing" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="fixed w-full">
                <Nav siteTitle="Camb Roofing"/>
            </header>
            {children}
            <footer className="bg-template-blue-800 text-center">                
                <p className="text-white py-10 text-xs border-t  border-black opacity-100 border-opacity-30">Camb Roofing © 2021 Privacy Policy</p>
            </footer> 
        </>
    )
}

export default layout
