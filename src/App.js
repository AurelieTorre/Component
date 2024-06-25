import './App.css';
import React, { useState } from 'react';
import Contact from './components/Contact'

function App() {
  const [contactInfo, setContactInfo] = useState({
    status: "online",
    name: "Julia",
    imageId: "phNgjbJ/photo1"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="App">
      <div>
        <select
          name="status"
          value={contactInfo.status}
          onChange={handleChange}
         >
          <option value="online">En ligne</option>
          <option value="offline">Hors ligne</option>
        </select> 
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <select
          name="imageId"
          value={contactInfo.imageId}
          onChange={handleChange}
        >
          <option value="phNgjbJ/photo1">Photo 1</option>
          <option value="bbzSQ7G/photo2">Photo 2</option>
          <option value="MZhFKKg/photo3">Photo 3</option>
        </select>
      </div>
      <Contact 
        status={contactInfo.status} 
        name={contactInfo.name} 
        imageId={contactInfo.imageId} 
      />
    </div>


  // return (
  //   <div className="App">
  //     <Contact status="online" name="Julia" imageId="phNgjbJ/photo1" />
  //   </div> 
  );
}

export default App;

/* Les valeurs du nom, de l'image de profil et du statut connecté (représenté par le rond vert, ou rouge) 
devront provenir du composant parent App.jsx. 
Dans le composant App, appelle plusieurs fois ton composant Contact, avec des valeurs de props différentes, 
afin de tester que tout fonctionne correctement. */

// <img src="https://i.ibb.co/phNgjbJ/photo1.jpg" alt="photo1" border="0" />
// <img src="https://i.ibb.co/bbzSQ7G/photo2.jpg" alt="photo2" border="0" />
// <img src="https://i.ibb.co/MZhFKKg/photo3.jpg" alt="photo3" border="0" />