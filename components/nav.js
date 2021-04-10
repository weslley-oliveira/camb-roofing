import Link from 'next/link'
import { useState } from 'react'
import './nav.module.css'
  
const links = [  
  { href: '#services', label: 'Services',},
  { href: '#portfolio', label: 'Portfolio',},
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' }  
]

export default function Nav({siteTitle}) {   

  const [ toogle, setToogleInput ] = useState(false);
  const [ effectShow, setEffectShow ] = useState(0);
    
  const handleMore = (e) => {
    e.preventDefault();
    setEffectShow(85)
    setToogleInput(true)
  }

  const handleLess = (e) => {
    e.preventDefault();
    setEffectShow(0)
    setToogleInput(false)
  }

  return (
    <nav className="text-white">
      <div className="grid grid-cols-3 sm:grid-cols-6 items-center">
          <div className="col-span-2">
            <div className="h-20 p-2"/>
            {/* <Link href="/">
              <img className="p-2 py-4 h-20" src="/logo.png" />            
            </Link> */}
          </div>
          <div className="content-to-hide sm:col-span-4">
            <ul className="p-4 flex">
              {links.map(({ href, label}) => (           
                <li className="p-2" key={`${href}${label}`}>
                  <Link href={href}>
                    <a className="no-underline text-base font-semibold px-4 hover:text-blue-500">{label}</a>
                  </Link>                           
                </li>
              ))}
            </ul>
          </div>
          {!toogle && <div className="justify-self-end w-14 pr-4 sm:hidden">            
            <svg 
            onClick={handleMore}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>}
         
            {toogle &&
            <div className="slide-left h-screen bg-template-blue-800 absolute right-0" style={{width:`${effectShow}%`}}>
              <div className="flex  justify-end pt-4 pr-2">            
                <svg
                  className="w-14"
                  onClick={handleLess}
                  xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentcolor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-center">Welcome to</h1>
              <Link href="/">
                <img className="h-1/3 mx-auto" onClick={handleLess} src="/logo_3.png"/>
              </Link>             

              <ul className="p-4">
                {links.map(({ href, label}) => (           
                  <li onClick={handleLess} className="cursor-pointer bg-template-blue-400 rounded-md text-center p-2 m-4" key={label}>
                    <Link href={href}>
                      <a  className="no-underline text-base font-semibold px-4">{label}</a>
                    </Link>                           
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 right-0 w-full text-center border-t border-black opacity-100 border-opacity-30 p-6">
                  <span className=" text-white text-xs italic">Camb Roofing © 2021</span>
              </div>
            </div> 
            }           
      </div>
       
      
    </nav>
  )
}
