import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../layout/css/style.css';
import '../layout/css/queries.css';
import SmilingAndWorking from '../layout/img/smiling and working.jpeg';
import Logo from '../layout/img/logo.png';
const Home = () => {
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
      <header className='header-1' id='header1'>
        {/* <div className='container'> */}
        <div className='main-nav-content'>
          <a href='#header1'>
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

        <section className='section-hero'>
          <div className='container'>
            <div className='head-content'>
              <h1 className='primary-heading'>
                Empowering Business Growth <br /> A World-Class Data Engineering{' '}
                <br /> Team at Your Service
              </h1>

              <p className='head-description'>
                Data is the new oil, we build the extraction rigs, the
                pipelines, and the storage solutions to power your business
                growth.
              </p>

              <a className='btn btn-full' href='#cta'>
                Request Quote
              </a>
            </div>
          </div>
        </section>
        {/* </div> */}
      </header>

      <section className='talent-section'>
        <div className='container'>
          <div className='talent-tittle'>
            <h2 className='secondary-heading'>
              Extract, Clean & Store. Build with accurate data
            </h2>
            <p className='talent-description'>
              Unlocking the power of data, one extraction at a time. Empowering
              your business with accurate and reliable data.
            </p>
          </div>

          <div className='talent-content'>
            <div className='talent-details'>
              <div>
                <ion-icon className='icon' name='infinite-outline'></ion-icon>
              </div>

              <h3 className='tertairy-heading'>Data Extraction</h3>

              <p className='talent-note'>
                Building dynamic crawlers for web scraping and data extraction
                using octoparse, python, and R into spreadsheets and databases.
              </p>
            </div>
            <div className='talent-details'>
              <div>
                <ion-icon className='icon' name='infinite-outline'></ion-icon>
              </div>

              <h3 className='tertairy-heading'>Data Integration</h3>

              <p className='talent-note'>
                Gathering data from various sources, cleaning and transforming
                it, and loading it into a data warehouse
              </p>
            </div>
            <div className='talent-details'>
              <div>
                <ion-icon className='icon' name='infinite-outline'></ion-icon>
              </div>

              <h3 className='tertairy-heading'>Data Pipeline</h3>

              <p className='talent-note'>
                Creating, scheduling and monitoring data pipelines and workflows
                using tools such as Apache Airflow, AWS Glue, and Google Cloud
                Dataflow.
              </p>
            </div>
            <div className='talent-details'>
              <div>
                <ion-icon className='icon' name='infinite-outline'></ion-icon>
              </div>

              <h3 className='tertairy-heading'>Cloud Data Engineering</h3>

              <p className='talent-note'>
                Designing and building data infrastructure on cloud platforms
                such as AWS, Google Cloud, and Microsoft Azure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='img-section'>
        <div className='container'>
          <div className='img-details'>
            <div className='img-description'>
              <h2 className='img-heading'>
                From Real estate companies, to e-commerce, data resellers and
                local startups, we have provided our data services to more than
                500 SMEs from 40+ countries in the last three years.
              </h2>
            </div>

            <img src={SmilingAndWorking} alt='' className='img-img' />
          </div>
        </div>
      </section>

      <section className='engineer-section'>
        <div className='container'>
          <h1 className='engineer-heading'>
            Discover our complete data engineering solutions.
          </h1>

          <p className='engineer-description'>
            Tap into our pool consisting of diverse data roles.
          </p>

          <div className='engineer-content'>
            <div className='engineer-details'>
              <div className='engineer-type'>Cloud Data Specialist</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>NLP Experts</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>Data Engineers</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>Data Extraction Specialists</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>Data Scientists</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>Database Engineers</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>Machine Learning Experts</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
            <div className='engineer-details'>
              <div className='engineer-type'>Blockchain Developers</div>
              <div>
                <ion-icon
                  className='engineer-icon'
                  name='arrow-forward-outline'
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-section' id='cta'>
        <div className='container'>
          <h1 className='cta-heading'>Ready to explore our data solutions?</h1>

          <p className='cta-description'>
            Explain the data services necessary for your company's growth.
          </p>

          <div className='cta-content'>
            <form className='cta-form' name='sign-up' netlify>
              <div className='cta-form-content'>
                <div>
                  <label for='first-name'>First Name</label>
                  <input
                    id='first-name'
                    type='text'
                    placeholder='John'
                    name='first-name'
                    required
                  />
                </div>
                <div>
                  <label for='last-name'>Last Name</label>
                  <input
                    id='last-name'
                    type='text'
                    placeholder='Deo'
                    name='last-name'
                    required
                  />
                </div>
                <div>
                  <label for='email'>Email</label>
                  <input
                    id='email'
                    type='email'
                    placeholder='joe@example.com'
                    name='first-name'
                    required
                  />
                </div>
                <div>
                  <label for='number'>Whatsapp Number (Optional)</label>
                  <input
                    id='number'
                    type='number'
                    placeholder='+234 333 333 3333'
                    name='number'
                  />
                </div>
                <div>
                  <label for='file'>Add media file</label>
                  <div className='input'>
                    <input
                      id='file'
                      type='file'
                      placeholder=''
                      name='file'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label for='more-info'>More Info</label>
                  <textarea
                    name='more-info'
                    id='more-info'
                    cols='10'
                    rows='10'
                    placeholder='Additional information'
                  ></textarea>
                </div>
              </div>

              <button className='cta-btn'>Request quote</button>
            </form>
            <div className='cta-type'>
              <a
                href='https://www.upwork.com/freelancers/~01a4e1c4b6396a3a2a'
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link'
              >
                <div className='cta-type-name'>Go to Upwork</div>
                <div>
                  <ion-icon
                    className='cta-icon'
                    name='arrow-forward-outline'
                  ></ion-icon>
                </div>
              </a>
              <a
                href='https://www.fiverr.com/mlordjames'
                target='_blank'
                rel='noopener noreferrer'
                className='cta-link'
              >
                <div className='cta-type-name'>Go to Fiverr</div>
                <div>
                  <ion-icon
                    className='cta-icon'
                    name='arrow-forward-outline'
                  ></ion-icon>
                </div>
              </a>
            </div>
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

export default Home;
