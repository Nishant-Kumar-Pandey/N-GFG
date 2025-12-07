import React from 'react'

const Child = (props) => {
  return (
    <div>
        <input type="text" value={props.name}
        placeholder="enter name"
        onChange={(e) => props.setName(e.target.value)} />
        <p>value coming from child: {props.name}</p>
    </div>
  )
}

export default Child