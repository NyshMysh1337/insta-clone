import React from 'react'
import './styles.css'

export default function Comments({nickname, text}) {
  return (
    <div className='cnCommentRoot'>
        <span className='cnCommentName'>{nickname}:</span>
        <span className='cnCommentText'>{text}</span>
    </div>
  )
}
