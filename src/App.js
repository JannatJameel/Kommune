const styles = {
  title : {color: "black", textAlign: "center"},
  subtitle : {color: "Red", textAlign: "center"}, 
  image : {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
  }
}

function App() {
  return (
    <div>
      <h1 style={styles.title}>KOMMUNE</h1>
      <p style={styles.subtitle}>A social dining experience.</p>
      <img style={styles.image} src="images/kommune.jpg"/>
    </div>
  );
}

export default App;
