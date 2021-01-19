import React from "react";

const Header = ({ headerItems }) => {
  return (
    <header className="navbar navbar-expand-md navbar-light d-print-none">
      <div className="container-xl">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href=".">
            <img
              src="/logo.svg"
              width="110"
              height="32"
              alt="Tabler"
              className="navbar-brand-image"
            />
          </a>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item dropdown">
            <a
              className="nav-link d-flex lh-1 text-reset p-0"
              data-toggle="dropdown"
              href="/"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span
                class="avatar avatar-sm"
                style={{ backgroundImage: `url(${headerItems.avatarImage})` }}
              ></span>
              <div className="d-none d-xl-block ps-2">
                <div>{headerItems.name}</div>
                <div className="mt-1 small text-muted">{headerItems.role}</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              {headerItems.links.map((item) =>
                item.divider === true ? (
                  <div className="dropdown-divider"></div>
                ) : (
                  <a href={item.url} className="dropdown-item">
                    {item.text}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
