import style from "../styles/pages/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  return (
    <div className={style.home}>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
