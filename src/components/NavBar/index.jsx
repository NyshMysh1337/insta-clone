import React from 'react'
import UserBage from '../UserBage'
import './styles.css'

export default function NavBar({avatarUrl, nickName, id}) {
  return (
    <div className='cnNavBarRoot'>
        <div className='cnNavBarWrapper'>
            <span>Rugram</span>
            <UserBage nickName={nickName} avatarUrl={avatarUrl} id={id}/>
        </div>
    </div>
  )
}
