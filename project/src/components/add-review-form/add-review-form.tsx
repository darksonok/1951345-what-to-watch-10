import React, { useState } from 'react';
import { RATING_VALUES } from '../../const';

function AddReviewForm(): JSX.Element {

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RATING_VALUES.map((star) => (
              <React.Fragment key={star}>
                <input
                  className="rating__input"
                  id={`star-${ star }`}
                  type="radio"
                  name="rating"
                  value={star}
                  checked={star === rating}
                  onChange={(evt) => setRating(parseInt(evt.target.value, 10))}
                />
                <label className="rating__label" htmlFor={`star-${ star}`}>Rating {star}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            value={review}
            onChange={(evt) => setReview(evt.target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
