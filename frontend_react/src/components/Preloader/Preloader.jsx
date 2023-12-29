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
    }, 800);
  }, []);

  return (
    <>
      <div className={`preloader ${isLoading ? "" : "loaded"} has-bg-image`}>
        <div className="circle"></div>
      </div>
    </>
  );
}
