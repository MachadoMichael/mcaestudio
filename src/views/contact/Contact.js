import './contact.css'
import { Navbar } from "../../components/navbar"
import { SocialButtons } from '../../components/social-buttons/SocialButtons'
import contactPhoto from "../../photos/contact.webp"
import { Info } from '../../components/photo-info/info'

export const Contact = () => {
  return <section id='contact-container'>
    <Navbar />
    <div id='contact-content'>
      <img className='contact-photo' src={contactPhoto} alt="contact" />
      <Info client={"Paula Neder"} company={"Rio de Janeiro"} localization={"São Paulo"} />
    </div>
    <div id='contact-buttons'>
      <SocialButtons />
    </div>
  </section>
}
