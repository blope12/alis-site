import React from 'react';
import '../component2/css.css';
import alis1 from './img/alis1.webp';
import alis2 from './img/alis2.webp';
import alis2bg from './img/alis2_bg.webp';
import alis1bg from './img/alis1_bg.webp';

const WelcomeMessage = () => {
  return (
    <div>
      <div className="textsm">
        <h1 className="h1m">هلدینگ عالیس</h1>
        <p>بزرگترین تولید‌کننده انواع نوشیدنی در ایران</p>
        <button>مشاهده محصولات</button>
      </div>

      <div className="image-container">
      <img src={alis2} alt="Alis 2" className="alis2" />
          <img src={alis2bg} alt="Alis 2 Background" className="alis2bg" />
          <img src={alis1} alt="Alis 1" className="alis1" />
          <img src={alis1bg} alt="Alis 2 Background" className="alis1bg" />


        </div>
    </div>
  );
};

export default WelcomeMessage;
