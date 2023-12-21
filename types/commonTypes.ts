export type contactTypes = {
    name: string,
    fatherName: string,
    userName:string,
    email: string,
    phone: number,
    cnic:number,
    city:string,
    country:string,
    message: string

}
export type InputTypes = {
    title: string;
    value: string |number;
    type: "text" | "number" | "email"
    placeHolder:string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TextAreaTypes={
    title: string;
    value: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export type onChangeEventType = {
    target: { value: string, name: string }
}