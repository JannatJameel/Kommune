import products from "./products";
import styles from "./styles";

function App() {
  const productsList = products.map((product) => (
    <div style={styles.menu}>
      <img style={styles.menuImages} src={product.image} alt={product.name}/>
      <h3 style={styles.row}>{product.name}</h3>
      <p style={styles.row}>Price: {product.price}</p>
    </div>
  ));

  return (
    <div>
      <h1 style={styles.title}>KOMMUNE</h1>
      <p style={styles.subtitle}>A social dining experience.</p>
      <img style={styles.image} src="images/kommune.jpg" alt="Kommune Dining Hall"/>
      <div style={styles.row}> {productsList}</div>
    </div>
  );
}

export default App;
