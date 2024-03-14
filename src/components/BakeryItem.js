// TODO: create a component that displays a single bakery item
export default function BakeryItems(props) {

    return (
      <div className="BakeryItems">
        <img alt="image of bakery item" src={props.image}/>
        <h1>{props.name}</h1> 
      </div>
    );
  }