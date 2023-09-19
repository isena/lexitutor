import React, { useState } from 'react'
import { nouns } from '../Nouns'
import NounQuestions from './NounQuestions'

const shuffledNouns = shuffle(nouns)

const Quiz: React.FC = () => {
  const [currentNounIndex, setCurrentNounIndex] = useState(0)

  const goNext = () => {
    const nextNounIndex = currentNounIndex + 1

    if (nextNounIndex < shuffledNouns.length) {
      setCurrentNounIndex(nextNounIndex)
    } else {
      alert(`Quiz finished! 🎉`)
    }
  }

  const selectedNoun = shuffledNouns[currentNounIndex]
  const otherTranslations = [...new Set(shuffle(
    nouns
      .filter(noun => noun.translation !== selectedNoun.translation))
      .map(noun => noun.translation)
  )]

  const translations = shuffle([
    selectedNoun.translation,
    otherTranslations[0],
    otherTranslations[1],
    otherTranslations[2]]
  )

  return (
    <div>
      <h1 className='text-center'>Deutsch Kasus</h1>
      {currentNounIndex < shuffledNouns.length ? (
        <NounQuestions
          noun={selectedNoun}
          translationOptions={translations}
          goNext={goNext}
        />
      ) : 'null'}
    </div>
  )
}

function shuffle<T>(array: T[]) { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  } 
  return array
}

export default Quiz
