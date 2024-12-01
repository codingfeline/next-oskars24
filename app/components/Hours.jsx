import prisma from '@/prisma/client'

async function getHours() {
  const res = await fetch('https://oskarsbarbers4men.co.uk/indexAPI_hours.php')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const OpeningHours = async () => {
  // const hours = await getHours()
  const hours = await prisma.hours.findMany()

  const map = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  }

  const hours2 = hours.sort((a, b) => {
    return map[a.day] - map[b.day]
  })
  return (
    <>
      <div
        className="flex flex-col items-center m-5 animate-pulse w-full  opacity-90 bg-gray-800 p-3 rounded-lg "
        id="opening-hours"
        itemScope
        itemType="http://schema.org/openingHours"
      >
        {hours2.map((hour, index) => {
          const startFormatted =
            JSON.stringify(hour.start).length === 3
              ? '0' + JSON.stringify(hour.start)
              : JSON.stringify(hour.start)
          const endFormatted =
            JSON.stringify(hour.end).length === 3
              ? '0' + JSON.stringify(hour.end)
              : JSON.stringify(hour.end)

          return (
            <time
              key={index}
              className="flex text-white text-xl"
              itemProp="openingHours"
              dateTime={
                hour.day_code +
                ' ' +
                startFormatted.slice(0, 2) +
                ':' +
                startFormatted.slice(2) +
                '-' +
                endFormatted.slice(0, 2) +
                ':' +
                endFormatted.slice(2)
              }
            >
              {hour.day} {startFormatted} to {endFormatted}
            </time>
          )
        })}
      </div>
    </>
  )
}

export default OpeningHours
