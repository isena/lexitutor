import React, { useState } from 'react'
import { AnswerStatus } from '../AnswerStatus'
import { InputToFill } from './InputToFill'
import './backgroun-answers.css'

interface Props {
  title: string
  textWithPlaceholder: string
  pattern: string
  expectedText: string
  translation: string
  showAnswer: boolean
  rightAnswered: () => void
}

export const QuestionToFill: React.FC<Props> = ({ title, textWithPlaceholder, pattern, expectedText, translation, showAnswer, rightAnswered }) => {
  const [answerStatus, setAnswerStatus] = useState(AnswerStatus.NotAnswered)
  const [showTranslation, setShowTranslation] = useState(false)
  const className = answerStatus === AnswerStatus.Right || showAnswer
    ? 'background-right-answer'
    : answerStatus === AnswerStatus.NotAnswered
    ? 'background-not-answered'
    : 'background-wrong-answer'
  let answer = ''
  const handleInputChanges = (value: string) => {
    answer = value
  }
  const checkAnswer = () => {
    console.log('answer --->', answer)
    if (answer === expectedText) {
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
      <div>
        { showAnswer
          ? (
            <div>
              <b>{expectedText}</b>
            </div>
          )
          : (
            <div className='d-flex flex-row justify-content-center' style={{ marginTop: '2em' }}>
              <InputToFill
                pattern={pattern}
                text={textWithPlaceholder}
                onChange={handleInputChanges}
              />
              <button
                className='btn m-2'
                style={{ border: '1px solid black' }}
                onClick={() => checkAnswer()}
              >
                check
              </button>
            </div>
          )
        }
      </div>
      <span>
        <button
          className='btn btn-secondary m-2'
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? 'Hide translation' : 'Show translation' }
        </button>
        {showTranslation ? <i>{translation}</i> : ''}
      </span>
    </div>
)}
