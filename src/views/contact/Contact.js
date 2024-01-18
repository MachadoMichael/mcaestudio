import './contact.css'
import { Navbar } from "../../components/navbar"
import { SocialButtons } from '../../components/social-buttons/SocialButtons'
import contactPhoto from "../../photos/contact.webp"

export const Contact = () => {
  return <section id='contact-container'>
    <Navbar />
    <div id='contact-content'>
      <img className='contact-photo' src={contactPhoto} />
    </div>
    <div id='contact-buttons'>
      <SocialButtons />
    </div>
  </section>
}
