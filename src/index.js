/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Test from "./Test";
function Hamza() {
  return (
    <BrowserRouter>
      <body className="hold-transition sidebar-mini ">
        <Header />
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper" style={{ minHeight: "1854.56px" }}>
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Page</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Pages</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row" id="container">
                {/* /.col */}
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </body>
    </BrowserRouter>
  );
}

ReactDOM.render(<Hamza />, document.getElementById("root"));
