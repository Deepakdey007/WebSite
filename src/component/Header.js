import React from "react";
import Modal from './Modal';

export default function Header() {
  var userAuthenticate = false;
  return (
    <header className="p-3 bg-dark">
      <div className="/">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
              <h3>HAMPER YARD</h3>
            </a>
          }

          <ul className="nav col-12 col-lg-auto mr mb-2 justify-content-center mb-md-0">
            {/* <li><a href="/" classNeme="nav-link px-2 text-white">Home</a></li> */}
            <li>
              <a href="/" className="nav-link px-20 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-20 text-white">
                Orders
              </a>
            </li>
            <li>
              <a
                href="/"
                className="nav-link d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="/grid"></use></svg> */}
                Products
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="/Main">
                    Shirts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Main">
                    T-shirts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Main">
                    Jeans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Main">
                    Formal Clothes
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Contact" className="nav-link px-20 text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-20 text-white">
                About Us
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {userAuthenticate ? (
            <div>
              <p>hello</p>
            </div>
          ) :  (

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Sign Up
            </button>
            < Modal />
            </div>
          )}
          
        </div>
      </div>
    </header>
  );
}
