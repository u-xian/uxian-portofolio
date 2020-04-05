import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 feature_item">
          <div className="row">
            <div className="col-sm-4">
              <img src="images/mypic1.JPG" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <h3>Christian Uwakristu</h3>
              <br />
              <p>
                <h4>About</h4>I am Full Stack Developer graduated of Computer
                Engineering Bachelor Degree with 15 years as Data
                Engineer/Software Developer experience in Bank and
                Telecommunication companies , offering creative solutions to
                business and technology challenges. I hold a also a Profession
                certificate of Digital Marketing.
              </p>
              <br />
              <p>
                <h4>Work Experience</h4>
                <ul>
                  <li>
                    Lead Appllication Developer at WIPRO (Airtel Telco) : 2018 -
                    Now
                  </li>
                  <li>
                    Billing Specialist Controller and Software Architect at Tigo
                    Telco (Millicom company) : 2011 -2018
                  </li>
                  <li>
                    Analyst Software Developer at Banque Populaire du Rwanda :
                    2007 - 2011
                  </li>
                  <li>Analyst Software Developer at AD Finance : 2005-2007</li>
                </ul>
              </p>
              <p>
                <h4>Certifications</h4>
                <ul>
                  <li>Master ReactJs (Codewithmosh.com)</li>
                  <li>
                    MongoDB for Javascript Developers and Aggregation Framework
                    (MongoDB University.com)
                  </li>
                  <li>Become a Full-stack .NET Developer (pluralsight.com)</li>
                  <li>Digital Marketing Nanodegree (udacity.com)</li>
                  <li>
                    Certified Practitioner of Telecommunications Revenue
                    Assurance (grapa.com)
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <h4>Skills</h4>
          <table class="table table-bordered table-striped table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Backend</th>
                <th scope="col">Frontend</th>
                <th scope="col">Database</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NodeJS</td>
                <td>ReactJS</td>
                <td>MySQL / Postgresql</td>
              </tr>
              <tr>
                <td>C#</td>
                <td>HTML / CSS</td>
                <td>SQLServer / Oracle </td>
              </tr>
              <tr>
                <td>PHP (Laravel Framework)</td>
                <td>Bootstrap</td>
                <td>MongoDB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
