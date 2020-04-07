import React from "react";

const Contact = () => {
  return (
    <div className="contact-form" id="contact">
      <div className="container">
        <h1>Hire Me</h1>
        <form>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="feature_item">
                <h2>Contact</h2>
                <address>
                  <br />
                  <br />
                  <i className="fa fa-envelope-square"></i> uxian554@gmail.com
                  <br />
                  <br />
                  <i className="fa fa-phone"></i> +(250) 722123208 | 788548505
                  <br />
                  <br />
                  <i className="fa fa-skype"></i> uxan554 <br />
                  <br />
                  <strong>Follow me on</strong>
                  <ul className="social-network social-circle">
                    <li>
                      <a
                        href="https://twitter.com/uxan554"
                        className="icoTwitter"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/u-xian"
                        className="icoGithub"
                        title="Github"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/christianuwakristu/"
                        className="icoLinkedin"
                        title="Linkedin"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </address>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 right">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your Name"
                  name=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="YourEmail@email.com"
                  name="email"
                />
              </div>
              <div className="form-group">
                <textarea className="form-control form-control-lg"></textarea>
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Send"
                name=""
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
