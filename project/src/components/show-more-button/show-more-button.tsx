import { ShowMoreButtonProps } from '../../types/types';

function ShowMoreButton ({handler} : ShowMoreButtonProps) {
  return (
    <button
      className="catalog__button"
      type="button"
      onClick={handler}
    >
      Show more
    </button>
  );
}

export default ShowMoreButton;
