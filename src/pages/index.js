import Navbar from "../../components/Navbar"
import  Background from "../../components/Background"
import Categories from "../../components/Categories"
import FeaturedProducts from "../../components/FeaturedProducts"
import Footer from "../../components/Footer"
import Head from "next/head"

export default function Home(){
    return (
        <main>
           <Head>
            <title>Chepelin Tecnology</title>
            </Head>
  
          <div>

            <Navbar/>
            <Background/> 
            <Categories/> 
            <FeaturedProducts/> 
            <Footer/>
  
           </div>
        </main>
         
      
        
        
    )
}