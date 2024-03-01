import Welcome from './Welcome';

export default function ConditionalComponent() {
	let mess;
	const display = false;
	return <div>
        The messages is {display ? 'Prawda': 'Fałsz'}
    </div>;
}
