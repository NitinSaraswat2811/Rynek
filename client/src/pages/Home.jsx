import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import CategoryRow from '../components/home/CategoryRow'
import SectionHeader from '../components/common/SectionHeader'
import NearbySection from '../components/home/NearbySection'
import ProductsSection from '../components/home/ProductsSection'
import ServicesSection from '../components/home/ServicesSection'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <>
       <Navbar />
       <main>
        <Hero />
     <TrustStrip/>
         <CategoryRow/>
       <SectionHeader/>
         <NearbySection/>
        <ProductsSection/>
         <ServicesSection/>   
      </main> 
      <Footer />
    </>
  )
}

export default Home