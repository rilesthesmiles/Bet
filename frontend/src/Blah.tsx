import React from 'react';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="Comapny Logo" />
        </div>

        <div className="col align-self-center text-start">
          <h2>{props.websiteTitle}</h2>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
