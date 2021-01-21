import products from "../products"
import Meal from "./Meal";
import {Row} from "../styles";


const Kitchens = () => {
    const productsList = products.map((product) => (
        <Meal key={product.id} product={product}/>
    ));

    return (
        <Row>{productsList}</Row>
    );
};

export default Kitchens;
