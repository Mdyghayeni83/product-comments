import StarIcon from '../../assets/icons/star_view.png'
import StarNoneIcon from '../../assets/icons/star_view_none.png'

export default function Star({
    active,
    big
}) {
    if (big & !active) {
        return (
            <img src={StarNoneIcon} alt="" className='w-[0.9rem] h-[0.9rem] object-cover' />
        )
    }
    return (
        <img src={StarIcon} alt="" className={`${active ? 'opacity-100' : 'opacity-25'} ${big ? 'w-[0.9rem] h-[0.9rem]' : 'w-[0.6rem] h-[0.6rem]'} object-cover`} />
    )
}