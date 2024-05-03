import React, { useState, useEffect } from 'react';
import './css/website.css'

const texts = ["BỘ SƯU TẬP ĐỒNG HỒ MỚI VỀ", "ĐĂNG KÍ NHẬN THONG TIN MỚI NHẤT",];

const ChangingText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return (
    <div className='alight_text'>
      {texts[currentTextIndex]}
    </div>
  );
};

export default ChangingText;