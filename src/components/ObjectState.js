import react from 'react';

class State extends react.Component {
	constructor(props) {
		super(props);
		this.state = {
			immatriculation: props.immatriculation,
			color: props.color,
			marque: props.marque,
			model: props.model,
		};
	}
	changerColor() {
		this.setState({
			color: ' Yellow',
		});
	}

	// changer Couleur par input
	changerCouleur(e) {
		this.setState({ color: e.target.value });
	}
	changerModel(e) {
		this.setState({ model: e.target.value });
	}

	changerMarque(e) {
		this.setState({ marque: e.target.value });
	}

	InitializerState() {
		this.setState({
			immatriculation: this.props.immatriculation,
			color: this.props.color,
			marque: this.props.marque,
			model: this.props.model,
		});
	}

	changerBrand() {
		this.setState({
			marque: ' Bugatti',
		});
	}
    changerModelStat() {
		this.setState({
			model: ' 2022',
		});
	}
   
	render() {
		return (
			<div className='Selectioness'>
				<h3>etat immatriculation : {this.state.immatriculation}</h3>
				<h3>
					Nouvelle couleur{' '}
					<input
						type="text"
						placeholder="Taper une nouvelle couleur"
						onChange={(e) => this.changerCouleur(e)}
					/>{' '}
					etat color :{this.state.color}
				</h3>
				<h3>
					Nouvelle marque{' '}
					<input
						type="text"
						placeholder="Taper une nouvelle couleur"
						onChange={(e) => this.changerMarque(e)}
					/>
					etat marque :{this.state.marque}
				</h3>
				<h3>
					Nouvelle Model
					<input
						type="text"
						placeholder="Taper une nouvelle couleur"
						onChange={(e) => this.changerModel(e)}
					/>{' '}
					etat model :{this.state.model}
				</h3>
				<button onClick={() => this.changerColor()}>Change Color</button>
				<br></br> <br></br>
				<button onClick={() => this.changerBrand()}>Change Brand</button>
                <br></br> <br></br>
				<button onClick={() => this.changerModelStat()}>Change Model</button>
				<br></br> <br></br>
				<button onClick={() => this.InitializerState()}>
					Inilializer l'etat de Voiture
				</button>
				<h3>
					##############################################################################
				</h3>
			</div>
		);
	}
}
export default State;
