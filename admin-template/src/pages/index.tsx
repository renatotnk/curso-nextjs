import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-green-500 to-blue-500
    `}>
      <h1>Admin</h1>
    </div>
  )
}

export default Home;