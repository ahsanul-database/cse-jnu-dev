import React, { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";
import Swal from "sweetalert2";
import ExploreButton from "./ExploreButton";
import { useNavigate } from "react-router-dom";

const NoticeBox = () => {
  const [notice, setNotice] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jnu-server-production.up.railway.app/upcomingNotices")
      .then((res) => res.json())
      .then((data) => {
        setNotice(data);
      });
  }, []);

  const handleDetails = (notice) => {
    const { title, description, date, time } = notice;
    console.log(description);
    const data = description
      .map((it, i) => {
        return `<li class='text-left marker:text-sky-400'>${description[i]}</li>`;
      })
      .join("");

    Swal.fire({
      title: `<h1 class='text-normal md:text-xl space-y-5'>${title}</h1>`,
      html: `
      <div class='text-left text-small md:text-xl'>
      
      <h2 class =' font-bold'>Description: </h2>
    ${data}

    <h2 class='pt-5'><span class='font-bold'>Schedule</span>: ${date} At ${time}

    
      </div>
  `,
      confirmButtonAriaLabel: "Nice",
    });
  };
  const handlePage = () => {
    navigate("/allnotices");
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-10 myText">
        Notice Board - Upcoming Events
      </h1>
      <div className="h-[450px] bg-teal-100 p-3 lg:p-10 rounded-lg shadow-lg shadow-green-500">
        <section className="py-5 relative">
          {notice.map((card, index) => (
            <div>
              {index % 2 === 0 ? (
                <div
                  key={index}
                  onClick={() => handleDetails(card)}
                  className={` p-3 h- w-fit  my-3 cursor-pointer absolute rounded-lg shadow-lg`}
                  style={{
                    top: `${Math.random() * 70}%`,
                    left: `${Math.random() * 30}%`,
                    backgroundColor: `${card.bgcolor}`,
                  }}
                >
                  <div className="relative">
                    <FaMapPin className="absolute -top-8 -left-6 rotate-[-45deg] text-4xl text-teal-600" />
                    <div className="absolute top-0 gap-1 right-0 flex text-sm">
                      {card.tag.map((it, i) => {
                        return (
                          <p
                            key={i}
                            className="py-1 px-4 bg-teal-200  rounded-full "
                          >
                            {card.tag[i]}
                          </p>
                        );
                      })}
                    </div>
                    <div className="pt-10">
                      <h1>{card.title}</h1>
                      <h2>{card.date + " " + card.time}</h2>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => handleDetails(card)}
                  className={` p-3 h- w-60 cursor-pointer  my-3 absolute rounded-lg shadow-lg`}
                  style={{
                    top: `${Math.random() * 100}px`,
                    right: `${Math.random() * 30}%`,
                    backgroundColor: `${card.bgcolor}`,
                  }}
                >
                  <div className="relative">
                    <FaMapPin className="absolute -top-8 -left-6 rotate-[-45deg] text-4xl text-teal-600" />

                    <div className="absolute top-0 gap-1 right-0 flex text-sm">
                      {card.tag.map((it, i) => {
                        return (
                          <p
                            key={i}
                            className="py-1 px-4 bg-teal-200  rounded-full "
                          >
                            {card.tag[i]}
                          </p>
                        );
                      })}
                    </div>
                    <div className="pt-10">
                      <h1>{card.title}</h1>
                      <h2>{card.date + " " + card.time}</h2>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
      <ExploreButton onClick={handlePage} className={"my-10 mx-auto"}>
        See All Notices
      </ExploreButton>
    </>
  );
};

export default NoticeBox;
