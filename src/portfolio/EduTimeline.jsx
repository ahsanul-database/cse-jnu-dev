import { FaCircleNotch, FaRegCheckCircle } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EduTimeline = ({ academics }) => {
  const { clgPYear, clgName, schoolName, schoolPYear, educationalBackground } =
    academics;
  return (
    <div>
      <VerticalTimeline layout="1-column-left" lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "teal", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  teal" }}
          date="2023 - present"
          iconStyle={{ background: "cyan", color: "black" }}
          icon={<FaCircleNotch className=" animate-spin" />}
        >
          <h3 className="vertical-timeline-element-title text-lg">
            Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jagannath University
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "teal", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  teal" }}
          date={`
            ${clgPYear} - ${schoolPYear}`}
          iconStyle={{ background: "cyan", color: "black" }}
          icon={<FaRegCheckCircle className=" " />}
        >
          <h3 className="vertical-timeline-element-title text-lg">
            Higher Secondary ({educationalBackground})
          </h3>
          <h4 className="vertical-timeline-element-subtitle">{clgName} </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "teal", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  teal" }}
          date={`
            ${schoolPYear} - ${schoolPYear - 2}`}
          iconStyle={{ background: "cyan", color: "black" }}
          icon={<FaRegCheckCircle className=" " />}
        >
          <h3 className="vertical-timeline-element-title text-lg">
            Secondary ({educationalBackground})
          </h3>
          <h4 className="vertical-timeline-element-subtitle">{schoolName} </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EduTimeline;
