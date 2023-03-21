import { useEffect, useState } from "react";


const Lesson = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	useEffect(() => {
		const id = setInterval(() => {
			setCount(c => c + step);
		}, 0.1000);
		return () => clearInterval(id);
	}, [step]);

	return (
		<>
			<h2>Сторонние уроки</h2>
			<h1>{count}</h1>
			<input value={step} onChange={e => setStep(Number(e.target.value))} />
		</>
	);
};

export default Lesson;