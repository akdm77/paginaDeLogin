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
        setEmailError("")
      }else{
        setEmailError("*Insira um email valido*")
    }}else{
      setEmailError("")
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert(`Ola ${name}`)
    setName('');
    setPin('');

  }

  return (

      <main className=" flex bg-[url('./img/R.jpeg')] bg-center bg-cover h-screen justify-center items-center align-center  ">
        <div className="grid  backdrop-blur-md p-10 items-center justify-center rounded-lg shadow-md shadow-black  text-white  " >
          <h1 className='flex text-center items-center pb-6 justify-center text-lg' >Formulario</h1>
        
          <form onSubmit={handleSubmit}>
            <label className="flex  h-7">
              <span className="m-3 "> Nome: </span>
              <input className="flex justify-center items-center pl-3 rounded-md text-black"  value={name}  type="text" placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)}/>
            </label>
            {!!name ? name.length < 10 ? <p className="text-red-500 text=md ml-20 font-serif">* insira um nome valido *</p> : null : null}
            <br />
            
            <label className="flex  h-7 ">
              <span className="m-3">Senha: </span>
              <input className="flex pl-3 rounded-md text-black justify-center items-center" value={pin}  type='password' placeholder="Digite a senha..." onChange={(e) => setPin(e.target.value)}/>
            </label>
            {!!pin ? pin.length < 8 ? <p className="text-red-500 text-md ml-20 font-serif ">* insira uma senha com 8 caracters *</p> : null : null}
            
            <br />
            <label className="flex h-7 ">
              <span className="m-3">email:  </span>
              <input className="flex justify-center items-center pl-3 rounded-md text-black"   name="email" type="email" placeholder="Digite seu email..." onChange={(e) => validateEmail(e)}/>
            </label>
            {!!emailError && <p className="text-red-500 text-md ml-20 mt-5 font-serif">{emailError}</p>}
            <br />
            <input className=" bg-blue-500 p-1.5 m-3 rounded-md size-full text-center  text-white hover:bg-blue-700" type="submit" value="login" />
          </form>
        </div>
      </main>

    
  )
}
