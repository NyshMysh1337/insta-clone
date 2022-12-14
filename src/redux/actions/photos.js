import { api } from "../../api"
import { getPhotosFailed, getPhotosStarted, getPhotosSuccess, setTotalPhotos } from "../actionCreator/photos"

export const getPhotos = (page = 1) => {
    return async (dispatch,getState) => {
        try {
            const store = getState()
            if (page === 1) {
                dispatch(getPhotosStarted)
            }
            
            const res = await api.photos.getPhotos({
                params: {
                    _page: page,
                    _limit: 5,
                }
            })

            if (page === 1) {
                dispatch(setTotalPhotos(res.headers["x-total-count"]))
                dispatch(getPhotosSuccess([...res.data]))
            } else {
                dispatch(getPhotosSuccess([...store.photos.photos, ...res.data]))
            }

            
        } catch (error) {
            dispatch(getPhotosFailed(error))
        }
    }
}