import Product from "./Product";
import "./ProductTab.css"
 function ProductTab(){
    let style = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        
    }
    return (
        <div style={style}>
            
        <Product title="Logictech MX Master " idx={0} />
        <Product title="Apple Pencil (2nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-transformer" idx={2} />
        <Product title="Petronics Toad 23" idx={3} />
       
        </div>
    );
}
export default ProductTab;