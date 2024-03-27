import Play from "../assets/icons/play.png"
export default function Video({
    src
}) {
    return (
        <div className="relative rounded-2xl overflow-hidden min-w-[7rem]">
            <img src={src} alt="" className="min-w-full h-36 object-cover" />
            <div className="bg-[#0000004D] w-full h-full absolute top-0 right-0 flex justify-center items-center">
                <img src={Play} alt="" className="object-cover w-8 h-8 cursor-pointer" />
            </div>
        </div>
    )
}