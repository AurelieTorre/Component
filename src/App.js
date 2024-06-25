import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact title="Hello World" content="This is a simple React component." />
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