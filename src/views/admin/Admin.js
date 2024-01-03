import { useEffect, useState } from 'react'
import { DictionaryGrid } from '../../components/dictionary-grid/DictionaryGrid'
import { LoginForm } from '../../components/login-form/LoginForm'
import { PhotoSender } from '../../components/photo-sender/PhotoSender'
import { RequestModal } from '../../components/request-modal/RequestModal'
import { fakeDictionaries } from '../../fake-data/fakeDictionaries'
import { getAllPhotosFromFirestore } from '../../firebase/firebaseApp'
import './Admin.css'

export const Admin = () => {
  const [userLogged, setUserLogged] = useState(true)
  const [state, setState] = useState('sender')
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('Test?')
  const [requestSuccess, setRequestSuccess] = useState(true)
  const [selectedDictionary, setSelectedDictionary] = useState(null)
  const [dictionaries, setDictionaries] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPhotosFromFirestore()
        console.warn(data)
        setDictionaries(data)
      } catch (error) {
        console.error('Error getting file URLs:', error);
      }
    };

    fetchData();
  }, []);


  console.log(dictionaries, 'xxx')

  return (
    <div className="admin-container">
      {!userLogged && <LoginForm />}
      {userLogged && state === 'sender' && <PhotoSender />}
      {userLogged && state === 'remover' && dictionaries !== null && <DictionaryGrid dictionaries={dictionaries} selectDictionary={selectedDictionary} />}
      {userLogged &&
        <RequestModal open={showModal} message={modalMessage} success={requestSuccess} handleCloseModal={setShowModal} />}
    </div>
  )
}
