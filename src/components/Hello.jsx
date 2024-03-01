
function Hello({person}) {
	return (
		<div>
			<h1>Hello {person.name}!</h1>
			<h1>{person.message}</h1>
			<div>{person.emoji}</div>
			<div>
				{person.seatNumbers.map((seat, index) => {
					<div key={index}>{seat}</div>
				})}
			</div>
		</div>
	);
}

export default Hello;
