import React from "react";
import "./selPage.css";
const WelcomePage = () => {
  return (
    <>
      <div className="background-img">
        <div className="intro">
          <h2 className="name-website">
            <svg
              className="icon-film"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-camera-reels"
              viewBox="0 0 16 16"
            >
              <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
              <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
              <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>{" "}
            NEXTPLAY
          </h2>
          <button className="login-user">
            Login
            <svg
              className="icon_login"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-door-open"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
              <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
            </svg>
          </button>
        </div>
        <div className="introduction">
          <h1 className="welcome-h1">Welcome To NEXTPLAY!</h1>
          <p className="p-intro">
            Your Ultimate Destination for Movie Enthusiasts Are you a cinephile
            who craves the magic of the silver screen? Look no further! At
            NEXTPLAY we bring the world of cinema to your fingertips. Whether
            you're a fan of timeless classics, the latest blockbusters, or
            hidden indie gems, our website is designed to cater to all your
            movie-watching needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
