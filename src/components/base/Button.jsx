export default function Button({
    className,
    children,
    click=()=>{}
}) {
    return (
        <button className={`border border-solid rounded-xl p-2 text-nowrap ${className}`} onClick={click}>
            {children}
        </button>
    )
}