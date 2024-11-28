'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsDiamond, BsDiamondFill } from 'react-icons/bs'
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md'

interface Prop {
  imageUrls: string[]
}

const ImageSlider = ({ imageUrls }: Prop) => {
  const [imageIndex, setImageIndex] = useState(0)
  // let touchStartX = 0
  // let touchEndX = 0

  // const touchable = document.getElementById('touchable')

  // const checkDirection = () => {
  //   if (touchEndX < touchStartX) showPrevImage()
  //   showNextImage()
  // }

  // touchable?.addEventListener('touchstart', e => {
  //   touchStartX = e.changedTouches[0].screenX
  // })

  // touchable?.addEventListener('touchend', e => {
  //   touchEndX = e.changedTouches[0].screenX
  //   checkDirection()
  // })

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-black w-full">
      <div className="imgSlider aspect-video relative w-full h-3/5 ">
        <div className="w-full h-full flex overflow-hidden" id="touchable">
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt="alt"
              className=" object-cover w-full h-full block shrink-0 grow-0 transition delay-300 ease-in-out"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
          <button onClick={showPrevImage} className="left-0">
            <MdArrowCircleLeft className="animate-[pulse_1s_ease-in-out_infinite]" />
          </button>
          <button onClick={showNextImage} className="right-0">
            <MdArrowCircleRight className="animate-[pulse_1s_ease-in-out_infinite]" />
          </button>
        </div>
      </div>
      <div className="diamonds gap-2 flex   items-center h-7">
        {imageUrls.map((_, index) => (
          <span key={index}>
            {imageIndex === index ? (
              <BsDiamondFill onClick={() => setImageIndex(index)} />
            ) : (
              <BsDiamond className="empty" onClick={() => setImageIndex(index)} />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
