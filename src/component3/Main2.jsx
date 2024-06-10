import React from 'react';
import '../component3/css.css';
import alis5 from './img/alis5.webp';
import sim from './img/sim.webp';
import lem from './img/lem.webp';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const WelcomeMessage2 = () => {
  return (
    <div className="container reveal1">
      <div className="text-container reveal">
        <h1>نوشیدنی انرژی‌زا ایکس‌ری</h1>
        <p>نوشیدنی انرژی‌زا ایکس‌ری با بهره‌گیری از تکنولوژی روز دنیا و مواد مقوی تائورین، ویتامین‌های ب‌2، ب‌3، ب‌5، ب‌6، ب12، کافئین و اینوزیتول، بدون نگهدارنده، با کیفیت عالی و قیمت مناسب تولید و در قوطی‌های 250 سی‌سی عرضه می‌شود.</p>
        <hr />
        <p><a href="#">اطلاعات بیشتر</a></p>
        <div className='pcont'>
          <p>B5</p>
          <p>B6</p>
          <p>B12</p>
        </div>
      </div>

      <div className="image-container2 reveal">
        <img className='img2' src={sim} alt="Sim" />
        <div className="img1-wrapper">
          <img className='img1' src={alis5} alt="Alis 5" />
        </div>
        <img className='img3' src={lem} alt="Lem" />
      </div>
    </div>
  );
};

export default WelcomeMessage2;
