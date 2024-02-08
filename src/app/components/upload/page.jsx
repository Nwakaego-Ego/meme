// "use client";
// import React, { useEffect, useState } from "react";
// import { storage } from "../firebase/firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import Link from "next/link";
// import "./upload.css";

// const Upload = () => {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageData, setImageData] = useState([]);

//   const imageListRef = ref(storage, "images/");

//   const uploadImage = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageData((prev) => [
//           ...prev,
//           { name: getImageName(imageUpload.name), url },
//         ]);
//       });
//     });
//   };

//   //   useEffect(() => {
//   //     listAll(imageListRef).then((response) => {
//   //       response.items.forEach((item) => {
//   //         getDownloadURL(item).then((url) => {
//   //           setImageData((prev) => [
//   //             ...prev,
//   //             { name: getImageName(item.name), url },
//   //           ]);
//   //         });
//   //       });
//   //     });
//   //   }, []);

//   const getImageName = (fullName) => {
//     return fullName.split(".")[0];
//   };

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(event) => setImageUpload(event.target.files[0])}
//       />
//       <button onClick={uploadImage}>Upload Image</button>
//       <Link href="/">
//         <button onClick={uploadImage}>Home</button>
//       </Link>

//       {/* {imageData.map(({ name, url }) => (
//         <div key={name}>
//           <img src={url} alt={name} />
//           <p>{name}</p>
//         </div>
//       ))} */}
//     </div>
//   );
// };

// export default Upload;

"use client";
import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Link from "next/link";

const Upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [uploading, setUploading] = useState(false);

  const uploadImage = () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    setUploading(true);

    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // Handle successful upload
          console.log("Image uploaded successfully:", url);
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error uploading image:", error);
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
        className="mb-4 p-2 border border-blue-400 rounded-lg"
      />
      <button
        onClick={uploadImage}
        disabled={uploading || !imageUpload}
        className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
          uploading ? "opacity-50 cursor-not-allowed" : ""
        } hover:bg-blue-600 transition duration-300`}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      <Link href="/">
        <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Upload;
