import { FormEvent, useState } from 'react'
import StepList from './StepList';
import Input from './ui/Input/Input';
import Button from './ui/Button/Button';
import pick from './algorithm/mathematical';

export type Step = [number, number];

export default function App() {
  const [steps, setSteps] = useState<Step[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSteps(pick(Number(data.get('jug1') as string), Number(data.get('jug2') as string), Number(data.get('amount'))));
  }

  return (
    <div className='container flex flex-column'>
      <h1 className='heading'>Water Jug Problem</h1>
      <div>This program is meant to calculate the Water Jug puzzle through
        the least amount of steps possible.
      </div>
      <form className='form flex flex-column' onSubmit={handleSubmit}>
        <Input id='jug1' name='jug1' />
        <Input id='jug2' name='jug2' />
        <Input id='amount' name='amount' />
        <Button>Calculate</Button>
      </form>
      <StepList steps={steps} />
    </div>
  )
}
