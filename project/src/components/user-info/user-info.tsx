
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { UserData } from '../../types/types';

type userInfoProps = {
  userInfo: UserData | null
}

function UserInfo ({userInfo}: userInfoProps) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li
        className="user-block__item"
        onClick={() => navigate(AppRoute.MyList)}
      >
        <div className="user-block__avatar">
          <img src={userInfo?.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <span
          className="user-block__link"
          onClick={onClick}
        >
          Sign out
        </span>
      </li>
    </ul>
  );
}

export default UserInfo;
