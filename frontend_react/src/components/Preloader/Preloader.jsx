import React, { useEffect, useState } from "react";

import "./Preloader.css";

export default function Preloader() {
  /**
   *  preloader
   */

  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading("loaded");
    }, 1200);
  }, []);

  return (
    <>
      <div className={`preloader ${isLoading} has-bg-image`}>
        <div className="circle"></div>
      </div>
    </>
  );
}
