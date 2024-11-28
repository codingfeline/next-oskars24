import { FaFacebook, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="p-2 mt-5 bg-slate-200">
      <ul
        className="grid sm:grid-cols-2 lg:grid-cols-4
        items-center 
        tracking-widest md:tracking-normal 
      md:flex-row md:justify-between"
      >
        <li>&copy; {new Date().getFullYear()} Oskars Barbers</li>
        <li>184 high street Herne Bay, Kent CT6 5AP</li>

        <li>
          <phoneIcon />
          <a href="tel:07447008787">
            <FaPhone className="text-base inline" /> 07447 008787
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com/oskarsbarbers" target="oskars">
            Follow us on <FaFacebook className="text-base inline" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
