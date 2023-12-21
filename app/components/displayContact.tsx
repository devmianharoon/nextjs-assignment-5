import { contactTypes } from "@/types/commonTypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Father Name</th>
              <th className="py-2 px-4">User Name</th>
              <th className="py-2 px-4">Phone Number</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">CNIC </th>
              <th className="py-2 px-4">Country</th>
              <th className="py-2 px-4">City</th>
              <th className="py-2 px-4">Message</th>
            </tr>
          </thead>
          {props.contactData.map((data, index) => {
            return (
              <tr className="hover:bg-gray-100" key={index}>
                <td className="py-2 px-4">{data.name}</td>
                <td className="py-2 px-4">{data.fatherName}</td>
                <td className="py-2 px-4">{data.userName}</td>
                <td className="py-2 px-4">{data.phone}</td>
                <td className="py-2 px-4">{data.email}</td>
                <td className="py-2 px-4">{data.cnic}</td>
                <td className="py-2 px-4">{data.country}</td>
                <td className="py-2 px-4">{data.city}</td>
                <td className="py-2 px-4">{data.message} </td>
              </tr>
            )
          })}

        </table>
      </div>

    </div>
  )
}
