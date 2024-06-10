import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets.js'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem.jsx'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
{albumsData.map((item,indx)=>(<AlbumItem key={indx} id={item.id} image={item.image} name={item.name} desc={item.desc}/>))}
      </div>
    </div>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
      <div className='flex overflow-auto'>
{songsData.map((item,indx)=>(<SongItem key={indx} id={item.id} image={item.image} name={item.name} desc={item.desc}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome