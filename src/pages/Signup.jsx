import React, { useState } from "react";
import API from "../utils/api";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {

const [form,setForm]=useState({
name:"",
email:"",
password:""
})

const [show,setShow]=useState(false)
const [loading,setLoading]=useState(false)

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
e.preventDefault()

setLoading(true)

try{

await API.post("/auth/register",form)

alert("Registered Successfully")

}catch(err){

alert(err.response?.data?.message || "Error")

}

setLoading(false)

}

return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96">

<h2 className="text-2xl font-bold mb-6">Register</h2>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
className="w-full border p-2 mb-4 rounded"
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
className="w-full border p-2 mb-4 rounded"
/>

<div className="relative">

<input
type={show ? "text":"password"}
name="password"
placeholder="Password"
onChange={handleChange}
className="w-full border p-2 rounded"
/>

<div
className="absolute right-3 top-3 cursor-pointer"
onClick={()=>setShow(!show)}
>
{show ? <EyeOff size={18}/> : <Eye size={18}/>}
</div>

</div>

<button
className="w-full bg-black text-white py-2 mt-4 rounded"
>

{loading ? "Creating..." : "Register"}

</button>

</form>

</div>

)

}