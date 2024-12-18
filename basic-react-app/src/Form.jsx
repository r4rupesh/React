function onsubmitHandler(event){
     event.preventDefault();
    console.log("Form was submitted");
}

export default function Form(){
    return(
        <div>
            <form onSubmit={onsubmitHandler}>
                <input type="text" />
                <button>submit</button>
            </form>
        </div>
    );
}