function EducationalExperience({ info }) {
  return (
    <>
      <section>
        <div >
          <div>School Name: {info.schoolName}</div>
          <div>Study Title: {info.studyTitle}</div>
          <div>Date: {info.date}</div>
        </div>
      </section>
    </>
  );
}

export default EducationalExperience;
