import { useState } from "react";
import FilterCommentsBox from "./FilterCommentsBox";
import Line from "./Line";
import { _product_comments } from "../_mock/_comments";
import Comment from "./Comment";

export default function CommentsBox() {
    const [filters, setFilter] = useState(['all'])
    return (
        <div className="">
            <FilterCommentsBox filters={filters} setFilter={setFilter} />
            <Line />
            {
                _product_comments.map((comment, index) => (
                    <template key={index}>
                        <Comment data={comment} />
                        <Line />
                    </template>
                ))
            }
        </div>
    )
}