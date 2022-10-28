import react from 'react' 
class Voiture extends react.Component
{
    constructor(props){
        super(props);
        this.immatriculation =props.immatriculation;
        this.color = props.color;
        this.marque =props.marque;
        this.model = props.model;

    }
    render(){
        return(
            <div>
                <h3>immatriculation :{this.immatriculation}</h3>
                <h3> color :{this.color}</h3>
                <h3>{this.marque}</h3>
                <h3>{this.model}</h3>
                <h3>###########################################</h3>
            </div>
        )
    }
}
export default Voiture ;