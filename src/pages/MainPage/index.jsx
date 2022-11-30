import React from 'react'
import Layout from '../../components/Layout'
import InfinityScroll from 'react-infinite-scroll-component'
import DetailedCard from '../../components/DetailedCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPhotos } from '../../redux/actions/photos'
import {Oval} from 'react-loader-spinner'
import './styles.css' 
import { useState } from 'react'

export default function MainPage() {
  const photos = useSelector(state => state.photos.photos)
  const loading = useSelector(state => state.photos.isPhotosLoading)
  const total = useSelector(state => state.photos.totalPhotos)
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)


  const nextHandler = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    dispatch(getPhotos(page))
  }, [dispatch, page])

  return (
    <Layout nickName='Ignat' id={1}>
      <div className='cnMainPageRoot'>
            {loading ? <div>
              <Oval className='cnMainLoaderContainer' color='#000BFF' height={15} width={15}/>
            </div> : <InfinityScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={(<div>
              <Oval className='cnMainLoaderContainer' color='#000BFF' height={15} width={15}/>
            </div>)}
            endMessage={
              <p>Thats all</p>
            }
          >
            {
               photos.map((el) => {
                return ( <DetailedCard
                className='cnMainPageCard'
                key={el.id}
                nickName={el.author.nickname}
                avatarUrl={el.author.avatarUrl}
                  id={el.author.id}
                   likes={el.likes.length}
                    comments={el.comments}
                     isLikes={true}
                      userId={1}
                      imgUrl={el.imgUrl}
                     />)
              })
            }
          </InfinityScroll>}

          
        
           </div>
      
    </Layout>   
  )
}
