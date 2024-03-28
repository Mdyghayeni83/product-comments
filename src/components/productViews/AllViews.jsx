import Star from "./Star";

export default function AllViews({
    rate,
    allViews
}) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">
                {rate}
            </p>
            <div className="flex items-center gap-1 pt-1">
                {
                    [1, 2, 3, 4, 5].map((number)=>(
                        <Star big active={rate >= number} key={number} />
                    ))
                }
            </div>
            <p className="text-lg text-[#2F2F2F] pt-2">
                {allViews} نظر
            </p>
        </div>
    )
}