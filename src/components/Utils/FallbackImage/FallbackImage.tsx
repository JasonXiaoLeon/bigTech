import { FallbackImageProps } from '@/types/FallbackImageProps'
import Image from 'next/image'

const FallbackImage = ({
    webpSrc,
    fallbackSrc,
    alt,
    width,
    height,
    className = '',
}: FallbackImageProps) => {
    return (
        <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <Image
                src={fallbackSrc}
                alt={alt}
                width={width}
                height={height}
                className={className}
                loading="lazy"
            />
        </picture>
    )
}

export default FallbackImage
