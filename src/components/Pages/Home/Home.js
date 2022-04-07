import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrPrint } from "react-icons/gr";
import { MdOutlineDownload } from "react-icons/md";
import axios from "axios";

const Home = () => {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    //get data from the endpoint https://evening-harbor-58012.herokuapp.com/api/files
    axios
      .get("https://evening-harbor-58012.herokuapp.com/api/files")
      .then((res) => {
        console.log(res.data.data);
        setTextData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Section>
        <Navbar />

        <div className="grid">
          <div className="container">
            <h4>Your Recent Records</h4>
            <div class="row">
              <table
                id="example"
                class="table table-striped table-bordered"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Uploader</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* loop through the data and display in a table */}
                  {textData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.title}</td>
                        <td>{data.uploader}</td>
                        <td>{data.file_title}</td>
                        {/* edit and delete */}
                        <td>
                          <div className="btn-group">
                            <button 
                              className="btn btn-primary"
                              onClick={() => {
                                window.location.href = `/edit/${data.id}`;
                              }
                              }
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                window.location.href = `/delete/${data.id}`;
                              }
                              }
                            >
                              <RiDeleteBin2Line />
                            </button>
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                window.location.href = `/print/${data.id}`;
                              }
                              }
                            >
                              <GrPrint />
                            </button>
                            <button

                              className="btn btn-info"
                              onClick={() => {
                                window.location.href = `/download/${data.id}`;
                              }
                              }
                            >
                              <MdOutlineDownload />
                            </button>
                          </div>
                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                  <th>#</th>
                    <th>Title</th>
                    <th>Uploader</th>
                    <th>Status</th>
                   
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

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
