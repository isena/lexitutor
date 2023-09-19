import React, { useState } from 'react'
import { AnswerStatus } from '../AnswerStatus'
import Select from 'react-select'
import './backgroun-answers.css'

interface Props {
  title: string
  prefixText: string
  suffixText: string
  options: {label: string, value: string}[]
  pattern: string
  fullText: string
  translation: string
  showAnswer: boolean
  rightAnswered: () => void
}

export const SelectChoices: React.FC<Props> = ({ title, prefixText, suffixText, options, pattern, showAnswer, fullText, translation, rightAnswered }) => {
  const [answerStatus, setAnswerStatus] = useState(AnswerStatus.NotAnswered)
  const [showTranslation, setShowTranslation] = useState(false)
  const className = answerStatus === AnswerStatus.Right || showAnswer
    ? 'background-right-answer'
    : answerStatus === AnswerStatus.NotAnswered
    ? 'background-not-answered'
    : 'background-wrong-answer'

  const checkAnswer = (answer: string) => {
    const answered = `${prefixText}${pattern}${suffixText}`.replace(pattern, answer)

    if (answered.toLowerCase() === fullText.toLowerCase()) {
      setAnswerStatus(AnswerStatus.Right)
      rightAnswered()
    } else {
      setAnswerStatus(AnswerStatus.Wrong)
    }
  }

  return (
    <div className={className}>
      <h4 style={{ 
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
              <b>{fullText}</b>
            </div>
          )
          : (
            <div className='d-flex flex-row justify-content-center' style={{ marginTop: '2em' }}>
              <div style={{ display: 'flex', gap: '0.2rem', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <span>
                  {prefixText}
                </span>
                <span>
                  <Select options={options} onChange={(e) => {
                    const value = e ? e.value : ''
                    checkAnswer(value)
                  }}/>
                </span>
                <span>
                  {suffixText}
                </span>
              </div>
            </div>
          )
        }
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
  )
}
