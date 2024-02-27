import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className="footer__top">
          <div className='footer__logo'>
            <p className='footer__logo--text'>LOGO</p>
          </div>
          <nav className='footer__nav'>
            <ul className='footer__nav__list'>
              <li>
                <a
                  href='#about-us'
                  className='footer-nav__list--link'
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href='#instructions'
                  className='footer-nav__list--link'
                >
                  Instructions
                </a>
              </li>
              <li>
                <a
                  href='#platforms'
                  className='footer-nav__list--link'
                >
                  Platforms
                </a>
              </li>
              <li>
                <a
                  href='#contact-us'
                  className='footer-nav__list--link'
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href='#sign-in'
                  className='footer-nav__list--link'
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href='#sign-up'
                  className='footer-nav__list--link'
                >
                  Sign up for free
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__info">
          <div className='footer__terms--wrapper'>
            <div className='footer__terms--card'>
              <h3 className='term__header'>Information and high risk warning:</h3>
              <p className='term__text'>
                Trading with foreign exchange (FX), contract for differences
                (CFDs) and precious metals carries a high level of risk that may
                not be suitable for all investors. Leverage creates additional
                risk and loss exposure. Before you decide to trade foreign
                exchange or contract for differences, carefully consider your
                investment objectives, experience level, and risk tolerance.
              </p>
            </div>
            <div className='footer__terms--card'>
              <h3 className='term__header'>Legal disclaimer:</h3>
              <p className='term__text'>
                Forex trading entails significant risks and is not appropriate for
                all investors. The possibility of incurring substantial losses
                should be taken into account. It is therefore important to
                understand the possible consequences of investing. Traders should
                weigh their earning potential against the risks involved and act
                accordingly. Interactive Trade Ltd operating under brand and using
                domenLink domain within the European Economic Area.
              </p>
            </div>
            <nav className='footer__nav--onDesktop'>
            <ul className='footer__nav__list'>
              <li>
                <a
                  href='#about-us'
                  className='footer-nav__list--link'
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href='#instructions'
                  className='footer-nav__list--link'
                >
                  Instructions
                </a>
              </li>
              <li>
                <a
                  href='#platforms'
                  className='footer-nav__list--link'
                >
                  Platforms
                </a>
              </li>
              <li>
                <a
                  href='#contact-us'
                  className='footer-nav__list--link'
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href='#sign-in'
                  className='footer-nav__list--link'
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href='#sign-up'
                  className='footer-nav__list--link'
                >
                  Sign up for free
                </a>
              </li>
            </ul>
          </nav>
          </div>
          <div className='footer__credentials'>
            <ul className='footer__credentials__list'>
              <li>Copyright 2020, All Right Reserved</li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Risk Warnings</a></li>
              <li><a href="#">Anti-Money Laundering</a></li>
            </ul>
          </div>
        </div>
      <div className='footer__credentials--onPC'>
            <ul className='footer__credentials__list'>
              <li>Copyright 2020, All Right Reserved</li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Risk Warnings</a></li>
              <li><a href="#">Anti-Money Laundering</a></li>
            </ul>
          </div>
      </div>
    </footer>
  );
};
