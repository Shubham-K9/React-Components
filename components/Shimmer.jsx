import React from "react";


const Shimmer = () => {
  return (
    <div className="shimmer-grid">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="shimmer-card">
          <div className="shimmer-line title"></div>
          <div className="shimmer-line small"></div>
          <div className="shimmer-line small"></div>
          <div className="shimmer-line small"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
