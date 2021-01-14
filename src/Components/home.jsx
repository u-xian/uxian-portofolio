import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 home">
          <h1>Full Stack Developer</h1>
          <p>
            Offering creative Backend and Frontend Web/Mobile solutions to
            business and technology challenges and provide digital marketing
            services as well.
          </p>
          <Link className="btn btn-primary btn-lg" to="/about">
            See more
          </Link>
        </div>
        <div className="col-sm-5 home">
          <h1>Portofolio</h1> <Link to="/portofolio">See more</Link>
          <div className="row">
            <div className="col-sm">
              <div className="feature_item">
                <h3 className="headerBold">eRetailShop</h3>A responsive Web
                Application that manages Stock and POS to sell goods.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="feature_item">
                <h3 className="headerBold">
                  PAM ( Purchase Airtime with Mobile Financial Services )
                </h3>
                The application enables the dealers to purchase Airtime on
                Electronic Recharge platform with balance on Mobile Financial
                Service wallet.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="feature_item">
                <h3 className="headerBold">ScratchCards Management System</h3>
                Web Application that manages Stock and purchase of Prepaid
                Voucher Top-up Cards in all Shops with dealers and activation on
                Voucher system.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
