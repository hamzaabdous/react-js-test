/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="../index3.html" className="brand-link">
        <img
          src="../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar" style={{ overflowY: "auto" }}>
        {/* Sidebar user panel (optional) */}

        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
          <div className="sidebar-search-results">
            <div className="list-group">
              <a href="#" className="list-group-item">
                <div className="search-title">
                  <strong className="text-light" />N
                  <strong className="text-light" />o
                  <strong className="text-light" />{" "}
                  <strong className="text-light" />e
                  <strong className="text-light" />l
                  <strong className="text-light" />e
                  <strong className="text-light" />m
                  <strong className="text-light" />e
                  <strong className="text-light" />n
                  <strong className="text-light" />t
                  <strong className="text-light" />{" "}
                  <strong className="text-light" />f
                  <strong className="text-light" />o
                  <strong className="text-light" />u
                  <strong className="text-light" />n
                  <strong className="text-light" />d
                  <strong className="text-light" />!
                  <strong className="text-light" />
                </div>
                <div className="search-path" />
              </a>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

            <li class="nav-item">
              <Link to="/" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" class="nav-link">
                <i class="nav-icon fas fa-handshake"></i> <p>Projects</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" class="nav-link">
                <i class="nav-icon fas fa-exchange-alt"></i>{" "}
                <p>Suivi des ventes</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" class="nav-link">
                <i class="nav-icon fas fa-graduation-cap"></i> <p>Clients</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" class="nav-link">
                <i class="nav-icon fas fa-user-times"></i> <p>Utilisateurs</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About" class="nav-link">
                <i class="nav-icon fas fa-user-times"></i>{" "}
                <p>Fiche entreprise</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
