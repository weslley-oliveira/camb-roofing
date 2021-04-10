import Layout from '../components/layout'
import RoomIcon from '@material-ui/icons/Room';
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
                        <img className="w-full" src="/logo_3.png"/>
                        <p className="py-2 xs:py-6">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
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
                    <div className="col-span-2 w-24 h-24 bg-template-bg rounded-full"/>   
                    <div className="col-span-4">                    
                        <h1 className="text-white text-xl">Hot Melt Structural Waterproofing</h1>                    
                        <p className=" text-white text-opacity-70">Hot melt structural waterproofing is extremely robust and self healing, it is ideal for use beneath paved, ballast and green roof finishes. Guarantee periods up to 40 years can be offered.</p>                    
                    </div>
                </div>                
                <div className="grid grid-cols-6 px-4 pb-10">              
                    <div className="col-span-2 w-24 h-24 bg-template-bg rounded-full"/>   
                    <div className="col-span-4">                    
                        <h1 className="font-semibold text-white text-xl">Built-up Felt Roofing</h1>                    
                        <p className="font-semibold text-white text-opacity-70">Felt systems have been used for decades as waterproof coverings to residential and commercial buildings. Guarantee periods up to 25 years can be offered.</p>                    
                    </div>
                </div>                
                <div className="grid grid-cols-6 px-4 pb-10">              
                    <div className="col-span-2 w-24 h-24 bg-template-bg rounded-full"/>   
                    <div className="col-span-4">                    
                        <h1 className="font-semibold text-white text-xl">Hot Melt Structural Waterproofing</h1>                    
                        <p className="font-semibold text-white text-opacity-70">Donec porttitor turpis eu mi tempus facilisis. Maecenas id ullamcorper elit, quis tempus enim.</p>                    
                    </div>
                </div>                
            </section>
            {/* Portifolio*/}
            <section id="portfolio" className="bg-white py-10 px-4 text-template-blue-800">
                <div className="p-4 text-center">
                    <h1 className="text-2xl  font-semibold uppercase"><span className="text-template-blue-400 font-thin uppercase">Our</span> Portifolio</h1>                                                     
                </div>  
                <div className="flex flex-col py-10">              
                    <img className="" src="/img.jpeg"/>   
                    <div>                    
                        <h1 className="text-xl py-4 font-semibold">First Example</h1>                    
                        <p className="italic">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
                    </div>
                </div>              
                <div className="flex flex-col py-10">              
                    <img className="" src="/img-2.jpeg"/>   
                    <div>                    
                        <h1 className="text-xl py-4 font-semibold">Second Example</h1>                    
                        <p className="italic">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
                    </div>
                </div>              
                <div className="flex flex-col py-10">              
                    <img className="" src="/img-3.jpeg"/>   
                    <div>                    
                        <h1 className="text-xl py-4 font-semibold">Other Example</h1>                    
                        <p className="italic">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>                    
                    </div>
                </div>              
                 
            </section>

            {/* About Us */}
            <section id="about" className="bg-template-bg py-10">
                <h1 className="text-xl text-center pb-2 font-semibold text-template-blue-400 uppercase">Welcome to</h1>
                <div className="flex justify-center">
                    <div className="border-b-2 w-20 border-template-red"/>
                </div>                      
                
                <div className="flex justify-center py-10">                                               
                    <img className="" src="/logo_2.png"/>                                        
                </div>                
                <div className="px-4 text-template-blue-400">                    
                    <p className="font-semibold pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem. Vestibulum feugiat eros lorem, vitae faucibus arcu aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis felis, vel luctus sapien nisi non orci. Ut laoreet ante tellus, vel hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit ac rutrum.</p>                    
                    <p className="font-semibold ">Donec porttitor turpis eu mi tempus facilisis. Maecenas id ullamcorper elit, quis tempus enim. In dignissim dolor in accumsan tincidunt. Donec vel diam vitae risus elementum congue. Cras varius, enim vitae condimentum mattis, erat lacus.</p>                    
                </div>                
            </section>

            {/* Get In Touch */}
            <section id="contact" className="px-2 py-20 bg-template-blue-100 text-template-blue-800">
                <h1 className="text-xl text-center pb-2 font-semibold  uppercase">Get In Touch</h1>
                <div className="flex justify-center">
                    <div className="border-b-2 w-20 border-template-red"/>
                </div>                     
                    <h1 className="text-center font-semibold p-4">We are looking forward to start a project with you! </h1>                   
                    <div className="p-4 flex flex-col text-sm gap-4">                   
                        <h1><RoomIcon/> 121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</h1>                    
                        <h1><PhoneIcon/> 1 (234) 567-8911 (234) 987-654</h1>                    
                        <h1><EmailIcon/> email@email.com</h1> 
                    </div>                  
                <Email/>
            </section>
            
            </Layout>       
        </div>
    )
}
