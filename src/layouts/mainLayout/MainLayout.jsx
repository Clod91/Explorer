import style from "./index.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <div className={style.main_layout}>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
