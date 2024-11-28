async function getHours() {
  const res = await fetch('https://oskarsbarbers4men.co.uk/indexAPI_hours.php')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const OpeningHours = async () => {
  const hours = await getHours()

  return (
    <>
      <div
        className="flex flex-col items-center m-5 animate-pulse w-full  opacity-90 bg-gray-800 p-3 rounded-lg "
        id="opening-hours"
        itemScope
        itemType="http://schema.org/openingHours"
      >
        {hours.map((hour, index) => (
          <time
            key={index}
            className="flex text-white text-xl"
            itemProp="openingHours"
            dateTime={
              hour.day_code +
              ' ' +
              hour.start.slice(0, 2) +
              ':' +
              hour.start.slice(2) +
              '-' +
              hour.end.slice(0, 2) +
              ':' +
              hour.end.slice(2)
            }
          >
            {hour.day} {hour.start} to {hour.end}
          </time>
        ))}
      </div>
    </>
  )
}

export default OpeningHours
