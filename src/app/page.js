import ContactForm from "@/components/ContactForm"
import ContactSection from "@/components/ContactSection"
import { DrawCircleText } from "@/components/DrawCircleText"
import PricingSection from "@/components/PricingSection"
import ServicesSection from "@/components/ServicesSection"
import ShuffleHero from "@/components/ShuffleHero"
import TestimonialShuffle from "@/components/TestimonialShuffle"
import { TextParallaxContentExample } from "@/components/TextParallaxContent"
import VerticalAccordion from "@/components/VerticalAccordion"

const page = () => {
  return (
    <div>
      <ShuffleHero />
      {/* <DrawCircleText/> */}
      <TextParallaxContentExample/>
      <ServicesSection/>
      <PricingSection/>
      <TestimonialShuffle/>
      <VerticalAccordion/>
      
      {/* <ContactForm/> */}
      <ContactSection/>


    </div>
  )
}

export default page