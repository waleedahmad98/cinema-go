import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Home from '..'

export default function NowShowing({data}) {
  return (
    
    <div className={styles.postergrid}>
      {console.log(data)}
      {data.cinestar.map(p => (
        <div className='card'>
          <Image
            src={`https:${p.PosterImageUrl}`}
            alt={p.ImageId}
            width={250}
            height={250}
          />
        </div>
      ))}
    </div>

  )
}
