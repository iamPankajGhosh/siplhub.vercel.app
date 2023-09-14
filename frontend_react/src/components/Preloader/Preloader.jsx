import React, { useEffect, useState } from "react";

import "./Preloader.css";

export default function Preloader() {
  /**
   *  preloader
   */

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="preloader has-bg-image">
          <div className="circle"></div>
        </div>
      ) : (
        <div className="preloader loaded has-bg-image">
          <div className="circle"></div>
        </div>
      )}
    </>
  );
}
