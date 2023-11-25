import HeroBanner from "@/components/heroBanner";
import Slideshow from "@/components/slideShow";

const slides:Slides={
  slides:[
    {
      slideName: 'bitfins',
      buttonText: 'shop now',
      image:'/images/ss-1.png',
      alt:'bitfins'
    },
    {
      slideName: 'bitfins',
      buttonText: 'shop now',
      image:'/images/ss-2.png',
      alt:'bitfins'
    },
    {
      slideName: 'bitfins',
      buttonText: 'shop now',
      image:'/images/ss-3.png',
      alt:'bitfins'
    },
    {
      slideName: 'bitfins',
      buttonText: 'shop now',
      image:'/images/ss-4.png',
      alt:'bitfins'
    },
    {
      slideName: 'bitfins',
      buttonText: 'shop now',
      image:'/images/ss-5.png',
      alt:'bitfins'
    },
    {
      slideName: 'bitfins',
      buttonText: 'shop now',
      image:'/images/ss-6.png',
      alt:'bitfins'
    }
  ]
}

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <Slideshow slides={slides.slides}/>
    </main>
  )
}
