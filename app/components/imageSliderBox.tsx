import img1 from '@/public/imgs/img1.jpg'
import img2 from '@/public/imgs/img2.jpg'
import img3 from '@/public/imgs/img3.jpg'
import img4 from '@/public/imgs/img4.jpg'
import img5 from '@/public/imgs/img5.jpg'
import ImageSlider from './ImageSlider'

const IMAGES = [img1, img2, img3, img4, img5]

const ImageSliderBox = () => {
  return (
    <section className="flex_center h-screen  snap-start bg_photos flex-col ">
      {/* <a name="photos"></a> */}
      {/* <a href="#price"><UpPulse /></a> */}
      {/* <div className="bg-black p-1 mt-4 rounded-md animate-bounce">
        <Up3 fill="black" stroke="white" className="text-4xl  " />
      </div> */}
      <ImageSlider imageUrls={IMAGES} />
      {/* <div className="mb-8 animate-bounce">
        <Down3 fill="black" stroke="white" className="text-4xl" />
      </div> */}

      {/* <Navbar /> */}
      <a href="#map">{/* <Down1 /> */}</a>
    </section>
  )
}

export default ImageSliderBox
