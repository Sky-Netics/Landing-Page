import Points from "@/components/Points"
import Learning from "@/components/Learning"
import Question from "@/components/Question"
import Slider from "@/components/Slider"
import Monitoring from "@/components/Monitoring"
import Testimonials from "@/components/Testimonials"
import AdvertisementSection from "@/components/AdvertisementSection"

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