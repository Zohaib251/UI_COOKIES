import React from 'react'
import "./7_Question_Answer.css"
function Question_Answer(props) {
  return (
    <div className="Question_card">
        <div className="Question_heading">
            <h4 className='heading'><span className="icon icon-checkmark"></span>{props.title}</h4>
        </div>
        <p className='Answer'>
        {props.description}
        </p>
    </div>
  )
}

export default Question_Answer
