import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
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

  useEffect(() => {
    authorizationStatus === AuthorizationStatus.Auth && navigate(AppRoute.Main);

    showEmailError && setHintMessage('Please enter a valid email address');

    showPasswordError && setHintMessage('Password need to contain at least one symbol and one digit');

    if (validateEmail(formData.email) &&
    validatePassword(formData.password)) {
      setSubmitDisabled(false);
      setHintMessage('');
    } else {
      setSubmitDisabled(true);
    }
  }, [authorizationStatus, navigate, showEmailError, showPasswordError, formData.email, formData.password]);

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
      <Header className={'user-page__head'}/>
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
      <Footer />
    </div>
  );
}

export default Authorization;
