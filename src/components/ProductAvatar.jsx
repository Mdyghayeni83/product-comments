export default function ProductAvatar({
    name,
    src
}) {
    return (
        <div className="flex items-center gap-2">
            <img src={src} alt={name} className="rounded-full w-12 h-12 object-cover border border-solid botder-[#D7D7D7]" />
            <div>
                <p className="text-lg">معرفی محصول</p>
                <h5 className="pt-1">
                    {name}
                </h5>
            </div>
        </div>
    )
}