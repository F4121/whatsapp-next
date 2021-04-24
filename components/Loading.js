import React from 'react';
import { Circle } from 'better-react-spinkit';

const Loading = () => {
  return (
    <center
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <img
          height={200}
          style={{ marginBottom: 10 }}
          src='http://assets.stickpng.com/images/5ae21cc526c97415d3213554.png'
        />
        <Circle color='#3CBC28' size={60} />
      </div>
    </center>
  );
};

export default Loading;
