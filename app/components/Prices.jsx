import prisma from '@/prisma/client'

const Prices = async () => {
  const prices = await prisma.prices.findMany()

  return (
    <div className="w-full sm:w-[400px] bg-[#6b451f] opacity-85 p-3 rounded-lg">
      <ul className="flex flex-col items-center text-white text-xl">
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
