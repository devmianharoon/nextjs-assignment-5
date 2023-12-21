import { TextAreaTypes } from "@/types/commonTypes";


export default function TextArea(props: TextAreaTypes) {
    return (
        <>
            <div className="col-span-2">
                <label htmlFor={props.title} className="block text-lg font-bold text-gray-600">
                    Message 
                </label>
                <textarea
                    onChange={props.onChangeHandler}
                    value={props.value}
                    id={props.title}
                    name={props.title}
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Start Writing Here...."
                    required
                ></textarea>
            </div>
        </>
    )
}
