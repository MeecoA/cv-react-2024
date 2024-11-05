import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './components/GeneralInfo.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'

function App() {
  // A cv maker app 
  const [generalInfo, setGeneralInfo] = useState({id:crypto.randomUUID(), name: 'Meeco',email: 'asd',contactNo: 'asd'})
  const [educExperience, setEducExperience] = useState({id:crypto.randomUUID(), schoolName: '',studyTitle: '',date: ''})
  const [practExperience, setPractExperience] = useState({id:crypto.randomUUID(), companyName: '',position: '',responsibilities: '',date: ''})

  return (
    <>
      <GeneralInfo info={generalInfo}></GeneralInfo>
    </>
  )
}

export default App
