export default function Picture({
    src,
    className
}) {
    return (
        <div className={`relative min-w-[7rem] h-36 ${className}`}>
            <img src={src} alt="" className="rounded-2xl w-full h-full object-cover" />
        </div>
    )
}