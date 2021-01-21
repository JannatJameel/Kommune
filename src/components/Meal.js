import styles from "../styles";

const Meal = (props) => {
    return (
        <div style={styles.menu}>
            <img style={styles.menuImages} src={props.product.image} alt={props.product.name}/>
            <h3 style={styles.row}>{props.product.name}</h3>
            <p style={styles.row}>Price: {props.product.price}</p>
         </div>
    );
};

export default Meal;