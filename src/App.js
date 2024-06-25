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
        <input
          type="text"
          name="status"
          value={contactInfo.status}
          onChange={handleChange}
          placeholder="Status"
        />
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="imageId"
          value={contactInfo.imageId}
          onChange={handleChange}
          placeholder="Image ID"
        />
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