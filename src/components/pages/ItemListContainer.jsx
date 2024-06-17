import { ProductCard } from "../common/ProductCard"

const ItemListContainer = () =>{
    return(
        <div>
            <h2>Aca van los productos</h2>
            <ProductCard name= {"Nike 360"} description= {"Best shoes ever"} price={320}  />
            <ProductCard name= {"Nike AirForce"} description= {"The cheapest shoes"} price={160}  />
            <ProductCard name= {"Nike AirMax"} description= {"Black and white shoes"} price={245}  />
        </div>
    )
}

export default ItemListContainer