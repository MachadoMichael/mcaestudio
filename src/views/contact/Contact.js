import './contact.css'
import { Navbar } from "../../components/navbar"
import { SocialButtons } from '../../components/social-buttons/SocialButtons'

export const Contact = () => {
  return <section id='contact-container'>
    <Navbar />
    <div id='contect-content'></div>
    <div id='contact-buttons'>
      <SocialButtons />
    </div>
  </section>
}
