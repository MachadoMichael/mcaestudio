import { useState } from 'react'
import { DictionaryGrid } from '../../components/dictionary-grid/DictionaryGrid'
import { LoginForm } from '../../components/login-form/LoginForm'
import { PhotoSender } from '../../components/photo-sender/PhotoSender'
import { RequestModal } from '../../components/request-modal/RequestModal'
import { fakeDictionaries } from '../../fake-data/fakeDictionaries'
import './Admin.css'

export const Admin = () => {
  const [userLogged, setUserLogged] = useState(true)
  const [state, setState] = useState('remover')
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState(' my name?')
  const [requestSuccess, setRequestSuccess] = useState(true)
  const [selectedDictionary, setSelectedDictionary] = useState(null)
  return (
    <div className="admin-container">
      {!userLogged && <LoginForm />}
      {userLogged && state === 'sender' && <PhotoSender />}
      {userLogged && state === 'remover' && <DictionaryGrid dictionaries={fakeDictionaries} selectDictionary={selectedDictionary} />}
      {userLogged &&
        <RequestModal open={showModal} message={modalMessage} success={requestSuccess} handleCloseModal={setShowModal} />}
    </div>
  )
}
