import './Header.scss';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <nav
          className='nav'
          id='sign-in'
        >
          <div className="nav__start">
            <a
              href='#'
              className='nav--logo'
              id='sign-up'
            >
              LOGO
            </a>
            <div className="nav__container">
              <ul className='nav__list'>
                <li className='nav__list--link
                '>
                  <a href="#instructions" className="nav__link">How it works</a>
                </li>
                <li className='nav__list--link
                '>
                  <a href="#about-us" className="nav__link">About</a>
                </li>
                <li className='nav__list--link
                '>
                  <a href="#instructions" className="nav__link">Instructions</a>
                </li>
                <li className='nav__list--link
                '>
                  <a href="#platforms" className="nav__link">Accounts</a>
                </li>
                <li className='nav__list--link
                '>
                  <a href="#platforms" className="nav__link">Platforms</a>
                </li>
                <li className='nav__list--link
                '>
                  <a href="#contact-us" className="nav__link">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav__end">
            <select className='nav__lang'>
              <option value='en'>EN </option>
              <option value='UA'>UA</option>
            </select>
            <button className='button nav__button'>SIGN IN FOR FREE</button>
          </div>
          <a
            href='#burger-menu'
            className='icon icon--menu'
          ></a>
        </nav>
        <div
          className='header__top'
          id='about-us'
        >
            <div className="header__info">
              <h1 className='header__top--title'>
                Trade everywhere.
                <br />
                Invest here!
              </h1>
              <p className='header__top--content'>
                We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for access
                to global exchanges. You can work anywhere.
              </p>
              <button
                type='submit'
                className='button button__trading'
              >
                START TRADING
              </button>
            </div>

          <img
            src='../../../src/images/content/header-blocks.svg'
            alt='Blocks'
            className='header__image'
          />
        </div>
      </header>
      
      <aside className='menu' id='burger-menu'>
        <div className="container">
          <div className='menu__top'>
          <a
              href='#'
              className='nav--logo'
              id='sign-up'
            >
              LOGO
            </a>
            <a
              href='#'
              className='icon icon--close'
            ></a>
          </div>
          <div className="menu__bottom">
              <ul className="menu__nav__list">
                <li className="menu__nav__item">
                  <a href="#" className="nav__link">How it works</a>
                </li>
                <li className="menu__nav__item">
                  <a href="#about-us" className="nav__link">About</a>
                </li>
                <li className="menu__nav__item">
                  <a href="#instructions" className="nav__link">Instructions</a>
                </li>
                <li className="menu__nav__item">
                  <a href="#platforms" className="nav__link">Accounts</a>
                </li>
                <li className="menu__nav__item">
                  <a href="#platforms" className="nav__link">Platforms</a>
                </li>
                <li className="menu__nav__item">
                  <a href="#contact-us" className="nav__link">Contacts</a>
                </li>
              </ul>
          </div>
        </div>
      </aside>
    </>
  );
};
