import PageHeader from '@/components/PageHeader'
import React from 'react'
import WordOfTheDayContent from "@/components/word-of-the-day/WordOfTheDayContent";

export const metadata = {
  title: "Hachiko Dictionary | Word of the day"
}

const WordOfTheDay = () => {
  return (
    <div className='w-full h-screen'>
      <PageHeader title='Word of the day' />
      <WordOfTheDayContent />
    </div>
  )
}

export default WordOfTheDay