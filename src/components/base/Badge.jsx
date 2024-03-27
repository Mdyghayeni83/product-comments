export default function Badge({
    children,
    className
}) {
    return (
        <div className={`rounded-lg px-2 py-1 ${className}`}>
            {children}
        </div>
    )
}