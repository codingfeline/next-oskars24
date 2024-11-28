import OpeningHours from '@/app/components/Hours'
import Prices from '@/app/components/Prices'
import DownPulse from './components/DownPulse'
import Location from './components/Location'
import SectionBox from './components/SectionBox'
import UpPulse from './components/UpPulse'
import ImageSliderBox from './components/imageSliderBox'

export default function Home() {
  return (
    <div className=" h-screen overflow-y-scroll snap-y snap-mandatory  ">
      {/* <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <SectionBox bg="bg_barber">
        <div className="flex flex-col opacity-90 bg-slate-300 w-full  sm:rounded-xl p-8 text-black ">
          <h2>Great friendly family barber shop</h2>
          <h3>by professional staff for all styles</h3>
          <h4>Hair cuts, Shape-Ups, razo shave & hot towel, beard trim</h4>
          <h5>No appointment needed, just pop in</h5>
        </div>
        <DownPulse />
      </SectionBox>

      <SectionBox bg="bg_clock">
        <UpPulse />
        <OpeningHours />
        <DownPulse />
      </SectionBox>

      <SectionBox bg="bg_savings">
        <UpPulse />
        <Prices />
        <DownPulse />
      </SectionBox>

      <ImageSliderBox />

      <SectionBox>
        <Location />
      </SectionBox>
    </div>
  )
}
