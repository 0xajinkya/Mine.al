import { getProviders, getSession, signOut, useSession } from 'next-auth/react'
import Router, { useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header';
import Login from './login';

const Home = () => {
  const { data: session } = useSession();
  console.log(session)
return (
  // <>
  // <span>Hello<h1>{session?.user.name || session?.user.email}</h1></span>
  // <button onClick={() => signOut()}>Sign Out</button>
  // </>
  <>
    <Header />
  </>
)
}

export default Home

export async function getServerSideProps(context) {
  const providers = await getProviders();
  console.log(providers);
  const { req } = context;
  const session = await getSession({ req });

  // if (!session) {
  //   return {
  //     redirect: { destination: "/login" },
  //   };
  // }

  return {
    props: { session }
  };
}