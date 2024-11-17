import React from 'react';
import './css.css';
import a from './img/Doogh_Pet_Mint_1500cc-2-500x500.webp'
import b from './img/Milk_Pet_Milk-Full-Fat_1000cc-500x500.webp'
import c from './img/FruitJuice-3-500x500.webp'
import d from './img/X-Ray-Energy-Drink_Can_Simple_250cc-1-500x500.webp'
import e from './img/cola1-500x500.webp'
import f from './img/Champain_Glass_Red-Grape_750cc-500x500.webp'
import g from './img/Carbonated-Juice_Pet_Lemon_1000cc-500x500.webp'
import h from './img/Mineral-Water_Pet_1500cc-1-500x500.webp'


const WelcomeMessage4 = () => {
  return (
    <div className='lists'>

      <ul className="product-list">
        <li>نوشابه‌‌ ها</li>
        <li>ماءالشعیر ها</li>
        <li>شیر ها</li>
        <li>دوغ ها</li>
        <li>آبمیوه‌های گازدار</li>
        <li>آبمیوه‌‌ها</li>
        <li>نوشیدنی انرژی‌زا</li>
        <li>آب‌معدنی</li>
        <li>همه محصولات</li>
      </ul>
        
      <div className="image-grid">
          <figure>
            <img src={a} alt="Product 1" />
            <figcaption>دوغ ها</figcaption>
          </figure>
          <figure>
            <img src={b} alt="Product 2" />
            <figcaption>شیر ها</figcaption>
          </figure>
          <figure>
            <img src={c} alt="Product 3" />
            <figcaption>آبمیوه‌‌ها</figcaption>
          </figure>
          <figure>
            <img src={d} alt="Product 4" />
            <figcaption>نوشیدنی انرژی‌زا</figcaption>
          </figure>
          <figure>
            <img src={e} alt="Product 5" />
            <figcaption>نوشابه‌‌ ها</figcaption>
          </figure>
          <figure>
            <img src={f} alt="Product 6" />
            <figcaption>آبمیوه‌های گازدار</figcaption>
          </figure>
          <figure>
            <img src={g} alt="Product 7" />
            <figcaption>ماءالشعیر </figcaption>
          </figure>
          <figure>
            <img src={h} alt="Product 8" />
            <figcaption>آب‌معدنی</figcaption>
          </figure>
      </div>





      
    </div>

  );
};

export default WelcomeMessage4;
