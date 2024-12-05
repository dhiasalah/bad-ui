import { useState } from "react";

export default function ShareMealPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    summary: "",
    instructions: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData); // Log the form data to the console
  };

  return (
    <>
      <header className="gap-12 my-12 mx-auto w-11/12 max-w-[75rem] text-[#ddd6cb] text-xl">
        <h1 className="font-montserrat">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-11/12 max-w-[75rem] my-12 text-white">
        <form className="max-w-[50rem]" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-lg font-montserrat focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-lg font-montserrat focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-lg font-montserrat focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              value={formData.summary}
              onChange={handleChange}
              className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-lg font-montserrat focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <input
              type="text"
              id="instructions"
              name="instructions"
              required
              value={formData.instructions}
              onChange={handleChange}
              className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-lg font-montserrat focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-md cursor-pointer text-xl shadow-md hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
