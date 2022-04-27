export default function Animal(props){
  return (<>
    <img src={`./AnimalImages/${props.type}.svg`}></img>
    <p>{props.name}</p>
  </>);
}