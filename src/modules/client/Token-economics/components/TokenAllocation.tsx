'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getTokenAllocation } from '../services/economics.service';

export const TokenAllocation: React.FC = () => {
  const allocationData = getTokenAllocation();

  // Calculate pie chart segments
  const createPieSegments = () => {
    let cumulativePercent = 0;
    return allocationData.allocations.map((item) => {
      const startPercent = cumulativePercent;
      cumulativePercent += item.percentage;
      return {
        ...item,
        startPercent,
        endPercent: cumulativePercent,
      };
    });
  };

  const segments = createPieSegments();

  // Convert percentage to SVG path
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const createPiePath = (startPercent: number, endPercent: number) => {
    const [startX, startY] = getCoordinatesForPercent(startPercent);
    const [endX, endY] = getCoordinatesForPercent(endPercent);
    const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0;

    return [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      'L 0 0',
    ].join(' ');
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
              
              {/* SVG Pie Chart with Labels */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto mb-4 sm:mb-5 md:mb-6">
                <div className="aspect-square">
                  <svg viewBox="-2.2 -2.2 4.4 4.4" className="transform -rotate-90 w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Pie segments */}
                    {segments.map((segment, index) => (
                      <motion.path
                        key={index}
                        d={createPiePath(segment.startPercent / 100, segment.endPercent / 100)}
                        fill={segment.color}
                        stroke="white"
                        strokeWidth="0.02"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                    
                    {/* Connecting lines with elbow */}
                    {segments.map((segment, index) => {
                      const midPercent = (segment.startPercent + segment.endPercent) / 200;
                      const angle = 2 * Math.PI * midPercent;
                      
                      // Inner point (edge of pie)
                      const innerRadius = 1.02;
                      const x1 = Math.cos(angle) * innerRadius;
                      const y1 = Math.sin(angle) * innerRadius;
                      
                      // Elbow point - adjust based on quadrant for better distribution
                      const elbowRadius = 1.25;
                      const x2 = Math.cos(angle) * elbowRadius;
                      const y2 = Math.sin(angle) * elbowRadius;
                      
                      // Smart label positioning to avoid overlap and use vertical space
                      // Distribute labels vertically based on their position
                      let labelY = y2;
                      const horizontalExtension = 0.6;
                      
                      // Adjust vertical position for better spacing
                      // Top half segments - spread them vertically
                      if (y2 > 0.3) {
                        // Upper segments - push higher
                        labelY = y2 + 0.3;
                      } else if (y2 < -0.3) {
                        // Lower segments - push lower
                        labelY = y2 - 0.3;
                      }
                      
                      const x3 = x2 + (x2 > 0 ? horizontalExtension : -horizontalExtension);
                      const y3 = labelY;
                      
                      return (
                        <motion.g key={`line-${index}`}>
                          <motion.polyline
                            points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                            fill="none"
                            stroke={segment.color}
                            strokeWidth="0.015"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.75 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                          />
                          {/* Label text inside SVG - counter-rotate to make text horizontal */}
                          <motion.text
                            x={x3 + (x3 > 0 ? 0.05 : -0.05)}
                            y={y3}
                            textAnchor={x3 > 0 ? 'start' : 'end'}
                            dominantBaseline="middle"
                            className="fill-[#111827] font-semibold"
                            style={{ fontSize: '0.16px' }}
                            transform={`rotate(90, ${x3 + (x3 > 0 ? 0.05 : -0.05)}, ${y3})`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.7,
                              ease: "easeOut"
                            }}
                          >
                            <tspan x={x3 + (x3 > 0 ? 0.05 : -0.05)} dy="0" className="font-medium" style={{ fontSize: '0.14px' }}>
                              {segment.name}
                            </tspan>
                            <tspan x={x3 + (x3 > 0 ? 0.05 : -0.05)} dy="0.18" className="font-bold" style={{ fontSize: '0.17px' }}>
                              {segment.percentage}%
                            </tspan>
                          </motion.text>
                        </motion.g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Legend - 2 columns below pie chart */}
              <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1.5 sm:gap-y-2 w-full px-1 sm:px-2">
                {allocationData.allocations.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <div
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[10px] sm:text-[11px] md:text-xs text-[#374151] font-medium leading-tight">{item.name}</span>
                  </motion.div>
                ))}
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


