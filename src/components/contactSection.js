import { Blobs, AnimeStar2 } from "../svgs/LandingIcons.js"

const ContactSection = ({ email }) => {
  return (
    <>
      <section className="contact">
        <div className="title">
          <div id="reach"><AnimeStar2 /><h2>reach</h2></div>
          <div id="out"><Blobs /><h2>out!</h2></div>
        </div>
        <p id="email">{email}</p>
      </section>

    </>
  )
}

export default ContactSection