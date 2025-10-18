import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Discover.css";
const Discover = () => {
  const [discoverOption, setDiscoverOption] = useState("Books");

  return (
    <div>
      <Navbar />
      <div className="discover-container">
        <div className="discover-header">
          <span>Discover</span>
          <div className="discoverOption-btnGroup">
            <button className="discoverOption-btn btn-active">Books</button>
            <button className="discoverOption-btn">People</button>
            <button className="discoverOption-btn">Quests</button>
          </div>
        </div>
        <div className="books-grid">
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/TPW.jpeg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/babel.jpeg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/CrimeandPunishment.jpg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/Intermezzo.jpg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/white.jpeg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/Normal-People.png"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/meek.jpg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="book-card">
            <div className="book-cover">
              <img
                src="/images/ConversationsWithFriends.jpg"
                alt="book-title"
                style={{ width: "180px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
