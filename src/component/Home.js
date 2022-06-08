import React from "react";
import  {FaTruckMoving} from 'react-icons/fa';

// import Cards from './Cards';

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src={require("../images/image1.jpg")}
              className="d-block w-100 ch"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={require("../images/image2.jpg")}
              className="d-block w-100 ch"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/image3.jpg")}
              className="d-block w-100 ch"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* what we do  */}
      <div className="container padt">
        <h2 className="text-center fw-bold pb-4">What We Do</h2>
        <p className="fs-5">
          We intend to help out busy people to collect their recyclables by
          offering free pickup service. We work as a ‘Recyclable Material
          Collector’ by offering doorstep collection service for individual
          houses, societies, organizations and industries. Initially we started
          our services by collecting the old newspapers, milk packets and
          plastic bottles by raising awareness about the importance of
          recycling. We collect the recyclable material from consumer then send
          to respective manufacturing plant to make the new products. We offer
          free pickup service, accurate weight and right value for the
          recyclable materials with complimentary gift conveying social message
          to plant the trees and save the environment. It’s simple to being
          eco-friendly; give your recyclables old newspapers, milk packets and
          plastic bottles in a most environment friendly manner. We invite you
          to join our hands and try to help us in recycling management.
        </p>
      </div>

      {/* process section cards */}

      <div className="container pt-4 pb-5">
        <div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card hoef">
                <FaTruckMoving size={56} className="card-img-top mt-4" />
                <div className="card-body">
                  <h5 className="card-title text-center">Transportation</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia illo dicta est, saepe quisquam laudantium in
                    recusandae modi, at quibusdam asperiores aliquid dolor!
                    Quibusdam qui error quod, assumenda dicta quo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hoef">
                <img
                  src={require("../images/c2.ico")}
                  className="card-img-top mt-4 imo"
                  size={20}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Consumer</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas enim placeat, voluptates voluptate a consectetur
                    ducimus accusamus eos ullam nulla ad neque corrupti optio
                    obcaecati, fuga reiciendis esse voluptatem! Fugiat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hoef">
                <img
                  src={require("../images/rent.ico")}
                  className="card-img-top mt-4 imo"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">For Rent</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, eaque nam. Labore corporis harum molestiae facilis
                    sequi illum, ad minima natus nobis quam, officia blanditiis
                    impedit. Sapiente eaque doloribus nam?
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hoef">
                <img
                  src={require("../images/factory.png")}
                  className="card-img-top mt-4 imo"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Manufacturing Plant
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, eaque nam. Labore corporis harum molestiae facilis
                    sequi illum, ad minima natus nobis quam, officia blanditiis
                    impedit. Sapiente eaque doloribus nam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-bg-info">
        <h3 className="text-center fw-semibold">
          Hassle free pick of your old cloths and other donation related things{" "}
        </h3>
      </div>
    </div>
  );
}
