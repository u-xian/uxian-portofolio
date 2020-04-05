import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="description">
      <h1>
        Full Stack Developer
        <p>
          Offering creative Backend and Frontend Web/Mobile solutions to
          business and technology challenges and provide digital marketing
          services as well.
        </p>
        <Link className="btn btn-primary btn-lg" to="/about">
          See more
        </Link>
      </h1>
      <br />
      <h1 className="text-center">Portofolio</h1>
      <h6 className="text-center">
        <Link to="/portofolio">See more</Link>
      </h6>

      <div className="row">
        <div className="col-sm">
          <div className="feature_item">
            <h4>
              ATA (Agent to Agent Transfer Balance in Mobile Financial Services)
            </h4>
            The application enables the agents on 2 differents Mobile Financial
            Services to share their balance between the two platforms and
            provide quick services to the customers.
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <h4>PAM(Purchase Airtime with Mobile Financial Services)</h4>
            The application enables the dealers to purchase Airtime on
            Electronic Recharge platform with balance on Mobile Financial
            Service wallet.
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <h4>ScratchCards Management System</h4>
            Web Application that manages Stock and purchase of Prepaid Voucher
            Top-up Cards in all Shops with dealers and activation on Voucher
            system.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
