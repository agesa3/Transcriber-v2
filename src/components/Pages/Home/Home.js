import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";

const Home = () => {
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
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Programming</td>
                    <td>12-03-2022</td>
                    <td style={{color:"green"}}>Successful</td>

                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                  <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
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
