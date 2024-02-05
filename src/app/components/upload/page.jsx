"use client";
import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import "./upload.css";

const upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshoot) => {
      getDownloadURL(snapshoot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={uploadImage}>Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
};
export default upload;
