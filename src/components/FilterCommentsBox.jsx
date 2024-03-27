import CheckBox from "../components/base/CheckBox.jsx"
import Star from "./productViews/Star.jsx"

const all_filters = [
    {
        name: 'همه',
        value: 'all',
        icon: null
    },
    {
        name: 'عکس دار',
        value: 'withPicture',
        icon: null
    },
    {
        name: 'نظرات مثبت',
        value: 'positiveComments',
        icon: null
    },
    {
        name: 'نظرات منفی',
        value: 'negativeComments',
        icon: null
    },
    {
        name: '5',
        value: '5',
        icon: <Star active />
    },
]

export default function FilterCommentsBox({
    filters, 
    setFilter
}) {
    return (
        <div className="py-6 px-4">
            <div className="flex justify-between items-center">
                <p className="text-lg">
                    عکس ها ارسالی خریداران
                </p>
            </div>
            <div className="flex items-center justify-start gap-1 pt-6">
                {
                    all_filters.map((filter) => (
                        <CheckBox value={filter.value} values={filters} setValue={setFilter} icon={filter.icon} key={filter.value}>
                            {filter.name}
                        </CheckBox>
                    ))
                }
            </div>
        </div>
    )
}