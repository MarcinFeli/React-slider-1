import Game from './Game';

export default function Games() {
	const games = [
		{ name: 'The Quest', price: 1.99, level: 'easy', sold: true },
		{ name: 'Galactic Warfare', price: 22.99, level: 'easy', sold: false },
		{ name: 'Puzzle Odyssey', price: 11.99, level: 'hard', sold: true },
		{ name: 'Street Racers', price: 65.99, level: 'easy', sold: false },
		{ name: 'Realm of Legends', price: 32.99, level: 'medium', sold: true },
	];
	return (
		<div>
			{games.map((game, index) => (
				<div className='text-3xl mb-10' key={index}>
					<Game name={game.name} price={game.price} level={game.level} sold={game.sold} />
				</div>
			))}
		</div>
	);
}
