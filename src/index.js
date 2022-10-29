import React from 'react';
import ReactDOM from 'react-dom/client';
// import Presentation from './components/presentation.js';
// import Salutation from './components/presentation.js';
// import App from './components/App.js';
// import Voiture from './components/Voiture.js';
import Jeu from './components/Jeu.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const displomes = ["Bac , Licence , Master"];
// const specialite={id:1,nomSpecialite:"Informatique"} ;
// const etat = false;
root.render(
	
	<React.StrictMode>
		<Jeu nombreCache={6} />


		{/* <State
			immatriculation=" 01 A 12893"
			color=" Blue"
			marque=" Ferrari"
			model=" 2019"
		/>  */}
		{/* {
    etat === true ? (
      <Salutation nom="Alaoui" prenom="Kamal">
        <p>Trueee !</p>
        <h3>XXXXXXXXXXXXXXXXXX</h3>
      </Salutation>
    ) : (
      <Salutation nom="Khadija" prenom="Kamal">
        <p>False !</p>
        <h3>YYYYYYYYYYYYYYYYYY</h3>
      </Salutation>
    )} */}
	</React.StrictMode>
);
