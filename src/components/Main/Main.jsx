import './Main.scss';
import { BenefitCard } from '../Benefit-Card/Benefit-Card';
import { CustomerCards } from '../Customer-Card/Customer-Cards';
import { FAQBlock } from '../FAQ-Block/FAQBlock';
import { ContactForm } from '../Contact-Form/ContactForm';

export const Main = () => {
  return (
    <main className='main'>
      <section
        className='getting-started-block'
        id='instructions'
      >
        <h2 className='main__title'>
          Getting Started Is <br />
          <span className='main__title--important'>Fast & Easy</span>
        </h2>
        <div className='main__cards-container'>
          <BenefitCard
            id={1}
            title={`Register`}
            description={`Complete the simple registration to get your trading credentials.`}
          />
          <BenefitCard
            id={2}
            title={`Verification`}
            description={`Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.`}
          />
          <BenefitCard
            id={3}
            title={`Deposit Funds`}
            description={`Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.`}
          />
          <BenefitCard
            id={4}
            title={`Start Trading`}
            description={`Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.`}
          />
        </div>
      </section>
      <section className='people-love-block'>
        <CustomerCards />
      </section>
      <FAQBlock />
      <div className='contacts-wrapper'>
        <section
          className='contact-us--block'
          id='contact-us'
        >
          <div className='contact-us--wrapper'>
            <h2 className='contact-us__header'>Contact us!</h2>
            <p className='contact-us__info'>
              The support staff and customer service are available to help you
              with any questions or needs you might have. Just drop us a line.
            </p>
            <div className='contact-us__contacts-wrapper'>
              <p className='contact-us__contacts-wrapper--info'>
                This site is owned and operated by Kode Tech Solutions LTD
              </p>
              <div className='contacts-container'>
                <div className='contact-us__credentials'>
                  <h3 className='contact-us__credentials--header'>Phone:</h3>
                  <p className='contact-us__credentials--contacts'>
                    <a href="tel:+442038857261">442038857261</a>
                  </p>
                </div>
                <div className='contact-us__credentials'>
                  <h3 className='contact-us__credentials--header'>Email:</h3>
                  <p className='contact-us__credentials--contacts'>
                    <a href="mailto:help@google.com">help@google.com</a>
                  </p>
                </div>
                <div className='contact-us__credentials'>
                  <h3 className='contact-us__credentials--header'>Address:</h3>
                  <p className='contact-us__credentials--contacts'>
                    Trust Company Complex, Ajeltake Road, Ajeltake Island,
                    Majuro, Republic of the Marshall Islands, MH 96960
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='callback'>
          <ContactForm />
        </section>
      </div>
    </main>
  );
};
