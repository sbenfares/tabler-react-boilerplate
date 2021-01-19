import React from "react";

const NavbarExpand = ({ navbarExpandItems }) => {
  return (
    <div className="navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="navbar navbar-light">
          <div className="container-xl">
            <ul className="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">
                  <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="5 12 3 12 12 3 21 12 19 12" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                  </span>
                  <span class="nav-link-title">Home</span>
                </a>
              </li>
              {/* {navbarExpandItems.map((item) => (
                <li className="nav-item">
                  <a className="nav-link" href={item.url}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      {item.icon}
                    </span>
                    <span className="nav-link-title">{item.text}</span>
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarExpand;
