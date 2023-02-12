import "./App.css";
import BioData from "./componant/bioData";

const persons = [
  {
    name: "Md. Afser Uddin",
    nkname: "Afser",
    dob: "30-12-2023",
    skills: ["HTML5", "CSS3", "Bootstarp 5"],
    interestsec: ["Codeing", "Playing Football"],
  },

  {
    name: "Md. Shoriful Islam",
    nkname: "Shorif",
    dob: "30-12-2023",
    skills: ["PHP", "Laravel", "Codignator"],
    interestsec: ["Codeing", "Playing Football"],
  },
  {
    name: "Md. Towhidul Islam",
    nkname: "Towhid",
    dob: "30-12-2023",
    skills: ["PHP", "Laravel", "Codignator"],
    interestsec: ["Codeing", "Playing Football"],
  },
  {
    name: "Md. Biplop",
    nkname: "Biplop",
    dob: "30-12-2023",
    skills: ["PHP", "Laravel", "Codignator"],
    interestsec: ["Codeing", "Playing Football"],
  },
];

function App() {
  return (
    <div className="apps">
      {persons.map((item) => (
        <BioData key={item.name} bioDatainfo={item} />
      ))}
    </div>
  );
}

export default App;
