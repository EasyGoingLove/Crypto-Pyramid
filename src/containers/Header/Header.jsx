import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a>
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/"
                >
                  Home
                </Link>
              </span>
            </a>
          </li>
          <li className="has-subnav">
            <a>
              <i className="fa fa-laptop fa-2x"></i>
              <span className="nav-text">
                <Link
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/"
                >
                  Calculations
                </Link>
              </span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">Forms</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-folder-open fa-2x"></i>
              <span className="nav-text">Pages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">Graphs and Statistics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-font fa-2x"></i>
              <span className="nav-text">Quotes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-table fa-2x"></i>
              <span className="nav-text">Tables</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker fa-2x"></i>
              <span className="nav-text">Maps</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-info fa-2x"></i>
              <span className="nav-text">Documentation</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
