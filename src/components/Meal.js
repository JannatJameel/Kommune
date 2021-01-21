import {MealsWrapper} from "../styles";

const Meal = (props) => {
    const product = props.product;
    return (
        <MealsWrapper>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
         </MealsWrapper>
    );
};

export default Meal;