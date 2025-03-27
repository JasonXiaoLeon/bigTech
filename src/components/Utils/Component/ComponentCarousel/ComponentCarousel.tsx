import React, { useState, useEffect } from 'react';

interface ComponentCarouselProps {
  components: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  visibleCount?: number;
  gap?: number;
  containerWidth?: number;
  containerHeight?: number;
}

const ComponentCarousel: React.FC<ComponentCarouselProps> = ({
  components,
  autoPlay = true,
  interval = 3000,
  visibleCount = 3,
  gap = 0,
  containerWidth = 800,
  containerHeight = 400,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const extendedComponents =
    components.length > visibleCount
      ? [...components, ...components.slice(0, visibleCount)]
      : components;

  const originalCount = components.length;
  const totalCount = extendedComponents.length;

  // ✅ 修改为每次仅移动一个元素
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay) {
      timer = setInterval(nextSlide, interval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlay, interval]);

  useEffect(() => {
    if (currentIndex >= originalCount) {
      const timeout = setTimeout(() => setCurrentIndex(0), 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, originalCount]);

  const itemWidth = (containerWidth - (visibleCount - 1) * gap) / visibleCount;
  const trackWidth = totalCount * itemWidth + (totalCount - 1) * gap;
  const translateX = currentIndex * (itemWidth + gap);

  const normalizedIndex = currentIndex % originalCount;
  const progressRatio = Math.min((normalizedIndex + visibleCount) / originalCount, 1);

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
    >
      {/* 滑动 track */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          width: `${trackWidth}px`,
          transform: `translateX(-${translateX}px)`,
        }}
      >
        {extendedComponents.map((component, index) => {
          const isLastVisibleItem = index === currentIndex + visibleCount - 1;

          return (
            <div
              key={index}
              className="flex-none"
              style={{
                width: `${itemWidth}px`,
                marginRight: isLastVisibleItem ? '0px' : `${gap}px`,
              }}
            >
              {component}
            </div>
          );
        })}
      </div>

      {/* 进度条 */}
      <div className="mt-4" style={{ width: `${containerWidth}px` }}>
        <div className="w-full h-1 bg-gray-300">
          <div
            className="h-full bg-green-500 transition-all duration-500 ease-in-out"
            style={{ width: `${progressRatio * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCarousel;
