import { getSession, signIn, signOut, useSession, providers, getProviders } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import logo from '../img/logo.png'
import Link from 'next/link'


export default function Login({ providers }) {
  // const [session, loading] = useSession();
  const { data: session, status } = useSession()

  const signInWithGoogle = async () => {
    await signIn('google').then(() => console.log(session))

  }
//   console.log(session?.user);
  if (status === "authenticated") {
    return (
      <Home />
    )
  }

  useEffect(() => {
    console.log(providers)
    Object?.values(providers).map((p)=>console.log(p.name, p.id, p.callbackUrl))
  }, [])

  return (
    <div className='flex sm:flex-col lg:flex-row lg:visible'>
      <div className="h-screen w-full flex flex-[1] flex-col m-auto bg-[url('../img/group.jpg')] bg-center">
          
      </div>
      <div className='flex flex-[1] flex-col mt-20'>
        <h1 className='flex justify-center mt-32 items-center m-auto sm:mb-6 lg:mb-16 font-EN text-5xl font-bold text-[#720b8f]'>MINE.Al</h1>
          <button 
            onClick={signInWithGoogle}
            className='w-60 flex m-auto mt-4 sm:mb-6 rounded-xl border-2 border-[#720b8f] p-3 hover:bg-[#720b8f] hover:text-white  transition'>
            <img className='w-8 h-8 mr-2' src="https://img.icons8.com/fluency/144/000000/google-logo.png"/>
            {/* <Link href='/api/auth/signin'> */}
            <span className='m-auto lg:mg-0'>Login With Google</span>
            {/* </Link> */}
          </button> 
          <button 
            onClick={signIn('facebook')}
            className='w-60 flex m-auto mt-4 sm:mb-6 rounded-xl border-2 border-[#720b8f] p-3 hover:bg-[#720b8f] hover:text-white  transition'>
            <img className='w-8 h-8 mr-2' src="https://img.icons8.com/color/144/000000/facebook-circled--v1.png"/>
            <span className='m-auto lg:mg-0'>Login With Facebook</span>
          </button>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  console.log(providers);
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { providers }
  };
}