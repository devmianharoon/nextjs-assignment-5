"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/commonTypes"
import Input from "./input/input"
import TextArea from "./textArea/textArea"




export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    fatherName: '',
    userName: '',
    email: "",
    cnic: 0,
    city: '',
    country: '',
    phone: 0,
    message: "",
  })
  const [errors, setError] = useState<string[]>([])
  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(20),
    fatherName: yup.string().required().min(5).max(20),
    email: yup.string().email('must be a valid email').required(),
    message: yup.string().required(),
    userName: yup.string().min(5).max(20).required(),
    country: yup.string().min(4).max(20).required(),
    city: yup.string().min(4).max(20).required(),
    cnic:yup.number().min(13).required(),
    phone: yup.number().min(11,).required(),

  })
  const [contactList, setContactList] = useState<contactTypes[]>([])
  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }
  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(contactInfo)
      console.log(result);
      if (!result) {
        return
      }
      let newContactList: contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
      setError([])
      setContactInfo({
        name: "",
        fatherName: '',
        userName: '',
        email: "",
        phone: 0,
        cnic: 0,
        city: '',
        country: '',
        message: "",
      })
    } catch (err: any) {
      setError(err.errors || [])
      console.log("error", err.errors);
    }
  }
  
  return (
    <>
      <main className="max-w-2xl mx-auto mt-8 p-4">
        <h1 className="text-5xl font-bold text-center  mb-6  text-blue-600 ">Form Assignment </h1>
        <form className="grid  gap-6">
          <Input title="name" placeHolder="Name" type="text" onChangeHandler={onChangeHandler} value={contactInfo.name} />
          <Input title="fatherName" placeHolder="Father Name" type="text" onChangeHandler={onChangeHandler} value={contactInfo.fatherName} />
          <Input title="userName" placeHolder="User Name" type="text" onChangeHandler={onChangeHandler} value={contactInfo.userName} />
          <Input title="email" placeHolder="Email" type="email" onChangeHandler={onChangeHandler} value={contactInfo.email} />
          <Input title="phone" placeHolder="Phone" type="number" onChangeHandler={onChangeHandler} value={contactInfo.phone} />
          <Input title="cnic" placeHolder="CNIC Number" type="number" onChangeHandler={onChangeHandler} value={contactInfo.cnic} />
          <Input title="country" placeHolder="Country" type="text" onChangeHandler={onChangeHandler} value={contactInfo.country} />
          <Input title="city" placeHolder="City" type="text" onChangeHandler={onChangeHandler} value={contactInfo.city} />
          <TextArea title="message" onChangeHandler={onChangeHandler} value={contactInfo.message} />
          {errors.map((item) => {
            return (
              <div style={{ color: "blue" }}>
                <h1 className="text-lg font-bold ">{item}</h1>
              </div>
            )
          })}
          <div className="col-span-2 flex justify-between">
            <button
              onClick={onClickHandler}
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
      <DisplayContact contactData={contactList} />
    </>
  )
}