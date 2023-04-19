import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../layout/css/style.css';
import '../layout/css/queries.css';
import BlackEng from '../layout/img/black engineers.jpg';
import LagosTech from '../layout/img/lagos tech.jpeg';
import ManStudy from '../layout/img/man studying.jpg';
import Logo from '../layout/img/logo.png';

const About = () => {
  useEffect(() => {
    const sectionHeroEl = document.querySelector('.section-hero');

    const observer = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          document.body.classList.add('stiky');
        }

        if (ent.isIntersecting === true) {
          document.body.classList.remove('stiky');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );
    observer.observe(sectionHeroEl);
  }, []);

  const onClick = () => {
    const btnNavEl = () => {
      document.querySelector('.btn-mobile-nav');
    };
    const headerEl = document.querySelector('.main-nav-content');
    btnNavEl(headerEl.classList.toggle('nav-open'));
  };

  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div>
      <header className='header-2' id='header2'>
        {/* <div className='container'> */}
        <div className='main-nav-content'>
          <a href='#header2'>
            <img src={Logo} alt='logo' className='logo' />
          </a>

          <nav className='main-nav'>
            <ul className='main-nav-list'>
              <li>
                <Link className='main-nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='main-nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className='main-nav-link' to='/services'>
                  Service
                </Link>
              </li>
              <li>
                <a className='main-nav-link scroll-link' href='#contact'>
                  Contact
                </a>
              </li>
              <li>
                <a
                  className='main-nav-link'
                  href='https://hashnode.com/@7seer'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blog
                </a>
              </li>
              <li>
                <a className='main-nav-link nav-btn scroll-link' href='#cta'>
                  Request Quote
                </a>
              </li>
            </ul>
          </nav>

          <button className='btn-mobile-nav' onClick={onClick}>
            <ion-icon
              className='icon-mobile-nav'
              name='menu-outline'
            ></ion-icon>
            <ion-icon
              className='icon-mobile-nav'
              name='close-outline'
            ></ion-icon>
          </button>
        </div>
        {/* </div> */}

        <section className='section-hero'>
          <div className='container'>
            <div className='head-content'>
              <h1 className='primary-heading'>
                Our mission is to empower <br /> businesses globally with clean{' '}
                <br /> and reliable data solutions.
              </h1>

              <p className='head-description'>
                Build with a team trusted by many across the world.
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className='team-section'>
        <div className='container team-content'>
          <div className='team-text-box'>
            <h1 className='team-heading'>Our Amazing Data Journey so far</h1>
            <div className='amount'>
              <div>
                <div className='amount-figure'>24%</div>
                <div className='amount-text'>World coverage</div>
              </div>
              <div>
                <div className='amount-figure'>600+</div>
                <div className='amount-text'>Satisfied customers</div>
              </div>
            </div>
          </div>

          <div>
            <p className='img-text'>
              Avoid the rigours of hiring. Tap into our large pool of top
              African technical talent globally.
            </p>
            <div className='team-img-box'>
              <img src={BlackEng} alt='' className='team-img' />
            </div>
          </div>

          <div className='team-img-box'>
            <img src={LagosTech} alt='' className='team-img' />
          </div>

          <div className='story'>
            <div className='story-heading'>Our Story</div>
            <p className='story-text'>
              7Seer started as a single freelancer offering web extraction
              services to small businesses and quickly evolved into a team of
              data engineers focused on enabling small business utilized the
              wonders of big data in growing their business. Now, we are a
              remote data engineering firm focusing on Data extraction,
              wrangling, integration, and storage.
            </p>
            <p className='story-text'>
              Located in Abuja, that capital of Nigeria, and lead by Etiese
              James, it has helped several small and medium size businesses in
              over 45 countries employed data solutions to their growing
              business. We currently do not offer much in terms of analytics and
              ML solutions instead focusing more on the data collection and
              retention, as most small business have access to analyst but do
              not have access to proper data, we aim to change that.
            </p>
          </div>
        </div>
      </section>

      <section className='img-section'>
        <div className='container'>
          <div className='img-details'>
            <div className='img-description'>
              <h2 className='img-heading'>
                From Fortune 500 companies to burgeoning local startups, we help
                our clients ship faster and achieve business goals by offering
                access to highly-vetted top talents
              </h2>
            </div>

            <img src={ManStudy} alt='' className='img-img' />
          </div>
        </div>
      </section>

      <footer className='footer' id='contact'>
        <div className='container grid grid--footer'>
          <div className='logo-col'>
            <a href='#header1' className='footer-logo'>
              <img src={Logo} alt='logo' className='logo' />
            </a>

            <ul className='social-links'>
              <li>
                <a className='footer-link' href='#!'>
                  <ion-icon
                    className='social-icon'
                    name='logo-linkedin'
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  <ion-icon
                    className='social-icon'
                    name='logo-facebook'
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  <ion-icon
                    className='social-icon'
                    name='logo-twitter'
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className='copyright'>
              Copyright &copy; <span className='year'>{currentYear}</span> by
              7seer LTD. All <br /> rights reserved.
            </p>
          </div>
          <div className='address-col'>
            <p className='footer-heading'>Contact us</p>
            <address className='contacts'>
              <p className='address'>7seer LTD. All rights reserved.</p>
              <p>
                <a className='footer-link' href='tel:+234 [0] 912-220-9899'>
                  +234 [0] 912-220-9899
                </a>
              </p>
              <p>
                <a
                  className='footer-link'
                  href='mailto:contact@7seer.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  contact@7seer.com
                </a>
              </p>
            </address>
          </div>
          <nav className='nav-col'>
            <p className='footer-heading'>Company</p>
            <ul className='footer-nav'>
              <li>
                <a className='footer-link' href='#!'>
                  About 7Seer
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  For Business
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav className='nav-col'>
            <p className='footer-heading'>Resources</p>
            <ul className='footer-nav'>
              <li>
                <a className='footer-link' href='#!'>
                  Blog
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Help center
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default About;
