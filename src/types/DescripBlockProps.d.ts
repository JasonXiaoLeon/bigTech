import { ReactNode } from 'react'

export interface DescripBlockProps {
    title: string
    content1?: string
    content2?: string
    blueContent?: string | ReactNode
    afterBlueContent?: string
    marginBottom: string
}
