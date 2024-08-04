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
          <h2 className="text-xl font-roboto mb-2">データ前処理の概要</h2>
          <p>データ前処理は、データサイエンスにおける重要なステップであり、データの品質を向上させるために行われます。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-lg font-roboto mb-2">欠損値の補間</h2>
          <p>データセット内の欠損値を補間することで、分析結果の精度を向上させます。平均値で補間する方法や欠損値を削除する方法があります。</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-lg font-roboto mb-2">データの標準化</h2>
          <p>データの標準化は、異なるスケールのデータを比較可能にするために行います。平均を0、標準偏差を1に調整することで、データのばらつきを統一します。</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ExplanationCarousel;
