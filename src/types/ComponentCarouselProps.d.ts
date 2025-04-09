import { ReactNode } from 'react'

export interface ComponentCarouselProps {
    components: ReactNode[]
    autoPlay?: boolean
    interval?: number
    containerHeight?: number
}
