import styles from "../styles";

const Meal = (props) => {
    const product = props.product;
    return (
        <div style={styles.menu}>
            <img style={styles.menuImages} src={product.image} alt={product.name}/>
            <h3 style={styles.row}>{product.name}</h3>
            <p style={styles.row}>Price: {product.price}</p>
         </div>
    );
};

export default Meal;