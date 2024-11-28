import img1 from '@/public/imgs/img1.jpg'
import img2 from '@/public/imgs/img2.jpg'
import img3 from '@/public/imgs/img3.jpg'
import img4 from '@/public/imgs/img4.jpg'
import img5 from '@/public/imgs/img5.jpg'
import { Down3, Up3 } from './icons'
import ImageSlider from './ImageSlider'

const IMAGES = [img1, img2, img3, img4, img5]

const ImageSliderBox = () => {
  console.log('images', IMAGES)
  return (
    <section className="flex_center h-screen  w-full snap-start bg_photos flex-col ">
      {/* <a name="photos"></a> */}
      {/* <a href="#price"><UpPulse /></a> */}
      <div className="bg-black p-1 mt-28 rounded-md">
        <Up3 fill="black" stroke="white" className="text-4xl animate-bounce " />
      </div>
      <ImageSlider imageUrls={IMAGES} />
      <div className="mb-24">
        <Down3 fill="black" stroke="white" className="text-4xl animate-bounce" />
      </div>

      {/* <Navbar /> */}
      <a href="#map">{/* <Down1 /> */}</a>
    </section>
  )
}

export default ImageSliderBox
