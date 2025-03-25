import React from 'react'

interface Props {
  margin?: string
  padding?: string
  children?: React.ReactNode 
  width?:string
  height?:string
}

const Container: React.FC<Props> = ({ margin, padding, children, width, height }) => {
  return (
    <div 
    style={{ marginLeft: margin, marginRight: margin, paddingLeft: padding, paddingRight: padding, width:width, height:height, maxWidth: '1250px', }}
    >
      {children}
    </div>
  )
}

export default Container
