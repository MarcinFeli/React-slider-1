import { useState } from 'react';

export default function Counter() {
	const [value, setValue] = useState(0);
    function handleClick() {
        setValue(value + 1)
    }
	return (
		<div>
			<div>Count value is: {value}</div>
			<button onClick={handleClick} className='border-2'>
				Add value
			</button>
			<button onClick={handleClick} className='border-2'>
				Decrement value
			</button>
		</div>
	);
}
