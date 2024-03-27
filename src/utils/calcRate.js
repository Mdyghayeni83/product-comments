export default function calcRate(veiws, allViews) {
    let rate = 0
    Object.entries(veiws).reverse().map((value, index)=>{
        rate += value[1] * (index+1)
        return null
    })
    return (rate/allViews).toFixed(1)
}