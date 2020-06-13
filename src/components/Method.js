import React from "react"
import BannerImg from "../images/method.png"

const Method = () => {
  return (
    <>
      <div className="method ">
        <div className="container">
          <div className="inner-method">
            <div className="flex">
              <div className="left">
                <h2 className="left-head">OUR METHODOLOGY</h2>
                <p>
                  Our practical hands on approach to delivery are based upon
                  Learning, Doing and sustaining a culture of Continuous
                  improvement. Our proven and tested methods (PDCA)
                  simultaneously address people, process and systems to ensure
                  that results are not just discussed but achieved.
                </p>
              </div>
              <div className="right">
                <img src={BannerImg} alt="Banner" />
              </div>
            </div>
            <div className="card-flex-container">
              <div className="card">
                <h2 className="card-head">PLAN</h2>
                <p className="card-body">
                  Design or revise business process components to improve
                  results
                </p>
              </div>
              <div className="card">
                <h2 className="card-head">DO</h2>
                <p className="card-body">
                  Implement the plan and measure its performance
                </p>
              </div>
              <div className="card">
                <h2 className="card-head">CHECK</h2>
                <p className="card-body">
                  Access the measurements and report the results to decision
                  makers
                </p>
              </div>
              <div className="card">
                <h2 className="card-head">ACT</h2>
                <p className="card-body">
                  Decide on changes needed to improve the process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Method
