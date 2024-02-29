import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
import LoadingPage from "./LoadingPage";
import Banner from "../components/Banner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PersonalInfo from "./ProfileInfo/PersonalInfo";
import AcademicInfo from "./ProfileInfo/AcademicInfo";
import Miscellaneous from "./ProfileInfo/Miscellaneous";

const UserProfile = () => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const userMail = user?.email;
  useEffect(() => {
    fetch(
      `https://jnu-server-production.up.railway.app/userProfileDetails?email=${userMail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen">
      <Banner>My Profile</Banner>
      <Tabs className="py-10 px-3 lg:px-20">
        <TabList>
          <Tab>Personal Information</Tab>
          <Tab>Academic Information</Tab>
          <Tab>Miscellaneous Information</Tab>
        </TabList>
        <TabPanel>
          <PersonalInfo
            studentData={studentData}
            setStudentData={setStudentData}
          />
        </TabPanel>
        <TabPanel>
          <AcademicInfo
            studentData={studentData}
            setStudentData={setStudentData}
          />
        </TabPanel>
        <TabPanel>
          <Miscellaneous
            studentData={studentData}
            setStudentData={setStudentData}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserProfile;
