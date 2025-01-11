// import React from "react";
import "./performance.css";

const Performance = () => {
  return (
    <div className="performance-container">
      <h2>Performance</h2>
      {/* Today's Performance Bar */}
      <div className="performance-range">
        <div className="range-labels">
          <div className="low-label">
            <p>Today's Low</p>
            <p>46,930.22</p>
          </div>
          <div className="high-label">
            <p>Today's High</p>
            <p>49,343.83</p>
          </div>
        </div>
        <div className="range-bar">
          <span className="current-marker" style={{ left: "65%" }}>
            $48,637.83
          </span>
        </div>
      </div>

      {/* 52-Week Performance Bar */}
      <div className="performance-range">
        <div className="range-labels">
          <div className="low-label">
            <p>52W Low</p>
            <p>16,930.22</p>
          </div>
          <div className="high-label">
            <p>52W High</p>
            <p>49,743.83</p>
          </div>
        </div>
        <div className="range-bar range-bar-52w">
          <span className="current-marker" style={{ left: "90%" }}>
            $49,637.83
          </span>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="fundamentals">
        <h2>Fundamentals <img src="SVG_margin.png" alt="i" /></h2>
        <div className="data-grid">
        <div className="left-column">
          <div className="fundamental-item">
            <p>Bitcoin Price</p>
            <p>$16,815.46</p>
          </div>
          <div className="fundamental-item">
            <p>Market Cap</p>
            <p>$323,507,290,047</p>
          </div>
          <div className="fundamental-item">
            <p>24h Low / 24h High</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
          <div className="fundamental-item">
            <p>Market Cap Dominance</p>
            <p>38.343%</p>
          </div>
          <div className="fundamental-item">
            <p>7d Low / 7d High</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
        </div>
        <div className="right-column">
          <div className="fundamental-item">
            <p>Volume / Market Cap</p>
            <p>0.0718</p>
          </div>
          <div className="fundamental-item">
            <p>Trading Volume</p>
            <p>$23,249,202,782</p>
          </div>
          <div className="fundamental-item">
            <p>All-Time High</p>
            <p>
              $69,044.77 <span className="percentage-red">-75.6%</span>
            </p>
          </div>
          <div className="fundamental-item">
            <p>Market Cap Rank</p>
            <p>#1</p>
          </div>
          <div className="fundamental-item">
            <p>All-Time Low</p>
            <p>
              $67.81 <span className="percentage-green">24729.1%</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Performance;
