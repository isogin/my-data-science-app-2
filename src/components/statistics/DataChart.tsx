import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

interface DataChartProps {
  data: number[];
  months: string[];
}

const DataChart = ({ data, months }: DataChartProps) => {
  const barData = {
    labels: months,
    datasets: [
      {
        label: 'Student Grades',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: months,
    datasets: [
      {
        label: 'Student Grades',
        data: data,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const pieData = {
    labels: months,
    datasets: [
      {
        label: 'Student Grades',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Student Grades',
      },
    },
  };

  return (
    <div className="w-full lg:w-3/4 h-[600px] mb-8">
      <Swiper modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className="w-full h-full">
            <Bar data={barData} options={options} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Line data={lineData} options={options} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Pie data={pieData} options={options} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DataChart;
