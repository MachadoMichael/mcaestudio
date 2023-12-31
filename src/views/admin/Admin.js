import { useState } from 'react'
import { LoginForm } from '../../components/login-form/LoginForm'
import { PhotoSender } from '../../components/photo-sender/PhotoSender'
import './Admin.css'

export const Admin = () => {
  const [userLogged, setUserLogged] = useState(true)
  const [state, setState] = useState('sender')
  return (
    <div className="admin-container">
      {!userLogged && <LoginForm />}
      {userLogged && state === 'sender' && <PhotoSender />}
    </div>
  )
}
