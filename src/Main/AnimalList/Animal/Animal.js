

export default function Animal(props){
  return (<>
    <img src={`/${props.type}.svg`}></img>
    <p>{props.name}</p>
  </>);
}