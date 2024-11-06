
function PracticalExperience({ info , addExperience, deleteExperience, btnDisable}) {
    return (
      <>
        <section>
          <div >
            <div>Company Name: {info.companyName}</div>
            <div>Position: {info.position}</div>
            <div>Responsibilities: {info.responsibilities}</div>
            <div>Date: {info.date}</div>
            <button onClick={addExperience}>click to add</button>
            <button onClick={deleteExperience} disabled={btnDisable}>click to delete</button>

          </div>
        </section>
      </>
    );
  }
  
  export default PracticalExperience;
  