import ActiveLike from '../assets/icons/like_active.png'
import ActiveDislike from '../assets/icons/dislike_active.png'
export default function Suggestion({
    isSuggested=true
}) {
    return (
        <div className="flex items-center gap-2">
            <img src={isSuggested ? ActiveLike : ActiveDislike} alt="" className="w-5 h-5 object-cover" />
            <p className={`text-lg ${isSuggested ? 'text-[#00B31D]' : 'text-[#ED2E7E]'}`}>
                {
                    isSuggested ? "خرید محصول را پیشنهاد میکنم" : "خرید محصول را پیشنهاد نمیکنم"
                }
            </p>
        </div>
    )
}