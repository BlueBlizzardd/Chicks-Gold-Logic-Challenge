import { Step } from "./App";

export default function StepList({ steps }: { steps: Array<Step> }) {
    return (
        <>
            <h1 className="heading">Solution</h1>
            {steps.length > 0 ?
                (
                    <ol>
                        {steps.map((step, index) => <li key={index + 1}>Jug 1 has {step[0]}L, Jug 2 has {step[1]}L.</li>)}
                    </ol>
                ) :
                (<div>This problem has no solution.</div>)
            }
        </>
    )
}