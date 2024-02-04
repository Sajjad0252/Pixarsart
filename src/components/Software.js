import React from "react";
import ai from "./ai.jpg";
export default function Software() {
  return (
    <>
      <section
        className="web"
        style={{ backgroundColor: "#f0f0f0", backgroundImage: { ai } }}
      >
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>DevOps Solutions And Services For All Your IT Needs</h1>
              <p>
                DevOps development services drive consistent improvements in
                maintaining software quality, bringing scalability and
                predictability. While reducing the cost of designing, testing,
                coding, and deployment. Helping companies to fulfill customer
                requirements faster. <br />
                <br />
                Get the best DevOps consulting services and solutions that can
                help you streamline your IT operations, workflows & software
                development.
              </p>
              <button
                className="btn btn-info  text-black rounded-pill  "
                type="button"
              >
                Get In Touch
              </button>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
