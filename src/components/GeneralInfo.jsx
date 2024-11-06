function GeneralInfo({ info }) {
  return (
    <>
      <section>
        <>
          <div>{info.name}</div>
          <div>{info.address}</div>
          <div>{info.email}</div>
          <div>{info.contactNo}</div>
        </>
      </section>
    </>
  );
}

export default GeneralInfo;
