import ViewRow from "./ViewRow";
import { _views } from '../../_mock/_comments'
import AllViews from "./AllViews";
import calcRate from "../../utils/calcRate";

export default function ViewsBox() {
    let allViews = 0
    const rows = Object.entries(_views).reverse().map((value, index)=>{
        allViews += value[1]
        return {
            starsNumber: index+1,
            views: value[1]
        }
    })
    const rate = calcRate(_views, allViews)
    return (
        <div className="flex justify-between items-center gap-4 pr-6 pl-8 py-6">
            <div className="w-4/12 ">
                <AllViews rate={rate} allViews={allViews} />
            </div>
            <div className="w-8/12 flex flex-col gap-1">
                {
                    rows.reverse().map((row, index)=>(
                        <ViewRow allViews={allViews} views={row.views} starsNumber={row.starsNumber} key={index} />
                    ))
                }
            </div>
        </div>
    )
}