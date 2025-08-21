import React, { useState } from "react";

const CloudFile = () => {
  const [file, setFile] = useState([]);

  const handleFileupload = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    const data = new FormData();
    data.append("file", selectedFile);
    data.append("upload_preset", "file_cloudinary");
    data.append("cloud_name", "dwjpigpnm");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwjpigpnm/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadData = await res.json();

      console.log("upload", uploadData.url);

      setFile((prev) => [...prev, uploadData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileupload} />
      <button>upload</button>

      <br />
      {file.map((f, index) => (
        <img key={index} src={f.url} alt={`file-${index}`} width="200" />
      ))}
    </>
  );
};

export default CloudFile;
