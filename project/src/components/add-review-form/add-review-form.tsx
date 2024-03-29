import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIRoute, RATING_VALUES, ReviewLengthThresholds } from '../../const';

import api from '../../services/api';

function AddReviewForm(): JSX.Element {
  const id: number = parseInt(window.location.pathname.split('/')[2], 10);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating: 0,
    'review-text': ''
  });
  const [isSubmitting, setSubmittingStatus] = useState(false);
  const [hintMessage, setHintMessage] = useState('');

  const postReviewData = async () => {
    const payload = {
      comment: formData['review-text'],
      rating: Number(formData.rating)
    };
    await api.post(`${APIRoute.Reviews}/${id}`, payload)
      .then(() => {
        setSubmittingStatus(true);
        navigate(`../films/${id}`);
      });
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData['review-text'].length > ReviewLengthThresholds.MinLength ?
      postReviewData() :
      setHintMessage(`Минимальная длина отзыва - ${ReviewLengthThresholds.MinLength} символов`);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmit}>
        <fieldset disabled={isSubmitting}>
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
                    checked={star === Number(formData.rating)}
                    onChange={onChange}
                  />
                  <label className="rating__label" htmlFor={`star-${ star}`}>Rating {star}</label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <span>{hintMessage}</span>
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              value={formData['review-text']}
              onChange={onChange}
              minLength={ReviewLengthThresholds.MinLength}
              maxLength={ReviewLengthThresholds.MaxLength}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
              >
              Post
              </button>
            </div>

          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddReviewForm;
