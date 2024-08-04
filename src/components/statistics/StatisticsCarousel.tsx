import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const StatisticsCarousel = () => {
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
          <h2 className="text-2xl font-roboto mb-4">平均</h2>
          <p>平均とは、データの合計をデータの個数で割った値です。データの中心傾向を示します。</p>
          <p>数式: <code>平均 = (データの合計) / (データの個数)</code></p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-2xl font-roboto mb-4">中央値</h2>
          <p>中央値とは、データを小さい順に並べたときの中央の値です。データの中心位置を示します。</p>
          <p>数式: <code>中央値 = (データの中央の値)</code></p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-2xl font-roboto mb-4">最頻値</h2>
          <p>最頻値とは、データの中で最も頻繁に現れる値です。データの中で最も多く出現する値を示します。</p>
          <p>数式: <code>最頻値 = (データの中で最も頻繁に現れる値)</code></p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-2xl font-roboto mb-4">分散</h2>
          <p>分散とは、データの各値と平均値との差を二乗して、その平均を取った値です。データのばらつきを示します。</p>
          <p>数式: <code>分散 = (Σ(データ - 平均)²) / データの個数</code></p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2 className="text-2xl font-roboto mb-4">標準偏差</h2>
          <p>標準偏差とは、分散の平方根です。データのばらつきの大きさを示します。</p>
          <p>数式: <code>標準偏差 = √(分散)</code></p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default StatisticsCarousel;
