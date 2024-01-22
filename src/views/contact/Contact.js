import './contact.css'
import { Navbar } from "../../components/navbar"
import { SocialButtons } from '../../components/social-buttons/SocialButtons'
import contactPhoto from "../../photos/contact.webp"
import { Info } from '../../components/photo-info/info'

export const Contact = () => {
  return <section id='contact-container'>
    <Navbar />
    <div id='contact-content'>
      <img className='contact-photo' src={contactPhoto} alt={"alt of image"} />
      <Info client={"contact"} company={"company"} localization={"place"} />
    </div>
    <div id='contact-buttons'>
      <SocialButtons />
    </div>
  </section>
}
