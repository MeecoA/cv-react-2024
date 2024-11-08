import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./components/GeneralInfo.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationalExperience from "./components/EducationalExperience.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";
import Inputs from "./components/Inputs.jsx";
import Button from "./components/Button.jsx";


function App() {
  // A cv maker app
  const [generalInfo, setGeneralInfo] = useState({
    id: crypto.randomUUID(),
    name: "Meeco",
    address: "554, Dyan Lang Street", 
    email: "meecorcll@gmail.com ",
    contactNo: "09221312",
  });

  const [isEdit, setIsEdit] = useState(false)

  const handleOnchange = (event) =>{
    const { name, value } = event.target;
  setGeneralInfo((prev) => ({
    ...prev,
    [name]: value, 
  }));
  }
  const handleEditClick = () =>{
    setIsEdit(!isEdit)
  }
  const handleSaveClick = () =>{
    setIsEdit(!isEdit)
  }


  const [educExperience, setEducExperience] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "bsu",
      studyTitle: "it",
      date: "2023",
    },
    ,
  ]);
  const [practExperience, setPractExperience] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "citco",
      position: "data engineer",
      responsibilities: "responsibilities",
      date: "2023",
    },
  ]);
  const addPractExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      responsibilities: "",
      date: "",
    };
    setPractExperience((prevExperience) => [...prevExperience, newExperience]);
  };
  const deletePractExperience = (id) => {
    if (practExperience.length !== 1){
      const newExperience = practExperience.filter(experience => experience.id !== id)
      setPractExperience(newExperience)
    }
   
  }

  return (
    <>
      <div>
        { !isEdit ? <div>
          <GeneralInfo info={generalInfo}></GeneralInfo>
          <Button handleClick={handleEditClick} btnText={"Edit"}></Button>
        </div>
         :  
        <div>
        <Inputs value={generalInfo.name} handleOnchange={handleOnchange} name="name"/> 
        <Inputs value={generalInfo.address} handleOnchange={handleOnchange} name="address"/> 
        <Inputs value={generalInfo.email} handleOnchange={handleOnchange} name="email"/> 
        <Inputs value={generalInfo.contactNo} handleOnchange={handleOnchange} name="contactNo"/>
        <Button handleClick={handleSaveClick} btnText={"save"}></Button>
        </div>
        } 
         
      </div>
      <div>
        {educExperience.map((experience) => (
          <EducationalExperience
            info={experience}
            key={experience.id}
          ></EducationalExperience>
        ))}
      </div>
      <div>
        {practExperience.map((experience) => (
          <div key={experience.id}>
          <PracticalExperience
            info={experience}
            key={experience.id}
            addExperience={addPractExperience}
          ></PracticalExperience>
          <Button key={`${experience.id}-add`} btnText={"Add Experience"}  handleClick={addPractExperience}></Button>
          <Button key={`${experience.id}-delete`} btnText={"Delete"} handleClick={()=>deletePractExperience(experience.id)}></Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
