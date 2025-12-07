import React from 'react'
import { memo } from 'react';

const Child = (props) => {
    console.log("Child component rendered");
  return (
    <div>{props.count1}</div>
  )
}

export default Child; memo(Child);
