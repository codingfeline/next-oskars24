import prisma from '@/prisma/client'

const Prices = async () => {
  const prices = await prisma.prices.findMany()

  return (
    <div className="w-full lg:w-3/4 bg-[#F6C090] opacity-85 p-3 lg:rounded-lg ">
      <ul className="flex flex-col items-center text-xl">
        {prices.map(price => (
          <li key={price.id}>
            {price.item} <span>&pound; {price.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Prices
