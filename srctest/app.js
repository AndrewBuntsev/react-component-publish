import React from 'react'
import ReactDOM from 'react-dom'
import { tooltip } from '../src/index.js'

const ParentWrapper = () => {
  let TooltippedComponent = tooltip(<input />, {
    text: 'Awesome tooltip!!'
  })
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        alignItems: 'center'
      }}
    >
      <TooltippedComponent />
    </div>
  )
}

ReactDOM.render(<ParentWrapper />, document.getElementById('root'))
