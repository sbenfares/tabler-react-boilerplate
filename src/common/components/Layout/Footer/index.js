import { configure } from "@testing-library/react";
import PropTypes from "prop-types";
import React from "react";

const Footer = ({ footerItems }) => {
  return (
    <footer className="footer footer-transparent d-print-none">
      <div className="container">
        <div className="row text-center align-items-center flex-row-reverse">
          <div className="col-lg-auto ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
              {footerItems.links.map((item) => (
                <li className="list-inline-item">
                  <a
                    href={item.url}
                    target="_blank"
                    className="link-secondary"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">{footerItems.copyright}</li>
              <li className="list-inline-item">
                <a
                  href="./changelog.html"
                  className="link-secondary"
                  rel="noreferrer"
                >
                  {footerItems.version}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
