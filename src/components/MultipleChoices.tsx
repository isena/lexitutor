import React, { useState } from 'react'
import { AnswerStatus } from '../AnswerStatus'
import './backgroun-answers.css'

interface Props {
  title: string
  options: string[]
  rightOption: string
  showAnswer: boolean
  rightAnswered: () => void
}

export const MultipleChoices: React.FC<Props> = ({ title, options, rightOption, showAnswer, rightAnswered }) => {
  const [answerStatus, setAnswerStatus] = useState(AnswerStatus.NotAnswered)
  const className = answerStatus === AnswerStatus.Right || showAnswer
    ? 'background-right-answer'
    : answerStatus === AnswerStatus.NotAnswered
    ? 'background-not-answered'
    : 'background-wrong-answer'

  const checkAnswer = (answer: string) => {
    if (answer === rightOption) {
      setAnswerStatus(AnswerStatus.Right)
      rightAnswered()
    } else {
      setAnswerStatus(AnswerStatus.Wrong)
    }
  }

  return (
    <div className={className}>
      <h4 className='' style={{ 
        borderBottom: '1px solid #000',
        lineHeight: '0.1em',
        margin: '10px 0 20px'
      }}>
        <span style={{ background: '#fff', padding: '0 10px' }}>
          {title}
        </span>
      </h4>
      { showAnswer
        ? (
          <div style={{ marginBottom: '1em' }}>
            <b>{rightOption}</b>
          </div>
        )
        : (
          <div className='' style={{ marginBottom: '1em' }}>
            {options.map((option) => (
              <button className='btn btn-primary m-2' 
                onClick={() => checkAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        )
      }
    </div>
  )
}
