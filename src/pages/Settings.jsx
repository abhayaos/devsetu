import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Settings() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  /* FETCH USER */

  const fetchProfile = async () => {

    try {

      const res = await axios.get(
        "https://devsetu.api.hackademyzone.xyz/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setForm({
        name: res.data.user.name,
        email: res.data.user.email,
        password: ""
      });

      setLoading(false);

    } catch (error) {
      setMessage("Failed to load profile");
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchProfile();
  }, []);

  /* INPUT CHANGE */

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  /* UPDATE PROFILE */

  const updateProfile = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.put(
        "https://devsetu.api.hackademyzone.xyz/api/auth/profile",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage(res.data.message);

    } catch (error) {
      setMessage("Update failed");
    }

  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading settings...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6">
          Account Settings
        </h1>

        {message && (
          <p className="mb-4 text-green-600">{message}</p>
        )}

        <form onSubmit={updateProfile} className="space-y-4">

          <div>
            <label className="block text-sm mb-1">Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              New Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Leave empty if not changing"
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}