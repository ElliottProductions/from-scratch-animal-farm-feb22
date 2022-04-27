import './Animal.css';

export default function Animal(props){
  return (<div className="animal-card">
    <img alt={props.type} src={`/${props.type}.svg`}></img>
    <p>{props.name}</p>
  </div>);
}