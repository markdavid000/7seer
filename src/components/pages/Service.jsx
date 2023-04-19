import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../layout/css/style.css';
import '../layout/css/queries.css';
import ManStudy from '../layout/img/man studying.jpg';
import ImgOne from '../layout/img/img1.png';
import ImgTwo from '../layout/img/img2.png';
import ImgThree from '../layout/img/img3.png';
import ImgFour from '../layout/img/img4.png';
import Logo from '../layout/img/logo.png';

const Service = () => {
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
      <header className='header-3' id='header3'>
        {/* <div className='container'> */}
        <div className='main-nav-content'>
          <a href='#header3'>
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
              <h1 className='primary-heading-1'>
                Accelerate Data <br /> pipeline development <br /> and
                deployment.
              </h1>

              <p className='head-description-1'>
                Hire our experienced team quickly and seamlessly.
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className='service-section'>
        <h3 className='tertairy-heading-1'>
          Avoid delays, check through our list of custom services on Fiverr.
        </h3>

        <p className='service-note'>
          Hire our experienced team quickly and seamlessly.
        </p>

        <div className='container service-content'>
          <div className='services'>
            <a
              href='https://www.fiverr.com/mlordjames/use-octoparse-to-extract-web-data-to-excel-csv?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=1&seller_online=true&imp_id=91a9efd5-2ef1-4e03-bb0e-2fcf304172e5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={ImgOne} alt='' className='service-img' />
            </a>

            <div className='service-box'>
              <a
                href='https://www.fiverr.com/mlordjames/use-octoparse-to-extract-web-data-to-excel-csv?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=1&seller_online=true&imp_id=91a9efd5-2ef1-4e03-bb0e-2fcf304172e5'
                target='_blank'
                rel='noopener noreferrer'
                className='service-text'
              >
                I will build web scrapers or crawlers with...
              </a>
              <div>
                <ion-icon
                  className='service-icon'
                  name='heart-circle-outline'
                ></ion-icon>

                <p className='service-status'>STARTING AT</p>

                <p className='service-price'>US$50</p>
              </div>
            </div>
          </div>
          <div className='services'>
            <a
              href='https://www.fiverr.com/mlordjames/solve-any-octoparse-web-scraping-issues?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=2&seller_online=true&imp_id=eb7d49d4-f56b-4224-a481-fcff3d729c36'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={ImgTwo} alt='' className='service-img' />
            </a>

            <div className='service-box'>
              <a
                href='https://www.fiverr.com/mlordjames/solve-any-octoparse-web-scraping-issues?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=2&seller_online=true&imp_id=eb7d49d4-f56b-4224-a481-fcff3d729c36'
                target='_blank'
                rel='noopener noreferrer'
                className='service-text'
              >
                I will solve any octoparse web scraping issues
              </a>
              <div>
                <ion-icon
                  className='service-icon'
                  name='heart-circle-outline'
                ></ion-icon>

                <p className='service-status'>STARTING AT</p>

                <p className='service-price'>US$40</p>
              </div>
            </div>
          </div>
          <div className='services'>
            <a
              href='https://www.fiverr.com/mlordjames/scrape-products-hotels-social-media-businesses-in-24hrs?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=3&seller_online=true&imp_id=57d42907-9cf4-4adb-8bdb-4d88759a22fc'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={ImgThree} alt='' className='service-img' />
            </a>

            <div className='service-box'>
              <a
                href='https://www.fiverr.com/mlordjames/scrape-products-hotels-social-media-businesses-in-24hrs?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=3&seller_online=true&imp_id=57d42907-9cf4-4adb-8bdb-4d88759a22fc'
                target='_blank'
                rel='noopener noreferrer'
                className='service-text'
              >
                I will scrape difficult web data from any website...
              </a>
              <div>
                <ion-icon
                  className='service-icon'
                  name='heart-circle-outline'
                ></ion-icon>

                <p className='service-status'>STARTING AT</p>

                <p className='service-price'>US$50</p>
              </div>
            </div>
          </div>
          <div className='services'>
            <a
              href='https://www.fiverr.com/mlordjames/build-machine-learning-models-with-python-and-r?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=4&seller_online=true&imp_id=cfe6ba1f-2d97-4ffc-a4b6-e4cb75467c20'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={ImgFour} alt='' className='service-img' />
            </a>

            <div className='service-box'>
              <a
                href='https://www.fiverr.com/mlordjames/build-machine-learning-models-with-python-and-r?context_referrer=user_page&ref_ctx_id=e9124e8e36529abe19e6fa80d60cf872&pckg_id=1&pos=4&seller_online=true&imp_id=cfe6ba1f-2d97-4ffc-a4b6-e4cb75467c20'
                target='_blank'
                rel='noopener noreferrer'
                className='service-text'
              >
                I will build machine learning models with...
              </a>
              <div>
                <ion-icon
                  className='service-icon'
                  name='heart-circle-outline'
                ></ion-icon>

                <p className='service-status'>STARTING AT</p>

                <p className='service-price'>US$100</p>
              </div>
            </div>
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

export default Service;
