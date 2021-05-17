import logo from "./logo.svg";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Contenedores from "./components/Contenedores";

//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  //https://picsum.photos/200/300
  return (
    <>
      <div className="App">
        <div key="1">
          <p style={{ color: "red", fontSize: 40, fontWeight: "bolder" }}>
            Hola
          </p>
          <div></div>
        </div>

        <div>
          <h1>Pagina de Turismo en Ecuador</h1>
          <p>
            ARTICLE BY AWWWARDS IN WEB DESIGN - OCTOBER 14 - SELECT LANGUAGES{" "}
          </p>
          <div>
            <img
              className="logoRedes"
              src="https://firebasestorage.googleapis.com/v0/b/cursoreact-c104f.appspot.com/o/logos%2Ffacebook.png?alt=media&token=59f3bc9b-73cd-45ca-949b-ec9ff293fb00"
            />
            <img
              className="logoRedes"
              src="https://firebasestorage.googleapis.com/v0/b/cursoreact-c104f.appspot.com/o/logos%2Fgorjeo.png?alt=media&token=fcbca08f-83d7-4135-ada7-69d2b4307216"
            />
            <img
              className="logoRedes"
              src="https://firebasestorage.googleapis.com/v0/b/cursoreact-c104f.appspot.com/o/logos%2Flogotipo-de-instagram.png?alt=media&token=53cb6b85-c158-4203-a03f-06c6542160ff"
            />
            <img
              className="logoRedes"
              src="https://firebasestorage.googleapis.com/v0/b/cursoreact-c104f.appspot.com/o/logos%2Fpinterest.png?alt=media&token=e555fce9-f398-4d50-9613-5160d4096998"
            />
          </div>
          <p className="texto">
            I know the summer is over, but why not plan some vacations? We’ve
            selected 20 of the most dynamic<b> tourism websites </b> to help you
            plan your next great trip. Today let's take a look at the tourism
            sites from around the world.
          </p>
        </div>
        <hr></hr>
        <div className="flexBox">
          <Contenedores />

          <Contenedores />

          <Contenedores />

          <Contenedores />
        </div>
      </div>
    </>
  );
}

export default App;
