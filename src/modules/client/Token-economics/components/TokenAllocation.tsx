'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { getTokenAllocation } from '../services/economics.service';

export const TokenAllocation: React.FC = () => {
  const allocationData = getTokenAllocation();

  // Prepare data for ECharts
  const echartsData = allocationData.allocations.map((item) => ({
    name: item.name,
    value: item.percentage,
    itemStyle: {
      color: item.color,
      borderColor: item.borderColor,
      borderWidth: 2
    }
  }));

  // ECharts option configuration (similar to "Referer of a Website" style)
  const echartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}.0% ({d}%)'
    },
    legend: {
      show: false // Tắt legend mặc định, sẽ tạo custom legend bằng HTML
    },
    grid: {
      bottom: 80 // Tạo không gian cho custom legend
    },
    series: [
      {
        name: 'Token Allocation',
        type: 'pie',
        radius: ['0%', '60%'],
        center: ['50%', '45%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside',
          formatter: function(params: { name: string; value: number }) {
            const name = params.name;
            const value = params.value;
            // Tự động xuống dòng nếu tên quá dài (> 15 ký tự)
            if (name.length > 15) {
              const words = name.split(' ');
              if (words.length > 1) {
                const mid = Math.ceil(words.length / 2);
                const firstLine = words.slice(0, mid).join(' ');
                const secondLine = words.slice(mid).join(' ');
                return `${firstLine}\n${secondLine}: ${value}.0 %`;
              }
            }
            return `${name}: ${value}.0 %`;
          },
          fontSize: 10,
          color: '#333',
          fontWeight: '500',
          lineHeight: 12
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 15,
          smooth: false,
          lineStyle: {
            color: function(params: { data: { itemStyle: { color: string } } }) {
              // Sử dụng màu của segment tương ứng
              return params.data.itemStyle.color;
            },
            width: 1.5
          }
        },
        data: echartsData
      }
    ]
  };

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827] mb-2 sm:mb-3 px-2">
            {allocationData.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4B5563] px-2">
            {allocationData.subtitle}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left: Pie Chart */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 w-full">
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#111827] text-center mb-2 sm:mb-3">
                Phân bổ Token UTY
              </h3>
              
              {/* ECharts Pie Chart */}
              <div className="w-full h-[350px]">
                <ReactECharts 
                  option={echartsOption} 
                  style={{ height: '100%', width: '100%' }}
                  opts={{ renderer: 'canvas' }}
                />
              </div>

              {/* Custom Legend - 2 columns layout like in the image */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 justify-center max-w-md mx-auto mt-4">
                {/* Left column */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                    <span className="text-xs text-[#374151]">Cộng đồng & Phần thưởng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
                    <span className="text-xs text-[#374151]">Đội ngũ & Cố vấn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                    <span className="text-xs text-[#374151]">Vòng hạt giống</span>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                    <span className="text-xs text-[#374151]">Quản trị & Kho bạc</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                    <span className="text-xs text-[#374151]">Thanh khoản & Sàn giao dịch</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Allocation Cards */}
          <div className="space-y-3 sm:space-y-4">
            {allocationData.allocations.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-md p-3 sm:p-4 md:p-5 border-l-[3px] sm:border-l-4 hover:shadow-lg transition-shadow"
                style={{ borderLeftColor: item.borderColor }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111827] mb-1 sm:mb-2">
                      {item.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs md:text-sm text-[#6B7280] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className="text-lg sm:text-xl md:text-2xl font-bold"
                      style={{ color: item.borderColor }}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenAllocation;


