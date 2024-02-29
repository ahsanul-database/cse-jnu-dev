import Lottie from "lottie-react";
import React, { useContext, useEffect, useState } from "react";
import anim from "../../assets/notes-anim.json";
import { authContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

/*
clientid: 1095833855958-3vbm967bv1fvuvmcnt4513ud3fmrh3nb.apps.googleusercontent.com

clientsecret: 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

*/
const fields = [
  {
    type: "text",
    name: "author",
    label: "Author Name",
  },
  {
    type: "text",
    name: "title",
    label: "Note Title",
  },
  {
    type: "select",
    name: "courseTeacher",
    label: "Course Teacher",
    options: ["Teacher 1", "Teacher 2", "Teacher 3"],
  },
  {
    type: "select",
    name: "courseName",
    label: "Course Name",
    options: ["Course 1", "Course 2", "Course 3"],
  },
  {
    type: "text",
    name: "topic",
    label: "Topic Name",
  },
  {
    type: "url",
    name: "link",
    label: "Notes URL",
  },
];
const ClientID =
  "1095833855958-3vbm967bv1fvuvmcnt4513ud3fmrh3nb.apps.googleusercontent.com";
const AddNotes = () => {
  const { myData } = useContext(authContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newData = {};
  //   const form = e.target;
  //   const newnotes = form[form.length - 2].files[0];
  //   newData.notes = newnotes;

  //   const metadata = {
  //     name: newnotes.name,
  //     mimeType: newnotes.type,
  //   };
  //   const formData = new FormData();
  //   formData.append("file", newnotes);
  //   formData.append(
  //     "metadata",
  //     new Blob([JSON.stringify(metadata)], { type: "application/json" })
  //   );

  //   fetch(
  //     `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       body: formData,
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       newData.noteId = data.id;
  //       addNoteToUserDB(newData).then(() => {
  //         alert("Added Note Successfully");
  //       });
  //     });

  //   console.log(newnotes);

  //   // fetch(
  //   //   "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
  //   //   {
  //   //     method: "POST",

  //   //     body: newData,
  //   //   }
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log("File uploaded successfully. File ID:", data.id);
  //   //     // Use the file ID to construct the file link
  //   //     const fileLink = `https://drive.google.com/uc?id=${data.id}`;
  //   //     console.log("File link:", fileLink);
  //   //     // Display the file link to the user or use it as needed
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error uploading file:", error);
  //   //   });

  //   // for (let i = 0; i < form.length - 2; i++) {
  //   //   if (form[i].name) {
  //   //     newData[form[i].name] = form[i].value;
  //   //   }
  //   // }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { id: myData.id };
    for (let i = 0; i < form.length - 1; i++) {
      if (form[i].name) {
        data[form[i].name] = form[i].value;
      }
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jnu-server-production.up.railway.app/addYourNotesinDB`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        Swal.fire({
          title: "Added!",
          text: "Your info has been added to DB.",
          icon: "success",
        });
      }
    });
    console.log(data);
  };

  return (
    <div className="min-h-[calc(100vh-150px)] flex flex-col lg:flex-row gap-10 items-center  py-16 px-6 lg:px-20">
      <div className="w-full">
        <Lottie className="h-96" animationData={anim}></Lottie>
      </div>
      <div className="w-full">
        <h2 className="text-xl lg:text-5xl font-bold py-10 myText">
          Add Your Notes
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {fields.map((field) => {
            return field.type === "select" ? (
              <div className="space-y-2">
                <label className="font-medium">{field.label}</label>
                <select
                  name={field.name}
                  className="w-full bg-neutral py-2 px-4 focus:outline-none"
                >
                  <option selected disabled hidden>
                    {field.label}
                  </option>
                  {field.options.map((option) => {
                    return (
                      <option className="bg-base-100" value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : (
              <div className="space-y-2">
                <label className=" font-medium">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full placeholder:text-black  bg-neutral py-2 px-4 focus:outline-none"
                  placeholder={field.label}
                />
              </div>
            );
          })}
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
