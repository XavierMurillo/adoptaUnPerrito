import "./App.css";
import { Header } from "./components/Header";
import { MyCard } from "./components/MyCard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header titulo={"Adopta un perrito"} />
      <div className="cards">
        <MyCard
          dogImg={
            "https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-black-labrador-dog-dog-breeds-pictures-image_2886141.jpg"
          }
          dogName={"Skippy"}
          dogDesc={"Amigable labrador juguetón y amistoso con las personas"}
          badgeText={"Labrador"}
          badgeColor={"primary"}
        />
        <MyCard
          dogImg={
            "https://www.bunko.pet/__export/1632179417648/sites/debate/img/2021/09/20/pastor_ingles_original_crop1632179380205.jpeg_423682103.jpeg"
          }
          dogName={"Chascas"}
          dogDesc={"Un perro de compañía para toda la familia"}
          badgeText={"Pastor Inglés"}
          badgeColor={"secondary"}
        />
        <MyCard
          dogImg={
            "https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"
          }
          dogName={"Cheddar"}
          dogDesc={"Fiel y servicial perro policia, muy inteligente y astuto"}
          badgeText={"Corgi"}
          badgeColor={"success"}
        />
        <MyCard
          dogImg={
            "https://cdn.britannica.com/77/234477-050-DF90E2ED/Doberman-pinscher-dog.jpg"
          }
          dogName={"Cobra"}
          dogDesc={
            "Tierno y amistoso canino que busca una familia para hacer feliz"
          }
          badgeText={"Doberman"}
          badgeColor={"dark"}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
