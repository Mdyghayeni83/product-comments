import { _all_media } from "../_mock/_comments";
import Picture from "./Picture";
import Video from "./Video";

export default function PostedPicturesSlider({
    filters
}) {
    return (
        <div className="flex max-w-full gap-3 py-6 overflow-auto pr-4 no-scrollbar">
            {
                _all_media.map((media)=>(
                    media.type === 'image' ? (
                        filters.includes('image') && <Picture src={media.url} />
                    ) : (
                        filters.includes('video') && <Video src={media.url} />
                    )
                ))
            }
        </div>
    )
}