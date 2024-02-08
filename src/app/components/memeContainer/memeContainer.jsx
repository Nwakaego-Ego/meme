// "use client";
// import React, { useState, useEffect } from "react";
// import { storage } from "../firebase/firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import Upload from "../upload/page";
// import Memes from "../meme/page";

// const MemeContainer = () => {
//   const [imageData, setImageData] = useState([]);

//   const imageListRef = ref(storage, "images/");

//   const uploadImage = (imageUpload) => {
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

//   useEffect(() => {
//     listAll(imageListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageData((prev) => [
//             ...prev,
//             { name: getImageName(item.name), url },
//           ]);
//         });
//       });
//     });
//   }, []);

//   const getImageName = (fullName) => {
//     return fullName.split(".")[0];
//   };

//   return (
//     <div>
//       <Upload uploadImage={uploadImage} />
//       {/* Pass imageData to memes component */}
//       <Memes imageData={imageData} />
//     </div>
//   );
// };

// export default MemeContainer;
