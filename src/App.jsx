import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationalExperience from "./components/EducationalExperience.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";
import Inputs from "./components/Inputs.jsx";
import Button from "./components/Button.jsx";

function App() {
  // A cv maker app

  // states
  const [generalInfo, setGeneralInfo] = useState({
    id: crypto.randomUUID(),
    name: "Meeco",
    address: "554, Dyan Lang Street",
    email: "meecorcll@gmail.com ",
    contactNo: "09221312",
  });

  const [educExperience, setEducExperience] = useState({
    id: crypto.randomUUID(),
    schoolName: "bsu",
    studyTitle: "it",
    date: "2023-01-01",
  });

  const [practExperience, setPractExperience] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "citco",
      position: "data engineer",
      responsibilities: "responsibilities",
      date: "2023-01-01",
      edit: false,
    },
  ]);
  const [editGeneralInfo, setEditGeneralInfo] = useState(false);
  const [editEducExperience, setEditEducExperience] = useState(false);
  const bgColor = "bg-green-500";

  //functions

  // single onchange to two components with similar onchange behaviour
  const handleOnchange = (event, component) => {
    const { name, value } = event.target;
    if (component === "generalInfo") {
      setGeneralInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (component === "educExperience") {
      setEducExperience((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // separate onchange for list of inputs
  const handleOnchangePractExperience = (event, id) => {
    const { name, value } = event.target;
    const updatedPractExperience = practExperience.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [name]: value };
      }
      return experience;
    });
    setPractExperience(updatedPractExperience);
  };

  // single edit function for two components with similar behaviour
  const handleEditClick = (component) => {
    if (component === "generalInfo") {
      setEditGeneralInfo(!editGeneralInfo);
    } else if (component === "educExperience") {
      setEditEducExperience(!editEducExperience);
    }
  };

  //separate function for handling edit property of the object
  const handleEditPractExperience = (id) => {
    const updatedEditExperience = practExperience.map((experience) => {
      if (experience.id === id) {
        return { ...experience, edit: !experience.edit };
      }
      return experience;
    });
    setPractExperience(updatedEditExperience);
  };

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
    if (practExperience.length !== 1) {
      const newExperience = practExperience.filter(
        (experience) => experience.id !== id
      );
      setPractExperience(newExperience);
    }
  };

  return (
    <>
      <section>
        {editGeneralInfo ? (
          <div>
            <GeneralInfo info={generalInfo}></GeneralInfo>
            <Button
              handleClick={() => handleEditClick("generalInfo")}
              btnText={"Edit"}
            ></Button>
          </div>
        ) : (
          <div>
            <p>General Information</p>
            <Inputs
              value={generalInfo.name}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <Inputs
              value={generalInfo.address}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="address"
              type="text"
              placeholder="Enter your addess"
            />
            <Inputs
              value={generalInfo.email}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <Inputs
              value={generalInfo.contactNo}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="contactNo"
              type="text"
              placeholder="Enter Contact Number"
            />
            <Button
              handleClick={() => handleEditClick("generalInfo")}
              btnText={"Save"}
              bgColor={bgColor}
              hoverBgColor={"hover:bg-green-400"}
            ></Button>
          </div>
        )}
      </section>

      <div>
        {editEducExperience ? (
          <div key={educExperience.id}>
            <EducationalExperience
              info={educExperience}
            ></EducationalExperience>
            <Button
              handleClick={() => handleEditClick("educExperience")}
              btnText={"Edit"}
            ></Button>
          </div>
        ) : (
          <div key={educExperience.id}>
            <p>Educational Experience</p>
            <Inputs
              value={educExperience.schoolName}
              handleOnchange={(event) =>
                handleOnchange(event, "educExperience")
              }
              name="schoolName"
              type="text"
            />
            <Inputs
              value={educExperience.studyTitle}
              handleOnchange={(event) =>
                handleOnchange(event, "educExperience")
              }
              name="studyTitle"
              type="text"
            />
            <Inputs
              value={educExperience.date}
              handleOnchange={(event) =>
                handleOnchange(event, "educExperience")
              }
              name="date"
              type="date"
            />
            <Button
              handleClick={() => handleEditClick("educExperience")}
              btnText={"Save"}
              bgColor={bgColor}
              hoverBgColor={"hover:bg-green-400"}
            ></Button>
          </div>
        )}
      </div>

      <div>
        <p>Practical Experience</p>
        {practExperience.map((experience) =>
          experience.edit ? (
            <div key={experience.id}>
              <PracticalExperience
                info={experience}
                addExperience={addPractExperience}
              ></PracticalExperience>
              <Button
                key={experience.id}
                btnText={"Edit"}
                handleClick={() => handleEditPractExperience(experience.id)}
              ></Button>
            </div>
          ) : (
            <div key={experience.id}>
              <Inputs
                name="companyName"
                value={experience.companyName}
                handleOnchange={(event) => {
                  handleOnchangePractExperience(event, experience.id);
                }}
              />
              <Inputs
                type="text"
                name="position"
                value={experience.position}
                handleOnchange={(event) => {
                  handleOnchangePractExperience(event, experience.id);
                }}
              />
              <Inputs
                type="text"
                name="responsibilities"
                value={experience.responsibilities}
                handleOnchange={(event) => {
                  handleOnchangePractExperience(event, experience.id);
                }}
              />
              <Inputs
                type="date"
                name="date"
                value={experience.date}
                handleOnchange={(event) => {
                  handleOnchangePractExperience(event, experience.id);
                }}
              />
              <Button
                key={experience.id}
                btnText={"Save"}
                handleClick={() => handleEditPractExperience(experience.id)}
                bgColor={bgColor}
                hoverBgColor={"hover:bg-green-400"}
              ></Button>
              <Button
                key={`${experience.id}-delete`}
                btnText={"Delete"}
                handleClick={() => deletePractExperience(experience.id)}
              ></Button>
            </div>
          )
        )}
        <Button
          key={`${practExperience}-add-btn`}
          btnText={"Add Experience"}
          handleClick={addPractExperience}
        ></Button>
      </div>
    </>
  );
}

export default App;
