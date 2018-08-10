import React from 'react';

const Home = () => (
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <p className="lead">MAU: 1 Billion</p>
    <p className="lead">REV: 10 Billion</p>

    <div className="container" style={{ marginTop: '40px' }}>
      <div className="row">
        <div className="col-4">
          <p className="lead">Total Number of Events</p>
        </div>
        <div className="col-6">
          <div className="progress" style={{ width: '500px', height: '40px' }}>
            <div className="progress-bar" style={{ width: '450px', backgroundColor: 'black' }}>90%</div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-4">
          <p className="lead">Total Number of Event Organisers</p>
        </div>
        <div className="col-6">
          <div className="progress" style={{ width: '500px', height: '40px' }}>
            <div className="progress-bar" style={{ width: '400px', backgroundColor: 'black' }}>80%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
