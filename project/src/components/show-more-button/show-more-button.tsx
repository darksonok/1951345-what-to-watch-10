type ShowMoreButtonType = {
  onClick: () => void,
}

function ShowMoreButton ({onClick} : ShowMoreButtonType) {
  return (
    <button
      className="catalog__button"
      type="button"
      onClick={onClick}
    >
      Show more
    </button>
  );
}

export default ShowMoreButton;
