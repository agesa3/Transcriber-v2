import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMicrophoneAlt } from "react-icons/fa";
import "./Print.css";

const Print = () => {
  const [transcriptData, setTranscript] = useState([]);
  const id = window.location.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://evening-harbor-58012.herokuapp.com/api/files/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setTranscript(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* logo */}
            <div className="logo text-center pt-4">
              <FaMicrophoneAlt size={50} color="#02244b" />
              <p className="headPrint">Transcriber</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="heading text-center">
              <h3>
                Title :{" "}
                <span className="uploadPerson">
                  {transcriptData.file_title}{" "}
                </span>
              </h3>
              <h3>
                Uploaded By:{" "}
                <span className="uploadPerson">{transcriptData.uploader} </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="heading text-center">
              <h3 className="textTitle">{transcriptData.file_title}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>{transcriptData.file}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Print;
