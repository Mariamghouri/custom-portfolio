import React from "react";
import { FC } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaGoogle, FaYoutube, FaApple } from "react-icons/fa";
import Footer from "@/components/Footer";
const Home: FC = () => {


  

  return (
    <>
      <section className="py-70">
        <div className="container">
          <main className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title  ">
              <span className="highlight">Hello</span> I&#39;m <span className="highlights sora-extrabold">Mariam.</span>
                <br />
                <span className="highlights">Frontend</span><span className="highlight"> Developer</span>
                <br />
                Based In <span className="highlights">Pakistan.</span>
              </h1>
              <p className="hero-subtext">
                I&#39;m Flora Sheen Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&#39;s standard
                dummy text ever since the 1500s.
              </p>
              <div className="social-links">
                <a href="#">
                  <div className="icon-container">
                    <FaFacebook className="icon" />
                  </div>
                </a>
                <a href="#">
                  <div className="icon-container">
                    <FaTwitter className="icon" />
                  </div>
                </a>
                <a href="#">
                  <div className="icon-container">
                    <FaGithub className="icon" />
                  </div>
                </a>
                <a href="#">
                  <div className="icon-container">
                    <FaLinkedin className="icon" />
                  </div>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/Capture3.jpg" alt="Illustration" />
            </div>
          </main>
        </div>
      </section>

      <section className="py-70">
        <div className="container">
          <h2 className="skills-title">
          <span className="highlight">My</span><span className="highlights sora-extrabold">Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-card">
              <img src="/images/icon-git.png" alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill-card black-background">
              <img src="/images/icon-javscript.png" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-sass.png" alt="Sass/Scss" />
              <p>Sass/Scss</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-nest.png" alt="Nest.Js" />
              <p>Nest.Js</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-story.png" alt="Storybook" />
              <p>Storybook</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-nest.png" alt="Nest.Js" />
              <p>Nest.Js</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-git.png" alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-story.png" alt="Storybook" />
              <p>Storybook</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-socket.png" alt="Socket.IO" />
              <p>Socket.IO</p>
            </div>
            <div className="skill-card">
              <img src="/images/icon-sass.png" alt="Sass/Scss" />
              <p>Sass/Scss</p>
            </div>
          </div>
        </div>

      </section>


      <section className=" experience  py-70">
        <div className="container">
          <h2 className="experience-title">
          <span className="highlights sora-extrabold">My Experience</span></h2>

          <div className="experience-card">
            <div className="experience-details">
              <div className="icon">
                <img src="/images/goole.jpg" alt="Google" />
              </div>
              <div className="grey-600">
                <h3>Lead Software Engineer at Google</h3>
                <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&#39;s core search algorithms.</p>
              </div>
            </div>
            <span className="experience-date">Nov 2019 – Present</span>
          </div>

          <div className="experience-card">
            <div className="experience-details">
              <div className="icon">
                <img src="/images/youtube.png" alt="YouTube" />
              </div>
              <div className="grey-600">
                <h3>Software Engineer at YouTube</h3>
                <p>At YouTube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant&#39;s platform.</p>
              </div>
            </div>
            <span className="experience-date">Jan 2017 – Oct 2019</span>
          </div>

          <div className="experience-card">
            <div className="experience-details">
              <div className="icon">
                <img src="/images/apple.jpg" alt="Apple" />
              </div>
              <div className="grey-600">
                <h3>Junior Software Engineer at Apple</h3>
                <p>During my tenure at Apple, I held the role of Software Architect, shaping mission-critical software projects.</p>
              </div>
            </div>
            <span className="experience-date">Jan 2016 – Dec 2017</span>
          </div>
        </div>

      </section>

      <section className="container py-70  grid-box">




        <div className="about-image ">
          <img src="/images/Capture2.png" alt="About Illustration" />
        </div>


        <div className="about-text ">
          <h2>About <span className="highlights"> Me</span></h2>
          <p>
            I&#39;m a passionate, self-proclaimed designer who specializes in full-stack
            development (React.js & Node.js). I am very enthusiastic about bringing
            the technical and visual aspects of digital products to life.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I&#39;ve
            continued to grow and evolve as a developer, taking on new challenges and
            learning the latest technologies along the way.
          </p>
          <p>
            When I&#39;m not in full-on developer mode, you can find me on Twitter or
            GitHub, sharing tech-related updates and building projects in public.
          </p>
        </div>



      </section >

      <section className="container py-70 black-background" >
        <h2 className="projects-title">
          My <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-item">
            <div className="project-image">
              <img src="/images/image.png" alt="Crypto Screener Application" />
            </div>
            <div className="project-content">
              <div className="project-number">01</div>
              <div className="project-title">Crypto Screener Application</div>
              <p className="project-description">
                I&#39;m Flora Sheen Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry&#39;s
                standard dummy text ever since the 1500s.
              </p>
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item">
            <div className="project-image">
              <img
                src="/images/image2.png"
                alt="Euphoria - Ecommerce Website Template"
              />
            </div>
            <div className="project-content">
              <div className="project-number">02</div>
              <div className="project-title">
                Euphoria - Ecommerce (Apparels) Website Template
              </div>
              <p className="project-description">
                I&#39;m Flora Sheen Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry&#39;s
                standard dummy text ever since the 1500s.
              </p>
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-item">
            <div className="project-image">
              <img src="/images/image3.png" alt="Blog Website Template" />
            </div>
            <div className="project-content">
              <div className="project-number">03</div>
              <div className="project-title">Blog Website Template</div>
              <p className="project-description">
                I&#39;m Flora Sheen Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry&#39;s
                standard dummy text ever since the 1500s.
              </p>
              <a href="#" className="project-link">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-70">
        {/* Section Title */}
        <h2 className="testimonial-title">
          My <span>Testimonial</span>
        </h2>

        {/* Testimonial Grid */}
        <div className="testimonial-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="/images/shah.png" alt="Evren Shah" />
              <div className="quote-icon">”</div>
            </div>
            <p className="testimonial-text">
              I recently had to jump on 10+ different calls across eight different
              countries to find the right owner.
            </p>
            <div className="testimonial-name">Evren Shah</div>
            <div className="testimonial-role">Designer</div>
          </div>

          {/* Testimonial 2 - Active */}
          <div className="testimonial-card active">
            <div className="testimonial-image">
              <img src="/images/girl.png" alt="Flora Sheen" />
              <div className="quote-icon">”</div>
            </div>
            <p className="testimonial-text">
              I recently had to jump on 10+ different calls across eight different
              countries to find the right owner.
            </p>
            <div className="testimonial-name">Flora Sheen</div>
            <div className="testimonial-role">Designer</div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="/images/shah.png" alt="Evren Shah" />
              <div className="quote-icon">”</div>
            </div>
            <p className="testimonial-text">
              I recently had to jump on 10+ different calls across eight different
              countries to find the right owner.
            </p>
            <div className="testimonial-name">Evren Shah</div>
            <div className="testimonial-role">Designer</div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-container">
          {/* Form Section */}
          <div className="contact-form">
            <input className="input-field" type="text" placeholder="Your name" />
            <input className="input-field" type="email" placeholder="Email" />
            <input className="input-field" type="text" placeholder="Your website (If exists)" />
            <textarea className="textarea-field" placeholder="How can I help?*"></textarea>
            <button className="btn-primary">Get In Touch</button>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="/images/fb.png" alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/social icon.png" alt="Social" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/twitter.png" alt="Twitter" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/dis.png" alt="Discord" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="info-title">
            <span className="highlights">Let&#39;s</span> <span className="highlight">talk</span> <span className="highlights">for</span>
            </h2>
            <h2 className="info-special"><span className="highlights" >Something special</span></h2>
            <p className="info-description">
              I seek to push the limits of creativity to create high-engaging, user-friendly,
              and memorable interactive experiences.
            </p>
            <p className="contact-email">mariyamghouri0@gmail.com</p>
            <p className="contact-number">03162841504</p>
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
};

export default Home;
