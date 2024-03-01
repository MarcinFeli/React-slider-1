import Slider from "./components/Slider"

function App() {
	const person = {
		name: 'Rob',
		message: 'Hi Rob!',
		emoji: "😁",
		seatNumbers: [1,2,3,4]
	}
	return (
		<div className='App bg-gray-400'>
			<Slider/>
		</div>
	);
}

export default App;
