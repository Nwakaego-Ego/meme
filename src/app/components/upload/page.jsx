"use client";
import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";

const upload = () => {
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload)
      // .then(() => {
      //   alert("image uploaded");
      // });

      .then(() => {
        alert("Image uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };
  return (
    <div className="">
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
};
export default upload;
