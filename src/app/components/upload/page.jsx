"use client";
import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import "./upload.css";

const upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageData, setImageData] = useState([]);

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshoot) => {
      getDownloadURL(snapshoot.ref).then((url) => {
        setImageData((prev) => [
          ...prev,
          { name: getImageName(imageUpload.name, url) },
        ]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageData((prev) => [
            ...prev,
            { name: getImageName(item.name, url) },
          ]);
        });
      });
    });
  }, []);

  const getImageName = (fullName) => {
    return fullName.split(".")[0];
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={uploadImage}>Upload Image</button>
      {imageData.map(({ name, url }) => (
        <div key={name}>
          <img src={url} alt={name} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};
export default upload;
