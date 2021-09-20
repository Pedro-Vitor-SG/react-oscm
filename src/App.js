import ImageDesktop from "./assets/pattern-background-desktop.svg";
import ImageMobile from "./assets/pattern-background-mobile.svg";
import Main from "./components/Main";
function App() {
  const px = window.innerWidth;

  return (
    <div className="App">
      <img
        className={px > 650 ? 'image imageDesktop ' : 'image imageMobile'}
        src={px > 650 ? ImageDesktop : ImageMobile}
        alt="imagem de fundo"
      />
      <Main />
    </div>
  );
}

export default App;
