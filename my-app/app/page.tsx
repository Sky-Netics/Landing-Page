import Points from "@/components/Points"
import Slider from "@/components/Slider"
import Learning from "@/components/Learning"
import Question from "@/components/Question"
import Monitoring from "@/components/Monitoring"
import Testimonials from "@/components/Testimonials"
import AdvertisementSection from "@/components/AdvertisementSection"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Slider/>
      <AdvertisementSection/>
      <Monitoring/>
      <Testimonials/>
      <Points/>
      <Learning/>
      <Question/>
      
    </>
  )
}