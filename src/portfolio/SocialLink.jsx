import { FaFacebook } from "react-icons/fa";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquarePollVertical,
  FaYoutube,
} from "react-icons/fa6";

const SocialLink = ({ social }) => {
  const { facebook, linkedin, github, codeforces, youtube, instagram } = social;
  return (
    <div>
      <h1 className="text-3xl">SOCIAL PROFILE</h1>
      <ul className="py-5 text-lg flex flex-col gap-3">
        {facebook && (
          <li className="flex items-center gap-4">
            <a
              href={`https://www.facebook.com/${facebook}`}
              target="blank"
              className="p-2 bg-blue-300 rounded-full"
            >
              <FaFacebook className=" text-lg" />
            </a>
            <p>facebook.com/{facebook}</p>
          </li>
        )}
        {github && (
          <li className="flex items-center gap-4">
            <a
              href={`https://www.github.com/${github}`}
              target="blank"
              className="p-2 bg-blue-300 rounded-full"
            >
              <FaGithub />
            </a>
            <p>github.com/{github}</p>
          </li>
        )}
        {linkedin && (
          <li className="flex items-center gap-4">
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="blank"
              className="p-2 bg-blue-300 rounded-full"
            >
              <FaLinkedin />
            </a>
            <p>linkedin.com/in/{linkedin}</p>
          </li>
        )}
        {codeforces && (
          <li className="flex items-center gap-4">
            <a
              href={`https://www.codeforces.com/profile/${codeforces}`}
              target="blank"
              className="p-2 bg-blue-300 rounded-full"
            >
              <FaSquarePollVertical />
            </a>
            <p>codeforces.com/profile/{codeforces}</p>
          </li>
        )}
        {youtube && (
          <li className="flex items-center gap-4">
            <a
              href={`https://www.youtube.com/${youtube}`}
              target="blank"
              className="p-2 bg-blue-300 rounded-full"
            >
              <FaYoutube />
            </a>
            <p>youtube.com/{youtube}</p>
          </li>
        )}
        {instagram && (
          <li className="flex items-center gap-4">
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="blank"
              className="p-2 bg-blue-300 rounded-full"
            >
              <FaInstagram />
            </a>
            <p>instagram.com/{instagram}</p>
          </li>
        )}
      </ul>
      <hr className=" border-gray-400 w-3/4 py-5" />
    </div>
  );
};

export default SocialLink;
