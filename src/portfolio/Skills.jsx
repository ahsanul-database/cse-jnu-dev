import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  const msword = 95;
  const ppt = 80;
  const excel = 45;
  const leadership = 80;
  const twork = 75;
  const integrity = 95;
  const loyality = 100;
  return (
    <div>
      <h1 className="text-3xl">SKILLS</h1>
      <div className="flex gap-10 justify-between px-5 items-center py-5">
        <div className="flex flex-col gap-3 ">
          <CircularProgressbar
            className="h-12 lg:h-24"
            value={msword}
            text={`${msword}%`}
          />
          <p className="text-center text-xs lg:text-lg">Microsoft Word</p>
        </div>
        <div className="flex flex-col gap-3">
          <CircularProgressbar
            className="h-12 lg:h-24"
            value={excel}
            text={`${excel}%`}
          />
          <p className="text-center text-xs lg:text-lg">Microsoft Excel</p>
        </div>
        <div className="flex flex-col gap-3">
          <CircularProgressbar className="h-12 lg:h-24" value={ppt} text={`${ppt}%`} />
          <p className="text-center text-xs lg:text-lg">Microsoft PowerPoint</p>
        </div>
      </div>
      <hr />
      <div className="flex gap-10 justify-between px-5 items-center py-5">
        <div className="flex flex-col gap-3 ">
          <CircularProgressbar
            className="h-12 lg:h-24"
            value={leadership}
            text={`${leadership}%`}
          />
          <p className="text-center text-xs lg:text-lg">Leadership</p>
        </div>

        <div className="flex flex-col gap-3">
          <CircularProgressbar
            className="h-12 lg:h-24"
            value={twork}
            text={`${twork}%`}
          />
          <p className="text-center text-xs lg:text-lg">Team Work</p>
        </div>
        <div className="flex flex-col gap-3">
          <CircularProgressbar
            className="h-12 lg:h-24"
            value={integrity}
            text={`${integrity}%`}
          />
          <p className="text-center text-xs lg:text-lg">Integrity</p>
        </div>
        <div className="flex flex-col gap-3">
          <CircularProgressbar
            className="h-12 lg:h-24"
            value={loyality}
            text={`${loyality}%`}
          />
          <p className="text-center text-xs lg:text-lg">Loyalty</p>
        </div>
      </div>
      <hr />
     
    </div>
  );
};

export default Skills;
