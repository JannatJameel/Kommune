import styles from "../styles";

const Home = () => {
    return (
        <div>
            <h1 style={styles.title}>KOMMUNE</h1>
            <p style={styles.subtitle}>A social dining experience.</p>
            <img style={styles.image} src="https://rabda2.s3.amazonaws.com/images/images/55553/large/37b4391.jpg" alt="Kommune Dining Hall"/>
        </div>
    );
};

export default Home;