"use client"
import { useState } from "react";
import validator from 'validator';
import './globals.css';


export default function Home() {

  
  const [name, setName] = useState<string>('');
  const [pin, setPin] = useState<string>('')

  const [emailError, setEmailError] = useState('')

  const validateEmail = (e: any) => {
    let email = e.target.value
    if(!!email){
      if(validator.isEmail(email)){
        setEmailError("Email valido")
      }else{
        setEmailError("Insira um email valido")
    }}else{
      setEmailError("")
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(name, pin)
    setName('');
    setPin('');

  }

  return (

      <main className=" flex  h-screen justify-center items-center align-center  "
      style={{backgroundImage:`url(${`./img1/R.jpeg`})`}} >
        <div className="grid backdrop-blur-sm p-10 aligh-center items-center justify-center  w-2/4 rounded-md  " >
          <h1 className='flex aligh-center justify-center text-lg' >Formulario</h1>
        
          <form onSubmit={handleSubmit}>
            <label className="flex  m-3">
              <span>Nome: </span>
              <input className="rounded-md "  value={name}  type="text" placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)}/>
            </label>
            {!!name ? name.length < 10 ? <p className="text-red-500 text=xs ml-9">* insira um nome valido *</p> : null : null}
            <br />
            <br />
            <label className="flex  m-3 ">
              <span>Senha: </span>
              <input className="rounded-md" value={pin}  type='password' placeholder="Digite a senha..." onChange={(e) => setPin(e.target.value)}/>
            </label>
            {!!pin ? pin.length < 8 ? <p className="text-red-500 text-xs ml-9 ">* insira uma senha com 8 caracters *</p> : null : null}
            <br />
            <br />
            <label className="flex  m-3">
              <span>email:  </span>
              <input className="rounded-md"   name="email" type="email" placeholder="Digite seu email..." onChange={(e) => validateEmail(e)}/>
            </label>
            {!!emailError && <p className="text-red-500 text-xs ml-9">{emailError}</p>}
            <br />
            <input className="flex flex-row bg-blue-400 p-1.5 m-3 rounded-md text-white hover:bg-blue-700" type="submit" value="login" />
          </form>
        </div>
      </main>

    
  )
}
