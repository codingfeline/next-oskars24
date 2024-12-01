import OpeningHours from '@/app/components/Hours'
import Prices from '@/app/components/Prices'
import bg from '@/public/oskars_banner.jpg'
import Image from 'next/image'
import Location from './components/Location'
import SectionBox from './components/SectionBox'
import ImageSliderBox from './components/imageSliderBox'

export default function Home() {
  return (
    <div className=" h-screen overflow-y-scroll snap-y snap-mandatory  ">
      {/* <div className="flex flex-col bg_barber font-[family-name:var(--font-geist-sans)]"> */}
      <SectionBox bg="bg_barber">
        <Image src={bg} alt="banner" className="w-5/6 rounded-full mb-12 -mt-12" />
        {/* <div className="h-12 bg-white w-3/4"></div> */}
        <div className="flex flex-col opacity-90 bg-slate-300 w-full   sm:rounded-xl p-8 text-black sm:w-4/5 ">
          {/* <Container> */}
          <h2>Great friendly family barber shop</h2>
          <h3>by professional staff for all styles</h3>
          <h4>Hair cuts, Shape-Ups, razo shave & hot towel, beard trim</h4>
          <h5>No appointment needed, just pop in</h5>

          {/* </Container> */}
        </div>
        {/* <DownPulse /> */}
      </SectionBox>
      {/* </div> */}

      <SectionBox bg="bg_clock">
        {/* <UpPulse /> */}
        <OpeningHours />
        {/* <DownPulse /> */}
      </SectionBox>

      <SectionBox bg="bg_savings">
        {/* <UpPulse /> */}
        <Prices />
        {/* <DownPulse /> */}
      </SectionBox>

      <ImageSliderBox />

      <SectionBox>
        <Location />
      </SectionBox>
    </div>
  )
}
