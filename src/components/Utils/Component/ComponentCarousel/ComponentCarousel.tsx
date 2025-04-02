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
    // 计算屏幕尺寸，调整可见项目数量
    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth
            console.log('Window width:', width)

            if (width < 768) {
                setVisibleCount(1)
                setContainerWidth(350)
                setItemWidth(340)
            } else if (width >= 768 && width < 1024) {
                // 修改这里，确保 768 到 1024 之间适配
                setVisibleCount(2)
                setContainerWidth(680)
                setItemWidth(340)
            } else if (width >= 1024 && width < 1440) {
                // 修改这里，确保 1024 到 1440 之间适配
                setVisibleCount(3)
                setContainerWidth(921)
                setItemWidth(307)
            } else {
                setVisibleCount(4)
                setContainerWidth(1212)
                setItemWidth(303)
            }
        }

        updateDimensions() // 初始化时调用一次

        window.addEventListener('resize', updateDimensions)
        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
    }, [])

    const extendedComponents =
        components.length > visibleCount
            ? [...components, ...components.slice(0, visibleCount)]
            : components

    const originalCount = components.length

    // 每次滑动的固定步长
    const slideDistance = itemWidth // 每次滑动的距离

    const trackWidth = originalCount * itemWidth // 使用原始组件数量计算总宽度
    const translateX = (currentIndex % originalCount) * slideDistance // 确保滑动的距离按固定步长

    const normalizedIndex = currentIndex % originalCount
    const progressRatio = Math.min((normalizedIndex + visibleCount) / originalCount, 1)

    // 切换到下一个项目
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % originalCount) // 确保循环
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

    return (
        <div
            className="relative overflow-hidden"
            style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                    width: `${trackWidth}px`,
                    transform: `translateX(-${translateX}px)`,
                }}
            >
                {extendedComponents.map((component, index) => {
                    return (
                        <div key={index} className="px-[10px]">
                            {component}
                        </div>
                    )
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
    )
}

export default ComponentCarousel
