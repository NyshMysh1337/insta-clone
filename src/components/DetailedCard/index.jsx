import React from 'react'
import UserBage from '../UserBage'
import './styles.css'
import Comments from '../Comments'
import { useState} from 'react'
import cn from 'classnames'
import { nanoid } from 'nanoid'

export default function DetailedCard({
    nickName,
    avatarUrl,
    id,
    imgUrl,
    likes,
    isLikes,
    comments,
    className
}) {

const [isCommentsShow, setIsCommentsShow] = useState(false)


const renderComments = () => {
    if (comments.length > 2 && !isCommentsShow) {
        const commentsCopy = [...comments]
        const commentsForRender = commentsCopy.splice(comments.length - 2, 2)
        
        return (
            <>
                <span className='cnDetailCardCommentCard' onClick={() => setIsCommentsShow(true)}>{`Показать ещё ${comments.length - commentsForRender.length} комментариев`}</span>
                {
                    commentsForRender.map((el) => {
                        return <Comments key={nanoid()} {...el}/>
                    })
                }
            </>
        )
    }

    return comments.map((el) => {
        return <Comments key={nanoid()} {...el}/>
    })
}

  return (
    <div className={cn('cnDetailCardRoot', className)}>
        <div className='cnDetailCardHeader'>
            <UserBage nickName={nickName} avatarUrl={avatarUrl} id={id}/>
        </div>
        <div>
            <img src={imgUrl} alt='img' className='cnDetailCardImg'/>
        </div>
        <div className='cnDetailCardButtons'>
            <i className={`${isLikes ? 'fas' : 'far'} fa-heart cnDetailCardLikeIcon`}></i>
            <i className="fa-solid fa-comment cnDetailCardCommentIcon"></i>
        </div>
        <div className='cnDetailCardLikes'>
            {`Оценили ${likes} человек`}
        </div>
            <div className='cnDetailCardComments'>
              {
                renderComments()
              }
            </div>
            <textarea className='cnDetailCardTextArea'/>
    </div>
  )
}
