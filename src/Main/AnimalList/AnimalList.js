import Animal from './Animal/Animal.js';

export default function AnimalList({ animals }) {
  return (
    <div>
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
  