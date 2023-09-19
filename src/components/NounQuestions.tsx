import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { KasusName, Noun } from '../Nouns'
import { QuestionToFill } from './QuestionToFill'
import { MultipleChoices } from './MultipleChoices'
import { SelectChoices } from './SelectChoices'

interface Props {
  noun: Noun
  translationOptions: string[]
  goNext: () => void
}

const NounQuestions: React.FC<Props> = ({ noun, translationOptions, goNext }) => {
  const [isTranslationRightAnswered, setIsTranslationRightAnswered] = useState(false)
  const translationRightAnswered = () => {
    setIsTranslationRightAnswered(true)
  }
  const TranslationDiv = (): ReactElement => {
    return (
      <MultipleChoices
        title='Übersetzung'
        options={translationOptions}
        rightOption={noun.translation}
        showAnswer={isTranslationRightAnswered}
        rightAnswered={translationRightAnswered}
      />
    )
  }

  const [isNominativRightAnswered, setIsNominativRightAnswered] = useState(false)
  const nominativ = noun.kasus.find(kasus => kasus.name === KasusName.Nominativ)
  
  if (!nominativ) {
    throw Error('Nominativ case not found')
  }

  const nominativOptions = [
    { value: 'der', label: 'der' },
    { value: 'das', label: 'das' },
    { value: 'die', label: 'die' }
  ]
  const nominativRightAnswered = () => {
    setIsNominativRightAnswered(true)
  }
  const nominativParts = nominativ.toFill.split('___')
  const NominativDiv = (): ReactElement => {
    return (
      <SelectChoices
        title='Nominativ'
        prefixText={nominativParts[0]}
        suffixText={nominativParts[1]}
        fullText={nominativ.phrase}
        options={nominativOptions}
        translation={nominativ.translation}
        pattern='___'
        showAnswer={isNominativRightAnswered}
        rightAnswered={nominativRightAnswered}
      />
    )
  }

  const [isAkkusativRightAnswered, setIsAkkusativRightAnswered] = useState(false)
  const akkusativ = noun.kasus.find(kasus => kasus.name === KasusName.Akkusativ)

  if (!akkusativ) {
    throw Error('Akkusativ case not found')
  }

  const akkusativRightAnswered = () => {
    setIsAkkusativRightAnswered(true)
  }
  const AkkusativDiv = (): ReactElement => {
    return(
      <QuestionToFill
        title='Akkusativ'
        textWithPlaceholder={akkusativ.toFill}
        expectedText={akkusativ.phrase}
        translation={akkusativ.translation}
        pattern='___ ___'
        showAnswer={isAkkusativRightAnswered}
        rightAnswered={akkusativRightAnswered}
      />
    )
  }

  const [isDativRightAnswered, setIsDativRightAnswered] = useState(false)
  const dativ = noun.kasus.find(kasus => kasus.name === KasusName.Dativ)

  if (!dativ) {
    throw Error('Akkusativ case not found')
  }

  const dativRightAnswered = () => {
    setIsDativRightAnswered(true)
  }
  const DativDiv = (): ReactElement => {
    return(
      <QuestionToFill
        title='Dativ'
        textWithPlaceholder={dativ.toFill}
        expectedText={dativ.phrase}
        translation={dativ.translation}
        pattern='___ ___'
        showAnswer={isDativRightAnswered}
        rightAnswered={dativRightAnswered}
      />
    )
  }

  const [isGenitivRightAnswered, setIsGenitivRightAnswered] = useState(false)
  const genitiv = noun.kasus.find(kasus => kasus.name === KasusName.Genitiv)

  if (!genitiv) {
    throw Error('Akkusativ case not found')
  }

  const genitivRightAnswered = () => {
    setIsGenitivRightAnswered(true)
  }
  const GenitivDiv = (): ReactElement => {
    return(
      <QuestionToFill
        title='Genitiv'
        textWithPlaceholder={genitiv.toFill}
        expectedText={genitiv.phrase}
        translation={genitiv.translation}
        pattern='___ ___'
        showAnswer={isGenitivRightAnswered}
        rightAnswered={genitivRightAnswered}
      />
    )
  }

  const [isPluralRightAnswered, setIsPluralRightAnswered] = useState(false)
  const plural = noun.kasus.find(kasus => kasus.name === KasusName.Plural)

  if (!plural) {
    throw Error('Akkusativ case not found')
  }

  const pluralRightAnswered = () => {
    setIsPluralRightAnswered(true)
  }
  const PluralDiv = (): ReactElement => {
    return(
      <QuestionToFill
        title='Plural'
        textWithPlaceholder={plural.toFill}
        expectedText={plural.phrase}
        translation={plural.translation}
        pattern='___ ___'
        showAnswer={isPluralRightAnswered}
        rightAnswered={pluralRightAnswered}
      />
    )
  }

  const NextDiv = (): ReactElement => {
    return (
      <div className='d-flex justify-content-center align-center'>
        <button className='btn' style={{ backgroundColor:'green', color:'white', marginTop:'1em'}} onClick={() => cleanUpAndGo()}>
          Well done! 👏 <br />Go to next noun!
        </button>
      </div>
  )}

  const cleanUpAndGo = () => {
    setIsTranslationRightAnswered(false)
    setIsNominativRightAnswered(false)
    setIsAkkusativRightAnswered(false)
    setIsDativRightAnswered(false)
    setIsGenitivRightAnswered(false)
    setIsPluralRightAnswered(false)

    goNext()
  }

  const scrollRef = useRef<null | HTMLDivElement>(null)
  const scrollToBottom = () => {
    if (!scrollRef.current) {
      return
    }

    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [noun, translationOptions, goNext])

  return (
    <div>
      <div
      style={{ border: '4px solid black' }}
      className='d-flex
              justify-content-center
              align-center
              text-center
              flex-column'>
        <h2 className=''>{noun.key}</h2>
        <TranslationDiv />
        {isTranslationRightAnswered && <NominativDiv />}
        {isNominativRightAnswered && <AkkusativDiv />}
        {isAkkusativRightAnswered && <DativDiv />}
        {isDativRightAnswered && <GenitivDiv />}
        {isGenitivRightAnswered && <PluralDiv />}
      </div>
      {isPluralRightAnswered && <NextDiv />}
      <div ref={scrollRef} />
    </div>
  )
}

export default NounQuestions
