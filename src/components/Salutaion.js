import React from 'react';
class Salutation extends React.Component {
	Afficher() {
		alert(`Bonjour ${this.props.nom} ${this.props.prenom}`);
	}
	render() {
		return (
			<div>
				<h2>
					{this.props.nom} {this.props.prenom}
				</h2>
				{this.props.children}
				<button onClick={() => this.afficher()}></button>
			</div>
		);
	}
}
export default Salutation;
