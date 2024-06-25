import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/* Les valeurs du nom, de l'image de profil et du statut connecté (représenté par le rond vert, ou rouge) 
devront provenir du composant parent App.jsx. 
-> Tu trouveras des informations sur les props dans la doc en pièce jointe.
-> Tu trouveras des informations sur l'affichage conditionnel en pièce jointe aussi (qui utilise un opérateur ternaire).
Dans le composant App, appelle plusieurs fois ton composant Contact, avec des valeurs de props différentes, 
afin de tester que tout fonctionne correctement. */