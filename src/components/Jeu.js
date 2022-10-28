import react from 'react';
import pic1 from './../photo/1.jpg';
import pic2 from './../photo/2.jpg';
import pic3 from './../photo/3.jpg';
import pic4 from './../photo/4.jpg';
import pic5 from './../photo/5.jpg';
import pic6 from './../photo/6.jpg';

class Jeu extends react.Component {
	constructor(props) {
		
		super(props);
        Jeu.Photos = [
			pic1,
			pic2,
			pic3,
			pic4,
			pic5,
			pic6
		];
	
		this.state = {
			compteur: 0,
			nombreCache: props.nombreCache,
			nombreGenere: null,
		};
	}
	jouer() {
		this.setState({
			compteur: this.state.compteur + 1,
			nombreGenere: Math.floor(Math.random() * 6) + 1,
		});
	}
	changerNombreC(e) {
		this.setState({ nombreCache: e.target.value });
	}

	Initializer(props) {
		this.setState({
			compteur: 0,
			nombreCache: this.props.nombreCache,
			nombreGenere: null,
		});
	}

	render() {
		const valeur1 = this.state.nombreCache;
		const valeur2 = this.state.nombreGenere;
		const conpteurV = this.state.compteur;
        const Photo = Jeu.Photos ;
		return (
			<div>
				<h3>
					nombreCache{' '}
					{/* <input
						type="text"
						placeholder="Taper une nouvelle couleur"
						onChange={(e) => this.changerNombreC(e)}
					/> */}
					: {this.state.nombreCache}{' '}
				</h3>
				<h3>nombre d'essai : {this.state.compteur}</h3>
				<div  > <b  >Aléaratoire géneré : {this.state.nombreGenere}</b>  <img style={{ width: '100px'  }} src={Photo[valeur2-1]} alt="profil" /></div>
				
				{/* Photo : <img  style={{ width: '100px'  }} src={Photo[valeur2-1]} alt="profil" /> */}
				
				<h2 style={{ color: 'red' }}>
					{valeur1 === valeur2 ? 'Vous avez gagné' : ''}
				</h2>
				<button
					onClick={() => this.jouer()}
					disabled={conpteurV === 0 ? true : false}
				>
					Genrer
				</button>
				<button
					style={{ marginLeft: '20px' }}
					onClick={() => this.jouer()}
					disabled={conpteurV != 0 ? true : false}
				>
					Jouer
				</button>
				<br></br>
				<br></br>{' '}
				<button onClick={() => this.Initializer()}>Initializer</button>
			</div>
		);
	}
}
export default Jeu;
