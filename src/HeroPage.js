import React from "react";

export default function HeroPage() {
  const handleNavigation = (targetPage) => {

    // Save target page in session storage so we can retrieve it after loading
    sessionStorage.setItem("redirectTo", targetPage);

    // Redirect to loading page
    window.location.href = "loading.html";
  };

  return (
    <div style={{ maxWidth: "200px" }}>
      <div>
        <a className="fancy" onClick={() => handleNavigation("about-me.html")}>
          <span className="top-key"></span>
          <span className="text">About Me</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
      <br />
      <div>
        <a className="fancy" href="#" onClick={() => handleNavigation("portfolio.html")}>
          <span className="top-key"></span>
          <span className="text">Portfolio</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
      <br />
      <div>
        <a className="fancy" href="#" onClick={() => handleNavigation("contact.html")}>
          <span className="top-key"></span>
          <span className="text">Contact Me</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
      <div>
        <h3>Evaldas Portfolio :)</h3>
      </div>
    </div>
  );
}