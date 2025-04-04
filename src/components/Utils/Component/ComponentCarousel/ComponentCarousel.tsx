import React, { useState, useEffect } from 'react'

interface ComponentCarouselProps {
    components: React.ReactNode[]
    autoPlay?: boolean
    interval?: number
    containerHeight?: number
}

const ComponentCarousel: React.FC<ComponentCarouselProps> = ({
    components,
    autoPlay = true,
    interval = 3000,
    containerHeight = 382,
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [visibleCount, setVisibleCount] = useState<number>(3)
    const [containerWidth, setContainerWidth] = useState<number>(380)
    const [itemWidth, setItemWidth] = useState<number>(350)
    const [isTransitioning, setIsTransitioning] = useState(true)

    const originalCount = components.length

    // 克隆前 visibleCount 个组件到尾部
    const extendedComponents =
        originalCount > visibleCount
            ? [...components, ...components.slice(0, visibleCount)]
            : components

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth

            if (width < 768) {
                setVisibleCount(1)
                setContainerWidth(360)
                setItemWidth(350)
            } else if (width >= 768 && width < 1024) {
                setVisibleCount(2)
                setContainerWidth(680)
                setItemWidth(340)
            } else if (width >= 1024 && width < 1440) {
                setVisibleCount(3)
                setContainerWidth(921)
                setItemWidth(307)
            } else {
                setVisibleCount(4)
                setContainerWidth(1212)
                setItemWidth(303)
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            setIsTransitioning(true)
            // 当当前索引大于等于总数时，重置为 0
            return prevIndex + 1 >= originalCount ? 0 : prevIndex + 1
        })
    }

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (autoPlay) {
            timer = setInterval(nextSlide, interval)
        }
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [autoPlay, interval])

    const trackWidth = extendedComponents.length * itemWidth
    const translateX = currentIndex * itemWidth

    // 轮播逻辑处理，确保循环播放时进度条正确
    const normalizedIndex = currentIndex // 当前的索引直接使用，不再需要取余数

    // 计算进度条比例
    const progressRatio = originalCount > visibleCount
        ? Math.min(normalizedIndex / (originalCount - visibleCount), 1)
        : 0

    return (
        <div>
            <div
                className="relative overflow-hidden ml-[15px] md:ml-[0px]"
                style={{ 
                    width: `${containerWidth}px`, 
                    height: `${containerHeight}px` 
                }}
            >
                <div
                    className="flex h-full"
                    style={{
                        width: `${trackWidth}px`,
                        transform: `translateX(-${translateX}px)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                    }}
                    onTransitionEnd={() => {
                        if (currentIndex >= originalCount) {
                            setTimeout(() => {
                                setIsTransitioning(false)
                                setCurrentIndex(0) // 回到第一个组件
                            }, 50)
                        }
                    }}
                >
                    {extendedComponents.map((component, index) => (
                        <div 
                            key={index} 
                            className="px-[10px]" 
                            style={{ width: `${itemWidth}px` }}
                        >
                            {component}
                        </div>
                    ))}
                </div>
            </div>

            {originalCount > visibleCount && (
                <div className="mt-[50px] overflow-hidden" style={{ width: `${containerWidth}px` }}>
                    <div className="w-full h-[2px] bg-[#030b15] rounded-full">
                        <div
                            className="h-full bg-[#00c4f4] transition-all duration-500 ease-in-out rounded-full"
                            style={{ width: `${progressRatio * 100}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ComponentCarousel
