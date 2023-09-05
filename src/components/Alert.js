import React from 'react'

function Alert(props) {
    
  return (
      <div style={{height:'50px'}} >
        {props.alert && <div className={`alert alert-${props.alert.type} alertHeight`} role="alert" >
            <p>{props.alert.message}</p>
        </div>}
      </div>
    
  )
}

export default Alert