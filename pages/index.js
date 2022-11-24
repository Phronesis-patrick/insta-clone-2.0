import Head from "next/head"
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"
const HomePage = () => {
  return (
    <div className ="overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
      <Head>
        <title>instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal/>

      {/*header */}
        <Header />
      {/*feed*/}
        <Feed />
        
    </div>
  )
}
  
export default HomePage