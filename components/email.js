import { Children, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '../components/alert'

function  Email({children}){       
    
    const [ show, setShow ] = useState(false);

    const [ alert, setAlert ] = useState('');
    
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ text, setText ] = useState('');

    useEffect(() => {
    
        let timer1 = setTimeout(() => setShow(false), 3000);
          
        return () => {
          clearTimeout(timer1);
        }
  
    }, [show])

    const handleEmail = (e) => {
        setEmail(e.currentTarget.value)        
    }
    const handleName = (e) => {
        setName(e.currentTarget.value)        
    }
    const handleText = (e) => {
        setText(e.currentTarget.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if(email == ""){         
          setAlert("error")
        } else{
          try {
            const res = fetch('./api/sendmail', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                name: name,
                text: text,
              }) 
            })            
            
          } catch(err) {
            alert(err)
          }                 
        
        setAlert(email)

        setEmail("");
        setText("");
        setName("");

        }

        setShow(true)        

    }
    
    return (
      <div className="rounded px-4 bg-template-red py-8 text-white">          
          {children}
          <form className="flex flex-col gap-3 border-t border-black pt-8" onSubmit={handleSubmit}>
              <input className="w-full rounded-md p-4" placeholder="Name" value={name} onChange={handleName}/>
              <input className="w-full rounded-md p-4" placeholder="Email"  value={email} onChange={handleEmail}/>
              <textarea className="w-full rounded-md p-4" placeholder="Message" value={text} onChange={handleText}/>   
              <button className="bg-template-blue-800 rounded text-center py-4 mt-6 uppercase text-white">Send a message</button>
              {show && 
              <div className="py-2">                
                {alert == "error"? 
                <Alert type="error" message="Ops, email is required! Please insert email"/> :
                <Alert type="sucess" message={`Email ${alert} successfully sent. Thank you`}/>
              }                
              </div>}             
          </form>          
      </div>    
    )
  }
  
  export default Email