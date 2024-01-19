import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact }) => {
  const { phone_number, email, address } = contact;
  return (
    <div>
      <h1 className="text-3xl">CONTACT</h1>
      <ul className="py-5 text-lg flex flex-col gap-3">
        <li className="flex items-center gap-4">
          <a href={`tel:+88${phone_number}`} className="p-2 bg-blue-300 rounded-full">
            <FaPhone className=" text-sm" />
          </a>
          <p>{phone_number ? phone_number : '01********'}</p>
        </li>
        <li className="flex items-center gap-4">
          <a href={`mailto:${email}`} className="p-2 bg-blue-300 rounded-full">
            <FaEnvelope className=" text-sm" />
          </a>
          <p>{email}</p>
        </li>
        <li className="flex items-center gap-4">
          <a href={`https://www.google.com/maps/search/${address}`} target="blank" className="p-2 bg-blue-300 rounded-full">
            <FaMapMarkerAlt className=" text-sm" />
          </a>
          <p>{address} Dhaka,Bangladesh</p>
        </li>
      </ul>
      <hr className=" border-gray-400 w-3/4 py-5" />
    </div>
  );
};

export default Contact;
