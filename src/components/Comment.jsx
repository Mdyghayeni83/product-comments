import NoProfile from '../assets/icons/no_profile.png'
import LikeOrDislike from './LikeOrDislike';
import Picture from './Picture';
import Suggestion from './Suggestion';
import Badge from './base/Badge'
import Star from './productViews/Star'

export default function Comment({
    data
}) {
    return (
        <div className="pb-4 pt-8 px-4">
            <p className="text-lg">
                {data.name}
            </p>
            <div className="flex items-center justify-between pt-3">
                <div className="flex items-center gap-2">
                    <img src={NoProfile} alt="" className="w-5 h-5" />
                    <p className="text-[#8F8F8F] text-[1rem]">
                        {data.author}
                    </p>
                    <Badge className="text-[#168FDF9E] bg-[#168FDF14]">
                        {data.role}
                    </Badge>
                </div>
                <p className="text-[#B7B7B7]">
                    {data.time}
                </p>
            </div>
            <div className="flex items-center gap-1 px-8 pt-2 pb-4">
                {
                    Array(data.stars_number).fill(0).map((_, index) => (
                        <Star active key={index}/>
                    ))
                }
            </div>
            <Suggestion isSuggested={data.is_suggested} />
            <div className="flex items-center gap-10 pt-5">
                <div className="flex items-center gap-2 text-[#B7B7B7]">
                    رنگ:
                    <div className="flex items-center gap-2 text-black">
                        {data.color.name}
                        <div className="w-5 h-5 rounded-full border border-solid border-[#C8C8C8]"
                            style={{ background: data.color.code }}
                        ></div>
                    </div>
                </div>
            </div>
            <p className="pt-4">
                {data.description}
            </p>
            <div className="flex items-center gap-4 pt-5">
                {
                    data.images.map((image, index) => (
                        <Picture className="w-36 h-40" src={image} key={index} />
                    ))
                }
            </div>
            <div className="flex items-center justify-between pt-4">
                <p className="text-[#939393]">
                    آیا این نظر برای شما مفید بود؟
                </p>
                <LikeOrDislike likes={data.likes} disLikes={data.dislikes} />
            </div>
        </div>
    )
}