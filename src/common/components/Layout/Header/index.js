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
          data-toggle="collapse"
          data-target="#navbar-menu"
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
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="/"
              className="nav-link px-0"
              data-toggle="dropdown"
              data-bs-toggle="dropdown"
              tabindex="-1"
              aria-label="Show notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
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
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <span className="badge bg-red"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
              <div className="card">
                <div className="card-body">{headerItems.notification}</div>
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              className="nav-link d-flex lh-1 text-reset p-0"
              data-toggle="dropdown"
              href="/"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span
                className="avatar avatar-sm"
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
