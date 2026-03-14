import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    try {
      const res = await axios.get("https://devsetu.api.hackademyzone.xyz/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);

      setForm({
        name: res.data.user.name,
        email: res.data.user.email,
        password: "",
      });

      setLoading(false);
    } catch (err) {
      setMessage("Failed to load profile");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        "https://devsetu.api.hackademyzone.xyz/api/auth/profile",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message);
      setEditMode(false);
      fetchProfile();
    } catch (err) {
      setMessage("Update failed");
    }
  };

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading profile...</div>;
  }

  const joinDate = new Date(user.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

        {message && (
          <p className="text-green-600 mb-4 text-center">{message}</p>
        )}

        {!editMode ? (
          <>
            <div className="space-y-3 mb-6">

              <p>
                <span className="font-semibold">Name:</span> {user?.name}
              </p>

              <p>
                <span className="font-semibold">Email:</span> {user?.email}
              </p>

              <p className="text-gray-500 text-sm">
                Joined on {joinDate}
              </p>

            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setEditMode(true)}
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border p-2 rounded"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 rounded"
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full border p-2 rounded"
            />

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => {
                  setEditMode(false);
                  setForm({
                    name: user.name,
                    email: user.email,
                    password: "",
                  });
                  setMessage("");
                }}
                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}