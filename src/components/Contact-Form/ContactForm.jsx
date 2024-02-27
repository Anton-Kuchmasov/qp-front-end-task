import { useState } from 'react';

import './ContactForm.scss';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const userMessage = {
    name: '',
    email: '',
    message: '',
  };

  const [hasNameError, setHasNameError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasMessageError, setHasMessageError] = useState(false);

  const handleChangeName = (value) => {
    const trimmedValue = value.trim();
    setName(trimmedValue);
    trimmedValue.length === 0 ? setHasNameError(true) : setHasNameError(false);
  };

  const handleChangeEmail = (value) => {
    const trimmedValue = value.trim();
    setEmail(trimmedValue);
    trimmedValue.length === 0 ? setHasEmailError(true) : setHasEmailError(false);
    trimmedValue.includes('@') ? setHasEmailError(false) : setHasEmailError(true);
  };

  const handleChangeMessage = (value) => {
   const trimmedValue = value.trim();
   if (trimmedValue.length < 20) {
    setHasMessageError(true);
   }
  }

  const handleSend = (e) => {
    e.preventDefault();
    const formattedName = name.trim();
    const formattedEmail = email.trim();
    const formattedMessage = message.trim();

    !formattedName.length ? setHasNameError(true) : setHasNameError(false);
    !formattedEmail.length ? setHasEmailError(true) : setHasEmailError(false);

    if (
      !formattedEmail.includes('@') ||
      !formattedEmail.includes('.') ||
      formattedEmail.length < 5 ||
      formattedEmail.length > 50 ||
      formattedEmail.includes(' ') ||
      formattedEmail.includes('..') ||
      formattedEmail.includes('.@') ||
      formattedEmail.includes('@.')
    ) {
      setHasEmailError(true);
    }

    if (!hasNameError && !hasEmailError) {
      userMessage.name = formattedName;
      userMessage.email = formattedEmail;
      userMessage.message = formattedMessage;

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='callback__form'>
      <form action='post'>
        <div className='form__inputs'>
          <div className='name__input'>
            <input
              type='text'
              className={`text-input ${hasNameError ? 'text-input--error' : ''} ${name.trim().length > 0 ? 'text-input--correct' : ''}`}
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value.trim())}
              onBlur={(event) => handleChangeName(event.target.value.trim())}
              placeholder='Name'
            />
            {hasNameError && (
              <p
                htmlFor='name'
                className='error-message'
              >
                Name can not be empty
              </p>
            )}
          </div>
          <div className='email__input'>
            <input
              type='text'
              className={`text-input ${hasEmailError ? 'text-input--error' : ''} ${email.trim().length > 0 && email.trim().includes('@') ? 'text-input--correct' : ''}`}
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
              onBlur={(event) => handleChangeEmail(event.target.value.trim())}
              placeholder='Email'
            />
            {hasEmailError && (
              <p className='error-message'>Incorrect email type</p>
            )}
          </div>
            <textarea
              className='text-input--textarea'
              placeholder='Message'
              value={message}
              onChange={(event) => setMessage(event.target.value.trim())}
              onBlur={(event) => handleChangeMessage(event.target.value.trim())}
            />
            {hasMessageError && (
              <p className='error-message'>Message length should be bigger than 20 symbols</p>
            )}
        </div>
        <button
          className='button button__send'
          onClick={handleSend}
        >
          SEND
        </button>
      </form>
    </div>
  );
};
