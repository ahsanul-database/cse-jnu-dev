import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const StudentIDCard = ({ item }) => {
  const { gender, photo, name, blood, phone_number } = item;
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  const value = `https://ambiguity13.netlify.app/students/profileCard/${item.id}`;
  return (
    <div className="flex justify-center text-black">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onClick={handleClick}
          className="shadow-2xl w-[360px] h-[570px] relative bg-white "
        >
          <h2
            style={{ writingMode: "vertical-rl" }}
            className="text-[35px] absolute font-bold uppercase rotate-180 h-full text-center text-white bg-[#a95205]"
          >
            Jagannath University,Dhaka
          </h2>
          <div className="pl-[43px] flex flex-col items-center py-3 justify-center">
            <img
              className="h-[115px] w-[125px] "
              src="https://i.ibb.co/pbMX4Cg/jnulogo.png"
              alt=""
            />
            <p className="text-3xl uppercase font-semibold  text-[#405ba8]">
              Student id card
            </p>
            <img
              className="size-[155px] py-3 object-cover rounded"
              src={
                photo
                  ? photo
                  : gender === "F"
                  ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                  : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
              }
              alt=""
            />
            <p className="text-2xl text-[#ff3147] font-semibold">
              ID: {item.id}
            </p>
            <p className="text-wrap	text-[20px] uppercase  font-bold">{name}</p>
            <p className="text-[20px] font-bold">
              Blood Group: {blood ? `${blood}ve` : "NULL"}
            </p>
            <h2 className="text-[25px] font-bold px-4 py-1 my-2 text-white bg-[#01258b]">
              Bachelor Programme
            </h2>
            <p className="text-[20px] font-bold capitalize text-center">
              department of computer science and engineering
            </p>
            <p className="text-2xl font-semibold">
              Contact:{" "}
              {phone_number && gender == "M" ? phone_number : "Not Shown"}{" "}
            </p>
          </div>
        </div>
        <div
          onClick={handleClick}
          className="shadow-2xl w-[360px] h-[570px] relative bg-white "
        >
          <h2 className="text-[35px] uppercase text-center bg-black text-white font-bold">
            non-transferable
          </h2>
          <div className="pt-2">
            <p
              style={{ writingMode: "vertical-rl" }}
              className="text-[25px] absolute font-bold  rotate-180 pb-6 text-center "
            >
              Valid upto December, 2025
            </p>
            <div className="pl-[43px] pr-1 text-[20px] font-semibold">
              <p>
                This card is the property of Jagannath University. Unlawful use
                of the card is strictly porhibited
              </p>{" "}
              <br />
              <p>
                If found, please return to the Office of the{" "}
                <span>Registrar</span>, Jagannath University(JnU), Dhaka-1100,
                Bangladesh
              </p>{" "}
              <br />
              <p>Telephone: +88-02-9534255</p>
              <p>Web: http://www.jnu.ac.bd</p>
              <p>Email: register@jnu.ac.bd</p>
            </div>
          </div>
          <div className="flex justify-between  pt-5 px-5">
            <div className="w-1/2">
              <QRCodeSVG size={85} value={value} />
            </div>
            <div className="w-[60%] space-y-0">
              <img
                className="h-[45px] w-full"
                src="https://i.ibb.co/XZRNm27/signa.png"
                alt="signature"
              />
              <hr className=" border-dashed border-2 mt-2 border-black" />
              <p className="font-semibold text-center">Register</p>
              <p className="font-semibold text-center">Jagannath University</p>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default StudentIDCard;
