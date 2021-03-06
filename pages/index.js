import Layout from '../components/layout'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Email from '../components/email';


export default function Home() {
    return (
        <div>
            <Layout>
            <main className="bg-roofing bg-no-repeat bg-cover">
                <div className="flex h-screen bg-black bg-opacity-50 flex-wrap content-center text-white">
                    <div className="px-4 py-20">                        
                        {/* <h1 className="text-5xl py-6 font-semibold uppercase">We building your dream</h1> */}                        
                        <img className="w-36 mx-auto xs:w-full" src="/logo_3.png"/>
                        <p className="py-2 xs:py-6">Camb Roofing is a company with high experience in the waterproofing market. Over 4 years solving problems of infiltrations and leaks.</p>                    
                    </div>
                    <div className="grid grid-cols-2 text-center uppercase w-full">
                        <a href="#contact" className="bg-template-red rounded mr-2 ml-4 py-3">Get in touch</a>
                        <a href="#about" className="border-2 rounded ml-2 py-3 mr-4">About Us</a>
                    </div>
                </div>
            </main> 
            {/* Services */}
            <section id="services" className="bg-template-blue-400 py-10">
                <div className="p-4 text-center">
                    <h1 className="text-2xl text-white font-semibold uppercase"><span className="text-template-bg font-thin uppercase">Our</span> SERVICES</h1>                                                     
                </div>  
                <div className="grid grid-cols-6 px-4 py-10">              
                    <div className="flex flex-wrap col-span-2 content-center">
                        <div className="mx-auto item-center w-24 h-24 bg-white p-2 rounded-full">
                            <img src="/icons/cold.svg" className="w-20 h-20"/>
                        </div>
                    </div>   
                    <div className="col-span-4">                    
                        <h1 className="text-white text-xl">Hot Melt Structural Waterproofing</h1>                    
                        <p className=" text-white text-opacity-70 text-sm">Hot melt structural waterproofing is extremely robust and self healing, it is ideal for use beneath paved, ballast and green roof finishes. Guarantee periods up to 40 years can be offered.</p>                    
                    </div>
                </div>              
                <div className="grid grid-cols-6 px-4 py-10">              
                    <div className="flex flex-wrap col-span-2 content-center">
                        <div className="mx-auto item-center w-24 h-24 bg-white p-2 rounded-full">
                            <img src="/icons/roof.svg" className="w-22 h-22"/>
                        </div>                         
                    </div>   
                    <div className="col-span-4">                    
                        <h1 className="text-white text-xl">Built-up Felt Roofing</h1>                    
                        <p className=" text-white text-opacity-70 text-sm">Felt systems have been used for decades as waterproof coverings to residential and commercial buildings. Guarantee periods up to 25 years can be offered.</p>                    
                    </div>
                </div>              
                <div className="grid grid-cols-6 px-4 py-10">              
                    <div className="flex flex-wrap col-span-2 content-center">
                        <div className="mx-auto item-center w-24 h-24 bg-white p-3 rounded-full">
                            <img src="/icons/squeegee.svg" className="w-20 h-20"/>
                        </div>
                    </div>   
                    <div className="col-span-4">                    
                        <h1 className="text-white text-xl">Cold Applied Liquids</h1>                    
                        <p className=" text-white text-opacity-70 text-sm">Cold applied liquids are ideal for refurbishments by way of overlaying the existing roof coverings. Guarantee periods up to 25 years can be offered.</p>                    
                    </div>
                </div>              
                            
                        
            </section>
            {/* Portifolio*/}
            <section id="portfolio" className="bg-white py-10 px-4 text-template-blue-800">
                <div className="p-4 text-center">
                    <h1 className="text-2xl  font-semibold uppercase"><span className="text-template-blue-400 font-thin uppercase">Our</span> Portifolio</h1>                                                     
                </div>  
                <div className="flex flex-col py-10">              
                    <img className="" src="/images/camb (1).jpeg"/>   
                    <div>                    
                        <h1 className="text-xl py-4 font-semibold">First Example</h1>                    
                        <p className="italic">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
                    </div>
                </div>              
                <div className="flex flex-col py-10">              
                    <img className="" src="/images/camb (4).jpeg"/>   
                    <div>                    
                        <h1 className="text-xl py-4 font-semibold">Second Example</h1>                    
                        <p className="italic">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
                    </div>
                </div>              
                <div className="flex flex-col py-10">              
                    <img className="" src="/images/camb (8).jpeg"/>   
                    <div>                    
                        <h1 className="text-xl py-4 font-semibold">Other Example</h1>                    
                        <p className="italic">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
                    </div>
                </div>              
                 
            </section>

            {/* About Us */}
            <section id="about" className="bg-template-bg py-10">
                <h1 className="text-xl text-center pb-2 font-semibold text-template-blue-400 uppercase">about us</h1>
                <div className="flex justify-center">
                    <div className="border-b w-20 border-template-red"/>
                </div>                      
                
                <div className="flex justify-center py-10">                                               
                    <img className="w-3/4" src="/logo_2.png"/>                                        
                </div>                
                <div className="px-4 text-template-blue-400">                    
                    <p className="font-semibold pb-2">Camb Roofing is a company with high experience in the waterproofing market. Over 4 years solving problems of infiltrations and leaks.</p>                    
                    <p className="font-semibold pb-2">We solved your infiltration problem without changing the roof, eliminating the high temperature of the environment.</p>                    
                    <p className="font-semibold pb-2">Camb Roofing has in its technical staff, workers with extensive experience in the area. Our employees are trained to work in buildings that are already inhabited or not.</p>                    
                    <p className="font-semibold pb-2">Camb Roofing works in partnership with the largest companies that manufacture waterproofing products, which follow the standards for waterproofing products.</p>                    
                    <p className="font-semibold">We are at your disposal to provide information about our services, answer questions, receive your suggestions and schedule inspections. Answering your email will be a great satisfaction for us.</p>                    
                </div>                
            </section>

            {/* Get In Touch */}
            <section id="contact" className="px-2 py-20 bg-template-blue-800">
                <Email>
                    <h1 className="text-xl text-center pb-2 font-semibold  uppercase">Get In Touch</h1>
                    <div className="flex justify-center">
                        <div className="border-b-2 w-20 border-template-blue-800"/>
                    </div>                     
                    <h1 className="text-center font-semibold p-4">We are looking forward to start a project with you! </h1>                   
                    <div className="p-4 flex flex-col text-sm gap-4">                 
                        <h1><PhoneIcon/> +44 7988 170367</h1>                    
                        <h1><EmailIcon/> office@cambroofing.co.uk/</h1> 
                    </div>                  
                </Email>    
            </section>
            
            </Layout>       
        </div>
    )
}
