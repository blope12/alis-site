import React, { useEffect } from 'react';
import '../component4/css.css';
import anime1 from './img/anim1.webp';
import anime2 from './img/anim2.webp';
import anime3 from './img/anim3.webp';

const WelcomeMessage3 = () => {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    }

    function handleResize() {
      const isMobile = window.innerWidth <= 768; // بررسی موبایل
      const container = document.querySelector('.container2');

      if (isMobile) {
        container.style.flexDirection = 'column'; // چیدمان عمودی برای موبایل
        container.style.gap = '20px'; // تنظیم فاصله بین بخش‌ها
      } else {
        container.style.flexDirection = 'row'; // بازگشت به چیدمان افقی
        container.style.gap = '40px';
      }
    }

    window.addEventListener('scroll', reveal);
    window.addEventListener('resize', handleResize);

    reveal(); // اجرا هنگام بارگذاری اولیه صفحه
    handleResize(); // بررسی دستگاه در بارگذاری اولیه

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container2">
      <div className="text-section reveal">
        <h1>هلدینگ عالیس</h1>
        <p className="p1">
          الیس در کنار تولید محصولات باکیفیت، نگاهی جدی به حفظ محیط ‌زیست و بالا بردن سطح سلامت مصرف‌کنندگان محصولاتش دارد.
        </p>
        <p className="p2">
          گروه کارخانجات تولیدی عالیس با تکیه بر دانش فنی و بهترین تکنولوژی‌های روز دنیا و نیز تولید محصولاتی با بالاترین
          کیفیت و استانداردهای جهانی توانسته است سهم قابل توجهی از بازار کشورهای منطقه در حوزه نوشیدنی را به خود اختصاص
          دهد.
        </p>
        <hr className="hr1" />
        <p className="p3">بشتر بدانید</p>

        <div className="containerpbs">
          <p className="pb1">تولید<br /> مکانیزه</p>
          <p className="pb">توزیع<br /> سراسری</p>
          <p className="pb1">محصولات<br /> صادراتی</p>
          <p className="pb">بهترین مواد<br /> اولیه</p>
          <p className="pb1">تکنولوژی<br /> روز</p>
        </div>
      </div>

      <div className="image-section">
        <img className="anime1 reveal" src={anime1} alt="Sample" />
        <img className="anime2 reveal" src={anime2} alt="Sample" />
        <img className="anime3 reveal" src={anime3} alt="Sample" />
      </div>
    </div>
  );
};

export default WelcomeMessage3;
