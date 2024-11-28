const ContactForm = () => {
  return (
    <>
      <h3>contact us</h3>
      <form className="w-3/5">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default ContactForm
