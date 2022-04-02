import React from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import "./ImportFile.css";

const ImportFile = () => {
  return (
    <Section>
      <Navbar />
      {/* <div classNameName="grid">
        <div className="container">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <div className="form-group files">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
                  multiple
                 
                />
              </div>
              <div className="form-group">
              </div>

              <button
                type="button"
                className="btn btn-success btn-block"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="file-upload">
        <button
          className="file-upload-btn"
          type="button"
          onClick={() => {
            document.getElementById("file-upload-input").click();
          }}
        >
          Import File
        </button>

        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            onChange={(e) => console.log(e.target.files)}
          />
          <div className="drag-text">
            <h3>Drag and drop a file or select an audio file</h3>
          </div>
        </div>
        <div className="file-upload-content">
          {/* <img className="file-upload-image" src="" alt="your image" /> */}
          <div className="image-title-wrap">
            {/* <button
              type="button"
              onclick="removeUpload()"
              className="remove-image"
            >
              Remove <span className="image-title">Uploaded File</span>
            </button> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ImportFile;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
