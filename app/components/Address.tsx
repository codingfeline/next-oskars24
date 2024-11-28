import { Phone } from './icons'

const PostalAddress = () => {
  return (
    <address className="text-white flex w-4/5 justify-center items-center flex-col sm:flex-row">
      <span>184 High Street, Herne Bay, Kent CT6 5AP</span>
      <div className="flex sm:ml-6 justify-center">
        <Phone className="mr-2 text-lg" />
        <a href="tel:07447008787">07447 008787</a>
      </div>
    </address>
  )
}

export default PostalAddress
