import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../utils/api"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    setLoading(true)

    try {

      const res = await API.post("/auth/login", form)

      // save login data
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      // redirect to home (like <a href="/">)
      window.location.href = "/"

    } catch (err) {

      alert(err.response?.data?.message || "Login failed")

    }

    setLoading(false)
  }

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full border p-2 mb-4 rounded"
        />

        <div className="relative">

          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>

        </div>

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-900 transition"
        >

          {loading ? "Logging in..." : "Login"}

        </button>

      </form>

    </div>
  )
}