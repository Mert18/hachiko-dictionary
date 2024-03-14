import PageHeader from '@/components/PageHeader'
import ListGames from '@/components/games/ListGames'
import React from 'react'

export const metadata = {
  title: "Hachiko Dictionary | Games"
}

const Games = () => {
  return (
    <div className='w-full'>
      <PageHeader title='Games' />
      <ListGames />
    </div>
  )
}

export default Games