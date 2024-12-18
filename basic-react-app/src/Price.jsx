export default function Price({oldPrice,newPrice}){
    
    return (
        <div style={{backgroundColor:"#e0c367", height:"px", borderBottomLeftRadius:"9px", borderBottomRightRadius:"9px"}}>
            <span style={{textDecorationLine:"line-through"}}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
    )
}