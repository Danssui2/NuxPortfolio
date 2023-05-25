import React, { useState, useEffect } from "react";

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed z-[9999] flex justify-center items-center w-screen h-screen bg-gradient-to-br from-primary-500 to-primary-600">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default LoadingScreen;
