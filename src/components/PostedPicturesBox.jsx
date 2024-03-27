import { useState } from "react"
import CheckBox from "../components/base/CheckBox.jsx"
import PostedPicturesSlider from "./PostedPicturesSlider.jsx"

export default function PostedPicturesBox() {
    const [filters, setFilter] = useState(['image', 'video'])
    return (
        <div className="border-t-[8px] border-b-[8px] border-solid border-[#F9F9F9] py-6">
            <div className="flex justify-between items-center px-4">
                <p className="text-lg">
                    عکس ها ارسالی خریداران
                </p>
                <div className="flex gap-2">
                    <CheckBox value="image" setValue={setFilter} values={filters}>عکس</CheckBox>
                    <CheckBox value="video" setValue={setFilter} values={filters}>فیلم</CheckBox>
                </div>
            </div>
            <PostedPicturesSlider filters={filters} />
        </div>
    )
}