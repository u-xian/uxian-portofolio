import React from "react";

const Services = () => {
  return (
    <div className="container">
      <h1>Services</h1>
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <img src="images/s1.png" alt="" />
            <h4>Web , Mobile and API developing</h4>
            <p>
              I provide Web , Mobile and API application development services
              for distinct business industries from small to medium companies. I
              develop frontend and backend as well.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <img src="images/s2.png" alt="" />
            <h4>Database Design and Developement</h4>
            <p>
              Providing services for a stable, managed and optimized database
              with all requirements and the scope of future expansion.Database
              development, realising the database design and constructing the
              database according to the specification of the schema with the
              requirements of the business overcoming the software and hardware
              limitations.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <img src="images/s3.png" alt="" />
            <h4>Online Web Marketing Services</h4>
            <p>
              Providing Web marketing services such as : Web design and
              developement, Search Engine Optimization (SEO),Search Engine
              Marketing (SEM),Integrated Online Marketing Strategies,Pay Per
              Click (PPC)Advertising,Social Media Marketing Campaigns,Email
              Outreach Programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
