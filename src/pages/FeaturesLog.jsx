import anim1 from "../assets/loaderrr.json";
import anim2 from "../assets/dot-ani.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const FeaturesLog = () => {
  return (
    <div>
      {/* header  */}
      <div className="relative flex items-center justify-center bg-slate-200 h-60  px-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">
          Features Log
        </h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim1} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={anim2} className="h-36 lg:h-60"></Lottie>
        </div>
      </div>
      {/* contents  */}
      <section className="py-10 lg:px-20 px-5">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Basic Structure</h2>
          <ul className="list-disc pl-5">
            <li>
              <b>Header: </b>
              There have a logo ,menu bar and a message button in the header.
              Menu bar contains 4 options: Home,Academic,Student and Faculty.
              <ul className="list-disc pl-5">
                <li>
                  Logo is clickable and it will take you to the home page.
                </li>
                <li>By default the site loads home pages data.</li>
                <li>
                  Academic option contains 4 options: Routine,Notes,Tutorial and
                  Question Bank.
                </li>
                <li>
                  Student option contains 2 options: Student ID and Student
                  Profile.
                </li>
                <li>
                  Faculty option displays the list of faculty members of the
                  department.
                </li>
                <li>
                  Message button displays a random message to everyone.When an
                  user clicked the button,it will show you a different message.
                </li>
              </ul>
            </li>
            <li>
                <b>Footer: </b> There have some quick links and social media links of developers in the footer.
            </li>
          </ul>
          <h2 className="text-2xl font-bold">Home Page</h2>
          <ul className="list-disc pl-5">
            <li>
              <b>Notice Board:</b> It displays upcoming events for the next 15
              days in ascending order. If you add an event scheduled to occur
              beyond this 15-day period, it will not be shown. An event contains
              the information of event type (like Exam,Class,Lab etc.),Course
              Name,Room No,Course teacher,time and how much time left from now.{" "}
            </li>
          </ul>
          <h2 className="text-2xl font-bold py-3">Academic</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <b>Routine:</b> It displays the routine of the current semester or
              semester final of the department. It contains the information of
              Course Name, Course Teacher,Room No,Time and Day(if it is semester
              final,then it will show the left days from now.).
            </li>
            <li>
              <b>Notes:</b> It displays the notes of the current semester of the
              department. It contains the information of Course Name, Note
              author name,Note topics and a clickable link. There have few
              options-
              <ul className="list-disc pl-5">
                <li>
                  In the search and filter box, you have the option to choose a
                  filter type based on your preference. Filters can be applied
                  by topic, author, or course name. What you choose it will
                  shows in the search placeholder.
                </li>
                <li>
                  The filter will be onchange event so no submit button added.
                </li>
              </ul>
            </li>
            <li>
              <b>Tutorial:</b> It displays the tutorial of the current semester
              of the department.
              <ul className="list-disc pl-5">
                <li>
                  There have a search funtionality. using this you can search
                  preference course lectures
                </li>
                <li>
                  It contains the information of Course Name, Semester,Topic
                  name and watch button as a tabular format.
                </li>
                <li>
                  When you click the watch button it will take you to a div
                  where you can watch the video. These videos are embeded from
                  youtube. You can play, pause, forward, backward, and adjust
                  the volume of the video. You can also watch the video in full
                  screen mode.
                </li>
              </ul>
            </li>
            <li>
              <b>Question Bank:</b> It displays the question paper and solution
              of all semester of the department.
              <ul className="list-disc pl-5">
                <li>
                  There have a search funtionality. You have the option to
                  choose a filter type based on your preference. Filters can be
                  applied by types(mid,semester) or course name. What you choose
                  it will shows in the search placeholder.
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="text-2xl font-bold py-3">Student</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <b>Student ID:</b> It displays the student id card of the student.
              It has two sides front and back.
              <ul className="list-disc pl-5">
                <li>
                  <b>Front Side:</b> This side contains Student ID,name,blood
                  Grup and Contact number. If the student is female then her
                  number will not be shown.
                </li>
                <li>
                  <b>Back Side:</b> This side contains some instrcutions and a
                  QR code. If you scan the QR code it will take you to the
                  student profile page.
                </li>
              </ul>
            </li>
            <li>
              <b>Student Profile:</b> It displays the student profile of the
              student.
              <ul className="list-disc pl-5">
                <li>
                  This window shows you student in random orders. If you refresh
                  the page it will show you a different student in same
                  position. There have field to choose how you want to see the
                  student. You can choose by ascending or descending orders.
                </li>
                <li>
                  There have a search funtionality. You have the option to
                  choose a filter type based on your preference. Filters can be
                  applied by name,roll,religion or blood group. What you choose
                  it will shows in the search placeholder.
                </li>
                <li>
                    The filter will be onchange event so no submit button added.
                </li>
                <li>
                    Each Student card have 3 sections. First section shows about information. Second section shows academic information. Third section shows contact and personal information. Every section have student image. In third section there have a button to learn more. If you click the button it will take you to the student profile page.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Link to="/">
        <p className="py-2 px-5 bg-teal-200 w-fit mx-auto my-5">Back to Home</p>
      </Link>
    </div>
  );
};

export default FeaturesLog;
