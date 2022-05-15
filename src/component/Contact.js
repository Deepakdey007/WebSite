import React from "react";

export default function Contact() {
  return (
    <>
      <div classN="col-md-7 col-lg-8">
        <h4 classN="mb-3">Billing address</h4>

        <form classN="needs-validation" novalidate>
        <div class="mb-3">
        <div classN="col-sm-6">
              <label for="firstName" classN="form-label">
                First name
              </label>
              <input
                type="text"
                classN="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              {/* <div classN="invalid-feedback">Valid first name is required.</div> */}
            </div>
            <div classN="col-sm-6">
              <label for="firstName" classN="form-label">
                Last name
              </label>
              <input
                type="text"
                classN="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              {/* <div classN="invalid-feedback">Valid first name is required.</div> */}
            </div>
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Total number of items and amount of each product
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
          <div classN="row g-3">
            

            <div classN="col-12">
              <label for="email" classN="form-label">
                Email <span classN="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                classN="form-control"
                id="email"
                placeholder="you@example.com"
              />
              {/* <div classN="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div> */}
            </div>

            <div classN="col-12">
              <label for="address" classN="form-label">
                Address
              </label>
              <input
                type="text"
                classN="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              {/* <div classN="invalid-feedback">
                Please enter your shipping address.
              </div> */}
            </div>

            <div classN="col-12">
              <label for="address2" classN="form-label">
                Address 2 <span classN="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                classN="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>

            <div classN="col-md-5">
              <label for="country" classN="form-label">
                Country
              </label>
              <select classN="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              {/* <div classN="invalid-feedback">
                Please select a valid country.
              </div> */}
            </div>

            <div classN="col-md-4">
              <label for="state" classN="form-label">
                State
              </label>
              <select classN="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div classN="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div classN="col-md-3">
              <label for="zip" classN="form-label">
                Zip
              </label>
              <input
                type="text"
                classN="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div classN="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <hr classN="my-4" />

          <div classN="form-check">
            <input
              type="checkbox"
              classN="form-check-input"
              id="same-address"
            />
            <label classN="form-check-label" for="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>

          <div classN="form-check">
            <input type="checkbox" classN="form-check-input" id="save-info" />
            <label classN="form-check-label" for="save-info">
              Save this information for next time
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
