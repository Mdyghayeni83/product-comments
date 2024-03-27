import Star from "./Star";
import ViewRangeLine from "./ViewRangeLine";

export default function ViewRow({
    allViews,
    views,
    starsNumber
}) {
    return (
        <div className="flex items-center justify-end gap-2">
            <div className="flex items-center justify-end gap-1">
                {[1, 2, 3, 4, 5].map((number) => (
                    <Star active={number <= starsNumber} key={number} />
                ))}
            </div>
            <ViewRangeLine allViews={allViews} views={views} className="flex-1" />
            <p className="w-8 text-md text-[#2F2F2F]">
                {views}
            </p>
        </div>
    )
}