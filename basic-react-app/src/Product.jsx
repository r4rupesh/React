import  "./Product.css"
import Price from "./Price";
function Product({title,description,idx}){
    let oldPrices = ["12,495","13,300","11000","3000"];
    let newPrices = ["1100","2000","1200","2000"];
    let descriptions = [["8000 DPI","intutive surface"],["Designed for ipad pro","intutive surface"],["Wireless","Designed for ipad pro"],["Wireless","Designed for ipad pro"]];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
             <Price oldPrice = {oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    )
}
export default Product;