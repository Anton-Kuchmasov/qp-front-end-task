import React, { useEffect, useState } from 'react';

import './FAQCard.scss';

export const FAQCard = ({
  title,
  description,
  id,
  handleChoose,
  chosenCardID,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(id === chosenCardID ? !isOpened : false);
  }, [chosenCardID, id]);
  
  const handleClick = (event) => {
    event.preventDefault();
    handleChoose(id);
    setIsOpened(prevIsOpened => id === chosenCardID ? !prevIsOpened : prevIsOpened);
  };
  

  return (
    <article className={`FAQCard ${isOpened ? 'opened' : 'closed'}`}>
      <div className='FAQCard--wrapper'>
        <p className='FAQCard__title'>{title}</p>
        <button
          className={`FAQCard__button ${isOpened ? 'FAQCard__button--cross' : 'FAQCard__button--plus'}`}
          onClick={handleClick}
        ></button>
      </div>
      {isOpened && <p className='FAQCard__description'>{description}</p>}
    </article>
  );
};
