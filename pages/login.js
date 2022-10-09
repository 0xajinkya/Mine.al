import { getSession, signIn, signOut, useSession, providers, getProviders } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import logo from '../img/logo.png'
import Link from 'next/link'
import axios from 'axios';
import { toast } from 'react-toastify'
import bcryptjs from 'bcryptjs'
import Home from './index'
export default function Login({ providers }) {
  // const [session, loading] = useSession();
  // const [providers, setProviders] = useState({});
  const { data: session } = useSession()
  // const createnewAccountRef = useRef();
  const [createNewAccount, setCreateNewAccount] = useState(false);
  const [signUp, setSignUp] = useState({ username: '', email: '', password: '' });
  const signInWithGoogle = async () => {
    await signIn('google').then(() => console.log(session))

  }

  // useEffect(() => {
  //   console.log(createnewAccountRef.current.checked)
  // }, [createnewAccountRef.current?.value])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setCreateNewAccount()
    console.log(createNewAccount)
    if (createNewAccount === true) {
      try {
        await axios.post('/api/auth/signup', signUp)

        const result = await signIn('credentials', {
          redirect: false,
          email: signUp.email,
          password: signUp.password,
        });
        if (result.error) {
          toast.error(result.error);
        }
      } catch (err) {
        toast.error(err);
      }
    } else {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email: signUp.email,
          password: signUp.password,
        });
        console.log(result)
        if (result.error) {
          toast.error(result.error);
        }
      } catch (error) {
        toast.error(error);
      }
    }
  }

  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value })
  }

  if (session) {
    return <Home />
  } else {
    return (
      <div className='flex justify-center items-center lg:flex-row xs:flex-col sm:flex-col md:flex-col font-JS'>
        {/* <div className="h-screen w-full flex flex-[1] flex-col m-auto bg-[url('../img/group.jpg')] bg-center rounded-lg">

        </div> */}
        <div className='flex flex-[1] flex-col mt-20'>
          <h1 className='flex justify-center items-center m-auto mb-6 text-7xl font-bold text-[#720b8f] font-JS cursor-pointer'>MINE.al</h1>
          <div className='flex justify-center p-5 pb-10 pt-0 font-JS text-xl items-center'>
            <p className='text-md mb-10'>Connect With Your Peers, Organize Events, Create Memories</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>
              <input onClick={() => { console.log(!createNewAccount); setCreateNewAccount(!createNewAccount) }} className='text-[#720b8f] focus:ring-0' type="checkbox" />
              <p className='text-sm m-2 mt-0'>Create New Account?</p>
            </div>
            <input required={createNewAccount === true ? true : false} value={signUp.username} name='username' onChange={handleChange} placeholder='Username' className={`${createNewAccount === false ? 'hidden' : 'visible'} w-72 flex m-auto p-3 rounded-full bg-white border-2 border-[#720b8f] focus:ring-2 focus:ring-[#720b8f] focus:ring-offest-2 transition-all focus:ring-offset-[#720b8f] font-RW`} />
            <input required value={signUp.email} name='email' onChange={handleChange} placeholder='Email' className='mt-6 w-72 flex m-auto p-3 rounded-full bg-white border-2 border-[#720b8f] focus:ring-2 focus:ring-[#720b8f] focus:ring-offest-2 transition-all focus:ring-offset-[#720b8f] font-RW' />
            <input required value={signUp.password} name='password' onChange={handleChange} placeholder='Password' className='mt-6 w-72 flex m-auto p-3 rounded-full bg-white border-2 border-[#720b8f] focus:ring-2 focus:ring-[#720b8f] focus:ring-offest-2 transition-all focus:ring-offset-[#720b8f] font-RW' />
            <button
              // onClick={()=>{signIn(`email`, {callbackUrl: '/'})}}
              type='submit'
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className='ripple hover:bg-[#8718a6] w-72 flex m-auto mt-4 sm:mb-6 rounded-full border-2 p-3 bg-[#720b8f] text-white  transition-all'>
              {/* <img className='w-8 h-8 mr-2' src={`'Google' === 'Facebook' ? 'https://img.icons8.com/color/144/000000/facebook-circled--v1.png' : 'https://img.icons8.com/fluency/144/000000/google-logo.png'} `} /> */}
              {/* <img className='w-8 h-8 mr-2' src={`https://img.icons8.com/fluency/144/000000/google-logo.png`} /> */}
              <span className='m-auto'>{createNewAccount === true ? 'Sign Up' : 'Sign In'}</span>
            </button>
          </form>
          <p className={`${createNewAccount === false ? 'hidden' : 'visible'} flex justify-center sm:-mt-1 lg:-mt-2  mb-12 font-JS cursor-pointer underline text-sm`}>Forgot Password?</p>
          <p className='flex m-auto'>or</p>
          <p className='flex m-auto mt-5'>Continue With ...</p>
          <div className='flex flex-row justify-center'>
            <button
              onClick={() => { signIn(`google`, { callbackUrl: '/' }) }}
              className='mr-8 mt-4 sm:mb-6 rounded-xl border-2 border-[#720b8f] p-3 hover:bg-[#013b1b] hover:text-white  transition'>
              <img className='w-8 h-8' src={`https://img.icons8.com/fluency/144/000000/google-logo.png`} />
            </button>
            <button
              onClick={() => { signIn(`google`, { callbackUrl: '/' }) }}
              className='ml-8 mt-4 sm:mb-6 rounded-xl border-2 border-[#720b8f] p-3 hover:bg-[#1f048a] hover:text-white  transition'>
              <img className='w-8 h-8' src={`https://img.icons8.com/color/144/000000/facebook-circled--v1.png`} />
            </button>
          </div>
          {/* <button
              onClick={()=>{signIn(`email`, {callbackUrl: '/'})}}
              className='w-72 flex m-auto mt-4 sm:mb-6 rounded-xl border-2 border-[#720b8f] p-3 hover:bg-[#720b8f] hover:text-white  transition'>
              <img className='w-8 h-8 mr-2' src={`'Google' === 'Facebook' ? 'https://img.icons8.com/color/144/000000/facebook-circled--v1.png' : 'https://img.icons8.com/fluency/144/000000/google-logo.png'} `} />
              <img className='w-8 h-8 mr-2' src={`https://img.icons8.com/fluency/144/000000/google-logo.png`} />
              <span className='m-auto lg:mg-0'>Continue With Google</span>
            </button> */}
          {/* {Object?.values(providers).map((provider) => (

          <div key={provider.name}>
            <button
              onClick={()=>{signIn(`${provider.id}`, {callbackUrl: '/'})}}
              className='w-72 flex m-auto mt-4 sm:mb-6 rounded-xl border-2 border-[#720b8f] p-3 hover:bg-[#720b8f] hover:text-white  transition'>
              <img className='w-8 h-8 mr-2' src={`${provider.name === 'Facebook' ? 'https://img.icons8.com/color/144/000000/facebook-circled--v1.png' : 'https://img.icons8.com/fluency/144/000000/google-logo.png'} `} />
              <span className='m-auto lg:mg-0'>Continue With {provider.name}</span>
            </button>
          </div>

        ))} */}
        </div>
      </div>
    )
  }
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  console.log(providers);
  const { req } = context;
  const session = await getSession({ req });

  // if (session) {
  //   return {
  //     redirect: {destination: "/" },
  //   };
  // }

  return {
    props: { providers }
  };
}

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers }
//   };
// }