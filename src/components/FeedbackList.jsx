import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
  
    if(!feedback || feedback.length === 0){
        return <p>No feedbck Yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

FeedbackList.PropType = {
  feedback: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })
}

export default FeedbackList
