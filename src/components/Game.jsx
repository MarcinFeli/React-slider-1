export default function Game({ name, price, level, sold }) {
	return (
		<>
			<div>
				{name} {price} {sold ? ' Sold out' : ''}
			</div>
		</>
	);
}
