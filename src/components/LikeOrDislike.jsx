import ActiveLike from '../assets/icons/like_active.png'
import ActiveDislike from '../assets/icons/dislike_active.png'
import Like from '../assets/icons/like.png'
import Dislike from '../assets/icons/dislike.png'
import { useState } from 'react'
export default function LikeOrDislike({
    likes,
    disLikes,
}) {
    const [likeStatus, updataStatus] = useState(-1)
    const doLikeOrDislike = (type) => {
        if (type === 'like') {
            likeStatus === 1 ? updataStatus(-1) : updataStatus(1)
        } else {
            likeStatus === 0 ? updataStatus(-1) : updataStatus(0)
        }
    }
    return (
        <div className="flex items-center gap-6">
            <button className="cursor-pointer flex items-center gap-2 text-[#939393]" onClick={() => doLikeOrDislike('like')}>
                {likeStatus === 1 ? likes + 1 : likes}
                <img src={likeStatus === 1 ? ActiveLike : Like} alt="" className="w-5 h-5 object-cover" />
            </button>
            <button className="cursor-pointer flex items-center gap-2 text-[#939393]" onClick={() => doLikeOrDislike('dislike')}>
                {likeStatus === 0 ? disLikes + 1 : disLikes}
                <img src={likeStatus === 0 ? ActiveDislike : Dislike} alt="" className="w-5 h-5 object-cover" />
            </button>
        </div>
    )
}