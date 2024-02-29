import Swal from "sweetalert2";
import InputComponent from "../components/InputComponent";
import { useState } from "react";

const AdminPanel = () => {
  const [newdata, setNewdata] = useState({});
  const apiKey = "1710275c1d956bb14df2c18bc7154c18";
  const imageBase64 =
    "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  const handleInputChange = (name, value) => {
    setNewdata({ ...newdata, [name]: value });
  };
  function convertImageToBase64(imageFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const id = form.id.value;
  //   const email = form.email.value;
  //   const photo = form.photo.files[0];
  //   const imageBase64 = await convertImageToBase64(photo);
  //   const reqBody = JSON.stringify({
  //     id: id,
  //     email: email,
  //     photo: imageBase64,
  //   });
  //   // console.log(formData);
  //   fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
  //     method: "POST",
  //     body: reqBody,
  //   })
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((data) => {
  //       console.log("image uploaded", data);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     });

  //   // const data = {
  //   //   uniName: "Jagannath University",
  //   //   degree: "BSc",
  //   //   major: "Computer Science and Engineering",
  //   //   uniStartYear: "2023",
  //   //   graduationDate: "2027",
  //   //   educationalBackground: "Science",
  //   //   clgPYear: null,
  //   //   clgName: null,
  //   //   schoolName: null,
  //   //   schoolPYear: null,
  //   //   toph: null,
  //   //   city: null,
  //   //   nickname: null,
  //   //   description: null,
  //   //   email: null,
  //   //   gender: null,
  //   //   birthdate: null,
  //   //   photo: null,
  //   //   skills: null,
  //   //   blood: null,
  //   //   address: null,
  //   //   height: null,
  //   //   weight: null,
  //   //   maritalStatus: null,
  //   //   spouseName: null,
  //   //   facebook: null,
  //   //   phone_number: null,
  //   //   instagram: null,
  //   //   linkedin: null,
  //   //   github: null,
  //   //   youtube: null,
  //   //   website: null,
  //   //   codeforces: null,
  //   //   codechef: null,
  //   //   leetcode: null,
  //   //   hackerrank: null,
  //   //   whatsapp: null,
  //   //   religion: null,
  //   //   id: null,
  //   //   hobbies: null,
  //   // };

  //   // Swal.fire({
  //   //   title: "Are you sure?",
  //   //   text: "You won't be able to revert this!",
  //   //   icon: "warning",
  //   //   showCancelButton: true,
  //   //   confirmButtonColor: "#3085d6",
  //   //   cancelButtonColor: "#d33",
  //   //   confirmButtonText: "Yes, add it!",
  //   // }).then((result) => {
  //   //   if (result.isConfirmed) {
  //   //     fetch("https://jnu-server-production.up.railway.app/updateStudentData", {
  //   //       method: "POST",
  //   //       headers: {
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //       body: JSON.stringify(data),
  //   //     });
  //   //     Swal.fire({
  //   //       title: "Added!",
  //   //       text: "Your data has been added.",
  //   //       icon: "success",
  //   //     });
  //   //   }
  //   // });
  //   // console.log(data);
  //   // e.target.reset();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const email = form.email.value;
    const photo = form.photo.files[0]; // Access the file object

    // Convert image to base64
    const imageBase64 = await convertImageToBase64(photo);

    // Construct the request body
    const requestBody = JSON.stringify({
      id: id,
      email: email,
      image: imageBase64,
    });

    fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Image uploaded", data);
        // Handle the response data as needed
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  // Function to convert image to base64
  function convertImageToBase64(imageFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <div>
      <h1 className="text-2xl text-center py-10">
        Admin Panel : Add Student Data
      </h1>
      <div className="mx-auto px-10 lg:w-2/3">
        <form onSubmit={handleSubmit} className="py-10 w-full ">
          <div className=" grid lg:grid-cols-2 gap-3">
            <div className="space-y-2 text-sm">
              <label>Name</label>
              <input
                name="name"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>Serial</label>
              <input
                name="serial"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label>ID</label>
              <input
                name="id"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>Email</label>
              <input
                name="email"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label>Photo</label>
              <input
                name="photo"
                type="file"
                className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none"
              />
            </div>
          </div>
          <div className="mx-auto flex justify-center py-5">
            <button
              className="py-2 px-5 bg-blue-300 hover:bg-blue-400 rounded w-full "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
