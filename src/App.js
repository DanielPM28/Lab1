import "./App.css";
import Perfil from "./Componentes/Perfil";

function App() {
  return (
    <div className="App">
      <div className="contenedor principal">
        <h1>Mis Bandas Favoritas</h1>
        <Perfil
          nombre="Linkin Park"
          pais="EE.UU"
          imagen="LinkinPark"
          genero="Nu metal, Hard Rock"
          origen=" Agoura Hills, California"
          perfil="Linkin Park es una banda estadounidense de rock alternativo procedente de Agoura Hills, California formada en 1996. Integrada por Mike Shinoda, Dave Farrell, Joe Hahn, Brad Delson, Rob Bourdon y Chester Bennington, este último como voz principal."
        />
        <Perfil
          nombre="Gorillaz"
          pais="Reino unido"
          imagen="gorillaz"
          genero="Rock alternativo"
          origen="Londres"
          perfil="Gorillaz es una banda virtual inglesa creada en 1998 por Damon Albarn y Jamie Hewlett. La banda está compuesta por cuatro miembros ficticios: 2-D, Noodle, Murdoc Niccals y Russel Hobbs."
        />
        <Perfil
          nombre="Guns N´ Roses"
          pais="EE.UU"
          imagen="GnR"
          genero="Hard Rock"
          origen="Los Ángeles, California"
          perfil="Guns N' Roses es una banda estadounidense de hard rock formada en Hollywood, Los Ángeles, en la zona de Sunset Strip, en 1985. El grupo musical fue fundado por el vocalista Axl Rose y el guitarrista Izzy Stradlinr"
        />
      </div>
    </div>
  );
}

export default App;
