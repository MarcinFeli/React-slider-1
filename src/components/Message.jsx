export default function Message(){

    function handleClick() {
        console.log('Clicked');
    }
    return <div>
        <button onClick={handleClick} className="m-10 p-4 border-2 border-black shadow-lg ">Click here to get a message</button>
    </div>
}