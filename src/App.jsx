import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./components/GeneralInfo.jsx";
import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationalExperience from "./components/EducationalExperience.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";

function App() {
  // A cv maker app
  const [btnDisable, setBtnDisable] = useState(true)
  const [generalInfo, setGeneralInfo] = useState({
    id: crypto.randomUUID(),
    name: "Meeco",
    address: "554, Dyan Lang Street", 
    email: "meecorcll@gmail.com ",
    contactNo: "09221312",
  });
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
    setBtnDisable(false)
  };
  const deletePractExperience = (id) => {
    if (practExperience.length !== 1){
      const newExperience = practExperience.filter(experience => experience.id !== id)
      setPractExperience(newExperience)
    }else{
      setBtnDisable(true)
    }
   
  }

  return (
    <>
      <div>
        <GeneralInfo info={generalInfo}></GeneralInfo>
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
          <PracticalExperience
            info={experience}
            key={experience.id}
            addExperience={addPractExperience}
            deleteExperience={() => deletePractExperience(experience.id)}
            btnDisable={btnDisable}
          ></PracticalExperience>
        ))}
      </div>
    </>
  );
}

export default App;
