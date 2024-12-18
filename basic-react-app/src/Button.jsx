function handleClick() {
  console.log("Hello World");
}

function handleHover() {
  console.log("Bye!");
}
function doubleClick(){
    console.log("Double click trigger");
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Clickme</button>
      <p onMouseOver={handleHover}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi
        vitae labore incidunt. Voluptatibus exercitationem ad doloremque
        doloribus consequuntur officiis consectetur quasi, autem odio. Provident
        maiores modi voluptas unde numquam?
      </p>
      <button onDoubleClick={doubleClick}>double click on me</button>
    </div>
  );
}
