import './../Style/App.css';
import React from 'react';
import Stagiaire from './Stagiaire';
import { listeStagiaire } from '../data/listeStagiaires';
// const root = document.getElementById('root');
// ReactDOM.render(
// 	<h1>Hello Goaat !</h1>,
// 	document.getElementById('root')
// );
// function Entete() {
// 	return <h2 className="style1">Entete</h2>;
// }
// function Corps() {
// 	return <h2 className="style2">Corps</h2>;
// }

// class Footer extends React.Component {
// 	render() {
// 		return <div className="style3">Footer </div>;
// 	}
// }

// component
// {/* <Entete/>
//       <Corps/>
//       <Footer/> */}

function App() {
	
	// const modules1 = ['POO', 'React', 'Laravel'] ;
	// const modules2 = ['SQL', 'Back End' , 'Laravel'] ;
	// const modules3 = ['POO', 'Laravel','Mysql'] ;
	return (
		<ul>
			{listeStagiaire.map((element, index) => (
				<li className="UlStyle" key={index}>
					<Stagiaire
						id={element.id}
						nom={element.nom}
						prenom={element.prenom}
						photo={element.photo}
						modules={element.modules}
					/>
				</li>
			))}
		</ul>
	);
}

export default App;
