import React from 'react'
import NavBar from '../NavBar'
import './styles.css'

export default function Layout({nickName, avatarUrl, id, children}) {
  return (
    <div className='cnLayoutRoot'>
        <NavBar nickName={nickName} avatarUrl={avatarUrl} id={id}/>
        <div className='cnLayoutBody'>
            {children}
        </div>
    </div>
  )
}
