export interface HeaderNaviProp {
    name: string
    index: number
    path: string
    isActive: boolean
    dropdown: boolean
    onClick: (index: number, path: string, dropdown: boolean) => void
}
