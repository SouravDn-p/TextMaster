import React from 'react'

function About(props) {

  let aboutStyle={
    color: props.mode === 'light' ? 'black': 'white',
    backgroundColor: props.mode=== 'light' ?'#dedede' :'#585d5e'
  }
  let aboutBorder={
    border:'5px solid #bfaba7d1',
    borderColor:props.mode==='light' ?'#3f0b59':'#2ec68fd1',
    borderRadius:'5px',
    width:'80%'
  }
  const combinedStyle={...aboutStyle,...aboutBorder}

  return (
    <>
    <div style={combinedStyle} className='container' >
          <div className="container accordion accordion-flush" id="accordionFlushExample" style={aboutStyle} >
                <div className="accordion-item" style={aboutStyle} >
                              <h2 className="accordion-header" id="flush-headingOne" style={aboutStyle} >
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={aboutStyle}>
                                    TextMaster Info
                                </button>
                              </h2>

                              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={aboutStyle} >
                                <div className="accordion-body" style={aboutStyle} >
                                  TextMaster is web tool to utils any text. You can use this tool for word counting and many more!
                                </div>
                              </div>
                </div>

                <div className="accordion-item" style={aboutStyle} >
                              <h2 className="accordion-header" id="flush-headingTwo" style={aboutStyle} >
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={aboutStyle} >
                                  Using 100% of TextUtils
                                </button>
                              </h2>

                              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={aboutStyle}>
                                <div className="accordion-body" style={aboutStyle} >
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi minima nihil sapiente, deleniti ducimus nesciunt commodi possimus autem cupiditate.
                                </div>
                              </div>
                </div>

                <div className="accordion-item" style={aboutStyle}>
                              <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={aboutStyle}>
                                  Let's Fun 
                                </button>
                              </h2>

                              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={aboutStyle}>
                                <div className="accordion-body">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, in.
                                </div>
                              </div>
                </div>
          </div>  
    </div>
    </>
  )
}

export default About