import { FaClockRotateLeft } from "react-icons/fa6";

const TutorialMobile = ({ allData }) => {
  console.log(allData);
  return (
    <div>
      <h1>Time to go with best........</h1>
      {/* parent div to show all the tutorials */}
      <div className="px-5 flex flex-col gap-6">
        {
        allData.map((item, idx) => (
          <div key={idx}>
            {/* div to show the video */}
            <div className="border-4  lg:border-8 border-teal-600 shadow-2xl shadow-teal-400">
              <iframe
                className="w-full h-[360px]"
                src={`https://www.youtube.com/embed/${item.classURL}}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* div to show the details */}
            <div className="flex justify-between py-2">
              <div>
                <h2 className="text-xl font-bold">
                  Course Name: {item.CourseName}
                </h2>
                <h2 className="text-xl font-bold">Topic: {item.topic} </h2>
              </div>
              <div>
                <p className="flex gap-2 items-center">
                  <FaClockRotateLeft className="text-lg" /> 2 months
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* child div to show one tutorial */}
        <div>
          {/* div to show the video */}
          <div className="border-4  lg:border-8 border-teal-600 shadow-2xl shadow-teal-400">
            <iframe
              className="h-[240px] md:h-[320px] w-full"
              src={`https://www.youtube.com/embed/U4B5_MsM6kY`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* div to show the details */}
          <div className="flex justify-between py-2">
            <div>
              <h2 className="text-xl font-bold">Course Name:</h2>
              <h2 className="text-xl font-bold">Topic: </h2>
            </div>
            <div>
              <p className="flex gap-2 items-center">
                <FaClockRotateLeft className="text-lg" /> 2 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialMobile;
