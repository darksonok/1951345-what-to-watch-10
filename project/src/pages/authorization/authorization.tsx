import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { validateEmail, validatePassword } from '../../utils';


function Authorization() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [hintMessage, setHintMessage] = useState('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const showEmailError = formData.email !== '' && !validateEmail(formData.email);
  const showPasswordError = formData.password !== '' && !validatePassword(formData.password);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    authorizationStatus === AuthorizationStatus.Auth && navigate(AppRoute.Main);

    showEmailError && setHintMessage('Please enter a valid email address');

    showPasswordError && setHintMessage('Please enter a valid password without whitespaces');

    if(validateEmail(formData.email) &&
    validatePassword(formData.password)) {
      setSubmitDisabled(false);
      setHintMessage('');
    } else {
      setSubmitDisabled(true);
    }
  });

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {type, value} = evt.target;
    setFormData({...formData, [type]: value});
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <div className="user-page">
      <Header />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmit}>
          {
            hintMessage &&
            <div className='sign-in__message'>
              <p>{hintMessage}</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className={
              showEmailError ?
                'sign-in__field sign-in__field--error'
                : 'sign-in__field'
            }
            >
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={onChange}
                value={formData['email']}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={
              showPasswordError ?
                'sign-in__field sign-in__field--error'
                : 'sign-in__field'
            }
            >
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={onChange}
                value={formData['password']}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              disabled={isSubmitDisabled}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Logo />
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default Authorization;
