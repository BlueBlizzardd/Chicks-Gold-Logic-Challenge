import input from './Input.module.css';

type InputProps = {
    id: string,
    name: string,
    placeholder?: string,
}

export default function Input({ id, name, placeholder = 'Please input a number' }: InputProps) {
    return (
        <>
            <label className={`${input.label}`} htmlFor={id}>{name}</label>
            <input className={`${input.box}`} id={id} name={name} type="number" min='0' max='1000' placeholder={placeholder} />
        </>
    )
}