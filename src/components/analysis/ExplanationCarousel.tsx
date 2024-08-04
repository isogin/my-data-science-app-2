import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ExplanationCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div>
          <h2 className="text-xl font-roboto mb-2">データ分析の概要</h2>
          <p>データ分析は、データセットから意味のある情報を引き出すための手法です。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-lg font-roboto mb-2">相関分析</h2>
          <p>相関分析は、2つの変数間の関係を測定し、その強さと方向を評価します。相関係数は -1 から 1 までの範囲で、1 に近いほど強い正の相関を示し、-1 に近いほど強い負の相関を示します。0 近い値は相関がないことを示します。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-lg font-roboto mb-2">クロス集計</h2>
          <p>クロス集計は、2つのカテゴリ変数間の関係を分析する手法です。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-lg font-roboto mb-2">仮説検定</h2>
          <p>仮説検定は、統計的手法を用いて仮説を検証する手法です。</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ExplanationCarousel;
