import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <>
    <Nav>
      <div className="title">
        <h4>Hi Peter,</h4>
        <h4>
          Welcome to <span>Trasncriber</span>
        </h4>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
    <hr />
    </>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #227dfb;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #227dfb;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    gap: 0.5rem;
 padding: 0.5rem;
    border-radius: 1rem;
    svg {
      color: #227dfb;
    }
    input {
      background-color: transparent;
      border: none;
      color: #227dfb;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #227dfb;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 0.5rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
