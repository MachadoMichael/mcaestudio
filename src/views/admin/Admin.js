import { useState } from 'react'
import { LoginForm } from '../../components/login-form/LoginForm'
import { PhotoSender } from '../../components/photo-sender/PhotoSender'
import { RequestModal } from '../../components/request-modal/RequestModal'
import './Admin.css'

export const Admin = () => {
  const [userLogged, setUserLogged] = useState(true)
  const [state, setState] = useState('sender')
  const [showModal, setShowModal] = useState(true)
  const [modalMessage, setModalMessage] = useState(' my name?')
  const [requestSuccess, setRequestSuccess] = useState(true)
  return (
    <div className="admin-container">
      {!userLogged && <LoginForm />}
      {userLogged && state === 'sender' && <PhotoSender />}
      {userLogged &&
        <RequestModal open={showModal} message={modalMessage} success={requestSuccess} handleCloseModal={setShowModal} />}
    </div>
  )
}
