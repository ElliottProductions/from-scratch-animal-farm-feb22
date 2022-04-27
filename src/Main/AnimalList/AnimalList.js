import Animal from './Animal/Animal.js';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map(animal => 
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
        />)
      }
    </div>
  );
}
  