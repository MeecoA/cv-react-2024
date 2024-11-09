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
    },
  ]);

  const [editGeneralInfo, setEditGeneralInfo] = useState(false);
  const [editEducExperience, setEditEducExperience] = useState(false);
  const [editPractExperience, setEditPractExperience] = useState(false);

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
    } else if (component === "practExperience") {
      practExperience.map((experience) => {
        setPractExperience((prev) => ({
          ...prev,
          [name]: value,
        }));
      });
    }
  };

  const handleEditClick = (component) => {
    if (component === "generalInfo") {
      setEditGeneralInfo(!editGeneralInfo);
    } else if (component === "educExperience") {
      setEditEducExperience(!editEducExperience);
    }
  };

  const handleEditPractExperience = (id) => {
    practExperience.map((experience) => {
      if (experience.id === id) {
        setEditPractExperience(!editPractExperience);
      }
    });
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
            <Inputs
              value={generalInfo.name}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="name"
              type="text"
            />
            <Inputs
              value={generalInfo.address}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="address"
              type="text"
            />
            <Inputs
              value={generalInfo.email}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="email"
              type="text"
            />
            <Inputs
              value={generalInfo.contactNo}
              handleOnchange={(event) => handleOnchange(event, "generalInfo")}
              name="contactNo"
              type="text"
            />
            <Button
              handleClick={() => handleEditClick("generalInfo")}
              btnText={"Save"}
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
            ></Button>
          </div>
        )}
      </div>

      <div>
        {practExperience.map((experience) =>
          editPractExperience ? (
            <div key={experience.id}>
              <PracticalExperience
                info={experience}
                addExperience={addPractExperience}
              ></PracticalExperience>
              <Button
                key={`${experience.id}-edit`}
                btnText={"Edit"}
                handleClick={() => handleEditPractExperience(experience.id)}
              ></Button>
              <Button
                key={`${experience.id}-delete`}
                btnText={"Delete"}
                handleClick={() => deletePractExperience(experience.id)}
              ></Button>
            </div>
          ) : (
            <div key={experience.id}>
              <Inputs
                name="companyName"
                value={experience.companyName}
                handleOnchange={(event) => {
                  handleOnchange(event, "practExperience");
                }}
              />
              <Button
                key={`${experience.id}-edit`}
                btnText={"Save"}
                handleClick={() => handleEditPractExperience(experience.id)}
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
