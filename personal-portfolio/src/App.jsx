import React, { useEffect } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Designer", "Developer", "Freelancer"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typed", options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.width = value + '%';
    });
  }, []);
 
  return (
    <>
  <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list" />
    <div className="profile-img">
      <img
        src="assets/img/my-profile-img.jpg"
        alt=""
        className="img-fluid rounded-circle"
      />
    </div>
    <a
      href="index.html"
      className="logo d-flex align-items-center justify-content-center"
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">Sherelyn Cuanan</h1>
    </a>
    <div className="social-links text-center">
      <a href="https://www.facebook.com/sherelyngallevochuo.cuanan" className="facebook">
        <i className="bi bi-facebook" />
      </a>
      <a href="https://www.instagram.com/asahi_she/" className="instagram">
        <i className="bi bi-instagram" />
      </a>
      <a href="https://www.linkedin.com/in/sherelyn-cuanan-130912277/" className="linkedin">
        <i className="bi bi-linkedin" />
      </a>
    </div>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="#hero" className="active">
            <i className="bi bi-house navicon" />
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="bi bi-person navicon" /> About
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i className="bi bi-images navicon" /> Portfolio
          </a>
        </li>
        <li>
          <a href="#skills">
            <i className="bi bi-hdd-stack navicon" /> Skills
          </a>
        </li>
        <li>
          <a href="#resume">
            <i className="bi bi-file-earmark-text navicon" /> Resume
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="bi bi-envelope navicon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">
        <img
          src="assets/img/hero-bg.jpg"
          alt=""
          data-aos="fade-in"
          className=""
        />
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <h2>Sherelyn Cuanan</h2>
          <p>
            I'm a{" "}
            <span className="typed"></span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            />
          </p>
        </div>
      </section>
    {/* /Hero Section */}
    
    {/* About Section */}
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Hello! I’m Sherelyn Cuanan, and I’m passionate about designing
          websites and applications. My projects reflect my dedication and
          skills in web development, allowing me to explore various aspects of
          this dynamic field. I’m excited to share my portfolio with you,
          whether you’re a fellow student, a potential employer, or simply
          interested in my work. I hope it provides you with valuable insight
          into my journey as a learner and creator. Thank you for taking the
          time to discover my projects!
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="assets/img/my-profile-img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Web Designer &amp; Developer.</h2>
            <p className="fst-italic py-3">
              My approach combines creativity with technical expertise to
              deliver solutions that not only look great but also enhance
              usability. I am dedicated to understanding user needs and
              translating them into effective design and functionality.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Website:</strong>{" "}
                    <span>sherelyncuanan@student.laveredad.edu.ph</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                    <span>Apalit, Pampanga</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                    <span>20</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Degree:</strong>{" "}
                    <span>BS in Information Systems</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong>{" "}
                    <span>sherelyncuanan@student.laveredad.edu.ph</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <p class="py-3">
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
      </p> */}
          </div>
        </div>
      </div>
    </section>
    {/* /About Section */}
    {/* Stats Section */}
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <b />
          <h1>Interest</h1>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile" />
              <p>
                <strong>Designing</strong>{" "}
                <span>
                  {" "}
                  My interest in designing involves using technical skills in
                  coding, graphics, and user experience to create visually
                  appealing and functional digital products.
                </span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext" />
              <p>
                <strong>Writing</strong>{" "}
                <span>
                  {" "}
                  allows me to share my thoughts and stories, connecting with
                  others through words.
                </span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset" />
              <p>
                <strong>Music</strong>{" "}
                <span>
                  {" "}
                  enriches my life, allowing me to explore emotions and discover
                  new sounds.
                </span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people" />
              <p>
                <strong>Instruments</strong>{" "}
                <span>
                  Playing the instrument is my creative outlet, where I express
                  myself through melodies.
                </span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
    {/* /Stats Section */}
    {/* Services Section */}
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Education</h2>
        <p>
          My background education includes all the formal and informal learning
          I've completed, along with skills I've gained from life experiences.
          This education has shaped my knowledge and abilities, influencing both
          my future career and personal growth.{" "}
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-briefcase" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Spring Valley Elementary School
                </a>
              </h4>
              <p className="description">
                Grade 1-6 graduated with Honor (2012-2018)
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-briefcase" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Mayamot NHS
                </a>
              </h4>
              <p className="description">
                JR. and SR. High School Graduated with High Honor (2018-2022)
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-briefcase" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  La Verdad Christian College
                </a>
              </h4>
              <p className="description">
                {" "}
                BS in Information Systems (2022-Present) <br/> 1st-2nd year Dean's Lister
              </p>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
    {/* /Services Section */}
    {/* Portfolio Section */}
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          My portfolio showcases a collection of my work and accomplishments,
          including projects, presentations, and examples of my skills. It
          highlights my experiences and achievements, demonstrating my expertise
          and the value I bring to potential employers or clients.{" "}
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <li data-filter="*" className="filter-active">
              My Certificate and website designs
            </li>
          </ul>
          {/* End Portfolio Filters */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/app-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Certificate</h4>
                  <p>SQL certificate</p>
                  <a
                    href="assets/img/portfolio/app-1.png"
                    title="App 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/product-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Graphic design</h4>
                  <p>website lay outing</p>
                  <a
                    href="assets/img/portfolio/product-1.jpg"
                    title="Product 1"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/branding-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>web design</h4>
                  <p>Log-in page</p>
                  <a
                    href="assets/img/portfolio/branding-1.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/SheCuanan/webapp2-final-project"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/books-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Layouting website</h4>
                  <p>Layout website</p>
                  <a
                    href="assets/img/portfolio/books-1.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/app-2.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Badge</h4>
                  <p>Java badge</p>
                  <a
                    href="assets/img/portfolio/app-2.png"
                    title="App 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/product-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web design</h4>
                  <p>Figma Prototype</p>
                  <a
                    href="assets/img/portfolio/product-2.jpg"
                    title="Product 2"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/branding-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web design</h4>
                  <p>Log-in website using php</p>
                  <a
                    href="assets/img/portfolio/branding-2.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/SheCuanan/webapp2-final-project"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/books-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>website redesign</h4>
                  <p>Redesigning website</p>
                  <a
                    href="assets/img/portfolio/books-2.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/app-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Certificate</h4>
                  <p>Working certificate</p>
                  <a
                    href="assets/img/portfolio/app-3.jpg"
                    title="App 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/product-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>One of my website project</p>
                  <a
                    href="assets/img/portfolio/product-3.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://magenta-bonbon-93a39c.netlify.app/"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/branding-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web design</h4>
                  <p>Log-in website using php</p>
                  <a
                    href="assets/img/portfolio/branding-3.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/SheCuanan/webapp2-final-project"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/books-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Website portfolio using wix</p>
                  <a
                    href="assets/img/portfolio/books-3.jpg"
                    title="Branding 3"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://sherelyncuanan.wixsite.com/my-site"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
    {/* /Portfolio Section */}
    {/* Skills Section */}
    <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          My skills include a range of technical and soft skills that I have
          developed through my education and experiences. These encompass my
          proficiency, all of which enhance my learnings and performance.{" "}
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <h3>Soft Skills</h3>
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>Problem-solving</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Time management</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Adaptability</span> <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>Communication</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Teamwork</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
        </div>
        <h3>Technical Skills</h3>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>HTML</span> <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              {/* End Skills Item */}
              <div className="progress">
                <span className="skill">
                  <span>CSS</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              {/* End Skills Item */}
              <div className="progress">
                <span className="skill">
                  <span>JavaScript</span> <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              {/* End Skills Item */}
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>PHP</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              {/* End Skills Item */}
              <div className="progress">
                <span className="skill">
                  <span>Java</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              {/* End Skills Item */}
              <div className="progress">
                <span className="skill">
                  <span>Photoshop</span> <i className="val">55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              {/* End Skills Item */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /Skills Section */}
    {/* Resume Section */}
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Here are my resume! You can download it to know more about me.</p>
        {/* Download Resume Button */}
        <a
          href="src/resume.pdf"
          download="Sherelyn_Cuanan_Resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Sherelyn Cuanan</h4>
              <p>
                <em>
                  {" "}
                  I have a strong sense of design and a desire to create
                  websites that are both aesthetically pleasing and easy to use.
                  Aspiring web developer knowledgeable about version control
                  with Git with a great background in HTML, CSS, and JavaScript
                  who is highly motivated and results-oriented. I am eager to
                  acquire new skills and provide support from the bottom up for
                  web development projects
                </em>
              </p>
              <ul>
                <li>Sampaloc, Apalit, Pampanga, Philippines</li>
                <li>(123) 456-7891</li>
                <li>sherelyncuanan@gmail.com</li>
              </ul>
            </div>
            {/* Edn Resume Item */}
          </div>
        </div>
      </div>
    </section>
    {/* /Resume Section */}
    {/* Contact Section */}
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Get in touch with us for any inquiries, feedback, or support—we're
          here to help!
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>Sampaloc, Apalit, Pampanga</p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Me</h3>
                  <p>sherelyncuanan@student.laveredad.edu.ph</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
          <div className="col-lg-7">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    id="message-field"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
    {/* /Contact Section */}
  </main>
  <footer id="footer" className="footer position-relative light-background">
    <div className="container">
      <div className="copyright text-center ">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">iPortfolio</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
</>

  
  )
}

export default App
