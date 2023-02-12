const personalINfo = (props) => {
  return (
    <div>
      <h1>Information</h1>
      <ul>
        <p>
          Name : <strong>{props.name}</strong>
        </p>
        <p>
          Nick Name : <strong>{props.nkname}</strong>
        </p>
        <p>
          Date of Birth : <strong>{props.dob}</strong>
        </p>
        <p>
          Address : <strong>{props.address}</strong>
        </p>
      </ul>
    </div>
  );
};

export default personalINfo;
