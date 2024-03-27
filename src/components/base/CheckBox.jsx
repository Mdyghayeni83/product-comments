export default function CheckBox({
    children,
    value,
    values = [],
    setValue,
    icon,
}) {
    function addOrRemoveItem() {
        if (values.includes(value)) {
            setValue(arr => arr.filter(val => val !== value))
        } else {
            setValue(arr => [...arr, value])
        }
    }
    return (
        <button className={`flex gap-1 justify-center items-center border border-solid p-2 rounded-3xl transition-all duration-300 text-nowrap
            ${values.includes(value) ? 'border-[#FCBC3A] text-[#FCBC3A] bg-[#fcbb3a14]' :
                'border-transparent text-black bg-[#0000000A]'}`}
            onClick={addOrRemoveItem}
        >
            {icon}
            {children}
        </button>
    )
}