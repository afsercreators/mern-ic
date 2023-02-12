const interestsection = (props) => {
  return (
    <div>
      <h1>Interest Section</h1>
      <ul>
        {props.interestsec.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default interestsection;
