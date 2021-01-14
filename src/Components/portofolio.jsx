import React from "react";
import { Link } from "react-router-dom";

const Portofolio = () => {
  return (
    <div className="container">
      <h1>Portofolio</h1>
      <div className="row home">
        <div className="col-sm">
          <div className="feature_item">
            <h4>
              ATA (Agent to Agent Transfer Balance in Mobile Financial Services)
            </h4>
            The application enables the agents on two differents Mobile
            Financial Services to share their balance between the two platforms
            and provide quick services to the customers.
            <br />A mobile USSD application built in MVC C# with SQL Server as
            database and integrating APIs for the backend nodes on two
            platforms.
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <h4>PAM(Purchase Airtime with Mobile Financial Services)</h4>
            The application enables the dealers to purchase Airtime on
            Electronic Recharge platform with balance on Mobile Financial
            Service wallet.
            <br />A mobile USSD application built in MVC C# with SQL Server as
            database and integrating APIs for the backend nodes (Electronic
            Recharge platform and Mobile Financial Services).
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <h4>ScratchCards Management System</h4>
            Web Application that manages Stock and purchase of Prepaid Voucher
            Top-up Cards in all Shops with dealers and activation on Voucher
            system.
            <br />
            SCMS (Scratch Cards Management System) is a web application built in
            PHP and Mysql with Html and Jquery to manage the front end and
            invoking Voucher Top up platform APIs for activation
          </div>
        </div>
      </div>
      <div className="row home">
        <div className="col-sm">
          <div className="feature_item">
            <h4>Mobile Financial System – Equity Bank Card</h4>A web application
            to be used by Service centers agents to register and activate ATM
            cards attached to Mobile Financial System. Application is built in
            ASP.NET and Bootstrap with C# as backend.
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <h4>Rerating Engine</h4>
            Full SQL Engine developed and maintained using SQL BI Tools (SSIS
            and SSRS) to rerate all network transactions (Calls, Data, SMS and
            Roaming traffic).The Engine helped us to find out any tariff
            misconfigured on changing system and mitigate risks of revenue loss
            for the Telecommunication company(in case tariff configured below
            than the business tariff) and reduce customer complaints (in case
            tariff configured are high than the business tariff).
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12">
          <div className="feature_item">
            <h4>EquickShop</h4>
            Web Application that manages Stock and purchase of goods as POS.
            Built in Javascript with NodeJS and Postgresql as backend and
            ReactJS and Frontend. <br /> Use this demo
            <br />
            <Link to="https://eretailshopfrontend.herokuapp.com">
              https://eretailshopfrontend.herokuapp.com
            </Link>
            <br />
            Below are the users and password to login:
            <ul>
              <ol>
                Username : admin
                <br /> password : 123456
              </ol>
              <ol>
                Username : cashier <br />
                password : 123456
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
