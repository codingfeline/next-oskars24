import { ReactNode } from 'react'

interface Prop {
  bg?: string
  children: ReactNode
}

const SectionBox = ({ bg, children }: Prop) => {
  return (
    <section
      className={`flex justify-center items-center h-screen  w-full snap-start bg_photos flex-col ${bg}`}
    >
      {children}
    </section>
  )
}

export default SectionBox
