import styles from "../styles";
import products from "../products"
import Meal from "./Meal";

const Kitchens = () => {
    const productsList = products.map((product) => (
        <Meal key={product.id} product={product} />
    ));

    return (
        <div style={styles.row}> {productsList}</div>
    );
};

export default Kitchens;
