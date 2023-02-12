import SkillSection from "./SkillsSection";
import PersonalInfo from "./personalinfo";
import Interstsection from "./interestsection";
import "./css/bioData.css";

const bioData = (props) => {
  return (
    <div className="biodata">
      <PersonalInfo
        className="personal-info"
        name={props.bioDatainfo.name}
        faname={props.bioDatainfo.nkname}
        dob={props.bioDatainfo.dob}
        address={props.bioDatainfo.address}
      />
      <SkillSection skills={props.bioDatainfo.skills} />
      <Interstsection interestsec={props.bioDatainfo.interestsec} />
    </div>
  );
};

export default bioData;
