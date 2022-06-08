import React from "react";

export default function Footer() {
  return (
    <div className="text-black">
      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top bg-dark py-3 w3-container">
        <p className="col-md-4 mb-0 text-muted  text-black">© 2022 All Rights Reserved.</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          {/* <svg className="bi me-2" width="40" height="32">
            <use xlink:href="/bootstrap"></use>
          </svg> */}
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted text-pink">
              Terms
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item text-black">
            <a href="/" className="nav-link px-2 text-muted  text-black">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
