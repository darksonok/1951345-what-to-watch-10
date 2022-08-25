type ShowMoreButtonType = {
  onClick: () => void,
  allFilmsLength: number,
  shownFilmLength: number,
}

function ShowMoreButton ({onClick, allFilmsLength, shownFilmLength} : ShowMoreButtonType): JSX.Element {
  return (
    allFilmsLength > shownFilmLength
      ?
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={onClick}
        >
      Show more
        </button>
      </div>
      :
      <span></span>
  );
}

export default ShowMoreButton;
