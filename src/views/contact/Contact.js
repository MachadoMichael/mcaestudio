import './contact.css'
import { Navbar } from "../../components/navbar"
import { SocialButtons } from '../../components/social-buttons/SocialButtons'
import contactPhoto from "../../photos/contact.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Contact = () => {
  return <section id='contact-container'>
    <Navbar />
    <div id='contact-content'>
      <LazyLoadImage className='contact-photo' src={contactPhoto} alt="contact" />
    </div>
    <div id='contact-buttons'>
      <SocialButtons />
    </div>
  </section>
}
