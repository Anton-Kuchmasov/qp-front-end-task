import { useState } from 'react';

import { FAQCard } from '../FAQ-Card/FAQCard';
import './FAQBlock.scss';

export const FAQBlock = () => {
  const [chosenCardID, setChosenCardID] = useState(0);

  const handleChooseCard = (index) => {
    setChosenCardID(index);
  };

  return (
    <>
      <section
        className='faq-block'
        id='platforms'
      >
        <h2 className='faq-block__header'>
          Frequently asked <br />{' '}
          <span className='main__title--important'>questions</span>
        </h2>
        <div className='faq-block__cards-container'>
          <FAQCard
            title={'How do I change my details?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={1}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'What platforms will I be able to use?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={2}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'How do I change my details?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={3}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'What platforms will I be able to use?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={4}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'How do I change my details?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={5}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'What platforms will I be able to use?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={6}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'How do I change my details?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={7}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />

          <FAQCard
            title={'What platforms will I be able to use?'}
            description={
              'We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!'
            }
            id={8}
            chosenCardID={chosenCardID}
            handleChoose={handleChooseCard}
          />
        </div>
      </section>
    </>
  );
};
