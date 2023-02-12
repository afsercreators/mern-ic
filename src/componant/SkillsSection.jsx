const skillSection = (props) => {
  return (
    <div>
      <h2>My Skilled</h2>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default skillSection;
