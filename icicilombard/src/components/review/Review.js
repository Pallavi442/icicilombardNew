
import React from 'react';
import "./Review.css";
import arrowLeft from '../../assests/prev1.png'
import arrowRight from '../../assests/prevNew.png'
import customerImage from '../../assests/manImg.png'

function Review() {
  return (
    <div className="review-container">
      <div className="review-main">
        <h2>See What Our Customers Say</h2>
      </div>
      <div className="review-wrapper">
        <img src={arrowLeft} className="arrow-left" alt="Previous" />

        <div className="review-box">
          <div className="review-content">
            <h4>Excellent Service and Hassle-Free Claims!</h4>
            <p>
              I recently purchased a two-wheeler insurance policy, and I couldn’t be happier with my choice! The process was smooth, and the premium rates were incredibly affordable. When I had to make a claim due to an accident, the team handled everything efficiently, and the settlement was completed within days.
            </p>
            <h4 className="review-author">Micheal R.</h4>
          </div>
          <img className="customer-image" src={customerImage} alt="Customer" />
        </div>

        <img src={arrowRight} className="arrow-right" alt="Next" />
      </div>
    </div>
  );
}

export default Review;
