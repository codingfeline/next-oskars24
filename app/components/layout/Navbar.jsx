import { Home, Hours, Map, Photos, Pound } from '@components/icons'

const Navbar = () => {
  const links = [
    { name: 'home', link: '/#home', icon: <Home /> },
    { name: 'hours', link: '/#hours', icon: <Hours /> },
    { name: 'prices', link: '/#price', icon: <Pound /> },
    { name: 'photos', link: '/#photos', icon: <Photos /> },
    { name: 'map', link: '/#map', icon: <Map /> },
  ]
  return (
    <>
      <ul className="flex gap-1 p-2 ">
        {links.map(li => (
          <li
            className="flex items-center  bg-gray-300 border border-gray-500 rounded-xl w-full hover:bg-gray-200 select-none"
            key={li.name}
          >
            <a className="w-full flex items-center flex-col px-2" href={li.link}>
              {li.icon}
              {li.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
