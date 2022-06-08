import React, {useState} from "react";
// import image from './user.png';

export default function Main() {

  const [name, setname] = useState("Shirts");
  return (
    <>
    <div className="m-4">
      <div className="container">
        <h1>{name}</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
              </svg>

              <div className="card-body">
                <p className="card-text">Levis</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Levis</p>
                <small className="text-muted">
                  Men Slim Fit Mid-Rise Jeans
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Roadster</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Mufti</p>
                <small className="text-muted">Men Ripped Slim Fit Jeans</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Status Quo</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Colt</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Urbano Fashion</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">Oxemberg</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>

              <div className="card-body">
                <p className="card-text">FREESOUL</p>
                <small className="text-muted">Men Slim Fit Jeans</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
