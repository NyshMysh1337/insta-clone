import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function UserBage({avatarUrl, nickName, id}) {

    const navigate = useNavigate()

    const onUserBageClick = () => {
        navigate(`/${id}`)
    }

  return (
    <div className='cnUserBageRoot' onClick={onUserBageClick}>
        {avatarUrl ? <img src={avatarUrl} alt='logo' className='cnUserBageAvatar'/> : <div className='cnUserBagePlaceholder'/>}
        <span className='cnUserBageNick'>{nickName}</span>
    </div>
  )
}
