
function PracticalExperience({ info , addExperience, deleteExperience, btnDisable}) {
    return (
      <>
        <section>
          <div >
            <div>Company Name: {info.companyName}</div>
            <div>Position: {info.position}</div>
            <div>Responsibilities: {info.responsibilities}</div>
            <div>Date: {info.date}</div>
          </div>
        </section>
      </>
    );
  }
  
  export default PracticalExperience;
  