import styles from './app.module.css';
import Aside from './components/aside';
import Footer from './components/footer';
import Header from './components/header';
import Origamis from './components/origamis';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
      <Footer />
    </div>
  );
}

export default App;
