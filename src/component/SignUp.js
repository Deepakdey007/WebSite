import React from "react";

export default function SignUp() {
  return (
    <div>
      <div
        className="modal-dialog-scollable"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              {/* <!-- <h5 className="modal-title">Modal title</h5> --> */}
              <h2 className="fw-bold mb-0">Sign up for free</h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
              <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Tony Stark"
                  />
                  <label for="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Confirm Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                  type="submit"
                >
                  Sign up
                </button>
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4" />
                <h4 className="fs-5 fw-bold mb-3">Continue another way</h4>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
                  type="submit"
                >
                  {/* <svg className="bi me-1" width="16" height="16">
                     <use xlink:href="#twitter" />
                  </svg> */}
                  Sign up with Google
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4"
                  type="submit"
                >
                  {/* <svg className="bi me-1" width="16" height="16">
                     <use xlink:href="#twitter" />
                  </svg> */}
                  Sign up with Twitter
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4"
                  type="submit"
                >
                  {/* <svg className="bi me-1" width="16" height="16">
                    <use xlink:href="#facebook" />
                  </svg> */}
                  Sign up with Facebook
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
                  type="submit"
                >
                  {/* <svg className="bi me-1" width="16" height="16">
                    <use xlink:href="#github" />
                  </svg> */}
                  Sign up with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}