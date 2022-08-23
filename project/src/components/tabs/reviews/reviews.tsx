import { useEffect, useState } from 'react';
import { APIRoute } from '../../../const';
import api from '../../../services/api';
import { Review, ReviewsProps } from '../../../types/types';

function Reviews ({id}: ReviewsProps) {

  const [reviews, setReviews] = useState([] as Review[]);
  const [isReviewsLoading, setReviewsLoadingStatus] = useState(true);

  useEffect(() => {

    const fetchReviews = async () => {
      await api.get<Review[]>(`${APIRoute.Reviews}/${id}`)
        .then( ({data}) => {
          setReviewsLoadingStatus(false);
          setReviews(data);
        });
    };
    fetchReviews();
  }, [id]);

  if(isReviewsLoading) {
    return (
      <p>Reviews is  loading</p>
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review: Review) => (
          <div key={review.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={review.date}>{review.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>))}
      </div>
    </div>
  );
}

export default Reviews;

