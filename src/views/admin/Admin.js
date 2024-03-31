import './admin.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { RequestModal } from '../../components/request-modal/RequestModal';

export const Admin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()
  const user = { username: "mcaestudio", password: "mc43stud10" }

  const VerifyLogin = (event) => {
    event.preventDefault();
    if (username === user.username && password === user.password) navigate('/creator')
    else setShowModal(true)
  }

  if (showModal) {
    return <RequestModal
      open={showModal}
      message={"Please check yours credentials."}
      success={false}
      handleCloseModal={setShowModal} />
  }

  return <div id='admin-container'>
    <form onSubmit={(e) => VerifyLogin(e)}>
      <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Enter</button>
    </form>
  </div >
}
