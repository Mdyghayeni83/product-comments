export default function ViewRangeLine({
    allViews,
    views,
    className
}) {
    const activeLine = (views / allViews) * 100
    return (
        <div className={`bg-[#0000000A] rounded-2xl h-[5px] overflow-hidden ${className}`}>
            <div className="bg-[#FCBC3A] h-full rounded-2xl" style={{width: `${activeLine}%`}} />
        </div>
    )
}