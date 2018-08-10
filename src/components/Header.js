import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <Link className="text-muted" to="/add/event" style={{ marginRight: 10 }}>
          <button type="button" className="btn btn-outline-dark">
            <i className="fas fa-plus"></i> Event
          </button>
        </Link>
        <Link className="text-muted" to="/add/category">
          <button type="button" className="btn btn-dark">
            <i className="fas fa-plus"></i> Category
          </button>
        </Link>
      </div>
      <div className="col-4 text-center">
        <Link className="blog-header-logo text-dark" to="/">Z</Link>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <Link className="text-muted" to="/events" style={{ paddingRight: 15 }}>Events</Link>
        <Link className="text-muted" to="/categories" style={{ paddingRight: 15 }}>Categories</Link>
        <Link className="text-muted" to="/countries">Countries</Link>
      </div>
    </div>
  </header>
);

export default Header;
