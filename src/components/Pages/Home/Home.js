import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrPrint } from "react-icons/gr";
import { MdOutlineDownload } from "react-icons/md";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const [textData, setTextData] = useState([]);
  const [Loading, setLoading] = useState(true);
  let history = useHistory();

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

  // const handleEdit = (id) => {
  //   //edit data from the endpoint https://evening-harbor-58012.herokuapp.com/api/files/:id
  //   axios
  //     .put(`https://evening-harbor-58012.herokuapp.com/api/files/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setTextData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handlePrint = (id) => {
  //   //print data from the endpoint https://evening-harbor-58012.herokuapp.com/api/files/:id
  //   axios
  //     .get(`https://evening-harbor-58012.herokuapp.com/api/files/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setTextData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleDownload = (id) => {
  //   //download data from the endpoint https://evening-harbor-58012.herokuapp.com/api/files/:id
  //   axios
  //     .get(`https://evening-harbor-58012.herokuapp.com/api/files/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setTextData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <Section>
        <Navbar />

        <div className="grid">
          <div className="container">
            <h4>Your Recent Records</h4>
            <div className="row">
              <table
                id="example"
                className="table table-striped table-bordered"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Uploader</th>
                    <th>Data</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* check if data is there before looping */}
                  {textData.length > 0 ? (
                    textData.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.id}</td>
                          <td>{data.file_title}</td>
                          <td>{data.uploader}</td>
                          <td>{data.file}</td>
                          {/* edit and delete */}
                          <td>
                            <div className="btn-group">
                              <button
                                className="btn btn-primary"
                                // onClick={handleEdit(data.id)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  axios
                                    .delete(
                                      `https://evening-harbor-58012.herokuapp.com/api/files/${data.id}`
                                    )
                                    .then((res) => {
                                      console.log(res);
                                      window.location.reload();
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                <RiDeleteBin2Line />
                              </button>
                              <Link
                                to={`/print/${data.id}`}
                                className="btn btn-success"
                              >
                                <GrPrint />
                              </Link>
                              <button
                                className="btn btn-info"
                                onClick={
                                  // handleDownload(data.id)
                                  () => {
                                    const title = data.file_title;
                                    const file = data.file;
                                    let dataFile =
                                      "Name: " + title + "\n" + "File: " + file;
                                    //convert to Blob
                                    var blob = new Blob([dataFile], {
                                      type: "text/plain;charset=utf-8",
                                    });

                                    //create a link
                                    var link = document.createElement("a");
                                    link.download = title;
                                    if (window.webkitURL != null) {
                                      //Safari
                                      link.href =
                                        window.webkitURL.createObjectURL(blob);
                                      link.href = URL.createObjectURL(blob);
                                    } else {
                                      //other browsers
                                      link.href =
                                        window.URL.createObjectURL(blob);
                                    }
                                    link.click();
                                  }
                                }
                              >
                                <MdOutlineDownload />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5">No Data</td>
                    </tr>
                  )}
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
