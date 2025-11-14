'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler    
);

export const TokenPriceChartCard: React.FC = () => {
  // Mock data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Giá UTY',
        data: [0.12, 0.15, 0.18, 0.22, 0.20, 0.21, 0.25, 0.23, 0.26, 0.24, 0.27, 0.245],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1F2937',
        padding: 12,
        titleColor: '#F9FAFB',
        bodyColor: '#F9FAFB',
        borderColor: '#374151',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#F3F4F6',
          drawBorder: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11,
          },
          callback: function (tickValue: string | number) {
            return typeof tickValue === 'number' ? tickValue.toFixed(1) : tickValue;
          },
        },
      },
    },
  };

  const tokenStats = [
        { label: 'Giá hiện tại', value: '$0.245', color: 'text-[#2563EB]' },
    { label: 'Vốn hóa thị trường', value: '$110.25M', color: 'text-[#000000]' },
    { label: 'Khối lượng 24h', value: '$2.8M', color: 'text-[#000000]' },
    { label: 'Thanh khoản', value: '$5.2M', color: 'text-[#16A34A]' },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827] mb-2 sm:mb-3 px-2">
            Biểu đồ Giá và Thanh khoản
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4B5563] px-2">
            Theo dõi hiệu suất Token trong thời gian thực
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left: Price Chart */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Chart Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#111827]">
                Biểu đồ Giá UTY
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-600">
                  $0.245
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-green-600 bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  +12.5%
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Right: Token Stats & CTA */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5 md:gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Token Stats Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-5 lg:p-6">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#111827] mb-3 sm:mb-4">
                Thông kê Token
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {tokenStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#4B5563]">{stat.label}</span>
                    <span className={`text-xs sm:text-sm md:text-base font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 text-white text-center"
              style={{
                background: 'linear-gradient(90deg, #2563EB 0%, #9333EA 100%)',
              }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">
                Sẵn sàng đầu tư?
              </h3>
              <button className="w-full text-sm sm:text-base bg-white text-[#2563EB] font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 mb-2 sm:mb-3">
                Mua UTY Ngay
              </button>
              <p className="text-xs sm:text-sm text-[#DBEAFE]">
                Giao dịch trên Uniswap & PancakeSwap
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenPriceChartCard;
