import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { ILoadingSkeleton } from 'typescript/interfaces/ILoadingSkeleton'

const LoadingSkeleton = ({ width, height, count, circle, borderRadius, baseColor, duration }: ILoadingSkeleton): JSX.Element => {
    return (
        <Skeleton
            width={width}
            height={height}
            count={count}
            circle={circle}
            borderRadius={borderRadius}
            baseColor={baseColor}
            duration={duration}
        />
    )
}

export default LoadingSkeleton