import React from 'react'

export const Block = ({mark, changeMark, position}) => {
  return (
    <div className={`Block mark${mark}`} onClick={()=>changeMark(position)}></div>
  )
}
