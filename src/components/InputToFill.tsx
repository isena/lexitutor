import React, { useState } from 'react'

interface TextProps {
  text: string
}

const Text: React.FC<TextProps> = ({text}) => {
  return ( 
    <span>
      {text}
    </span>
  )
}

interface InputProps {
  index: number
  onChange: (key: number, value: string) => void
}

const Input: React.FC<InputProps> = ({index, onChange}) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (newValue: string) => {
    setInputValue(newValue)
    onChange(index, newValue)
  }
  return (
    <span>
      <input
        style={{ outline: '0', borderWidth: '0 0 1px', width:'100px' }}
        type='text'
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        autoFocus
      />
    </span>
  )
}

interface Props {
  text: string
  pattern: string
  onChange: (value: string) => void
}

export const InputToFill: React.FC<Props> = ({ text, pattern, onChange }) => {
  const regex = new RegExp(`(${pattern})`, 'g')
  const parts = text.split(regex)
  const elements: JSX.Element[] = []
  const emptyAnswer: {[index: number] : string} = {}
  const [answers, setAnswers] = useState(emptyAnswer)

  const handleChanges = (index: number, value: string) => {
    answers[index] = value

    setAnswers(answers)

    const fullAnswer = parts.map((part, i) => {
      if (part === pattern) {
        return answers[i]
      }

      return part
    }).join('')

    onChange(fullAnswer)
  }

  for (const [i, part] of parts.entries()) {
    if (part === pattern) {
      const element = <Input
        index={i}
        onChange={handleChanges}
      />
      elements.push(element)
    } else {
      const element = <Text
        text={part}
      />
      elements.push(element)
    }
  }

  return (
    <div style={{
      display: 'flex',
      gap: '0.2rem',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {elements}
    </div>
  )
}
