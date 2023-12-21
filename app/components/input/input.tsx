import { InputTypes } from "@/types/commonTypes";


export default function Input(props: InputTypes) {
    return (
        <>
            <div>
                <label htmlFor={props.title} className="block text-lg font-bold text-gray-600">
                    {props.placeHolder}
                </label>
                <input
                    value={props.value}
                    type={props.type}
                    id={props.title}
                    name={props.title}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder={`Enter Your ${props.placeHolder}`}
                    onChange={props.onChangeHandler}
                    required
                />
            </div>
        </>
    )
}

{/* <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Name
    </label>
    <input
        value={contactInfo.name}
        onChange={onChangeHandler}
        type="text"
        id="name"
        name="name"
        className="w-full px-3 py-2 border rounded-md"
        required
/> */}