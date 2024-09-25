import React, { useState } from "react";

export default function SellerForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="font-bold text-4xl">Add Items</h1>
      <form className="flex flex-col gap-5 p-14 border-2 border-purple-600 rounded-xl text-xl">
        <label>Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-black rounded-md p-1 w-[30vw]"
        />

        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-black rounded-md p-1"
        />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black rounded-md p-1"
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border-2 border-black rounded-md p-1"
        />

        <label>ImageURL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border-2 border-black rounded-md p-1"
        />

        <button className="border-1 bg-green-500 p-2 rounded-xl transition ease-in hover:bg-green-600">
          Add Item
        </button>
      </form>
    </div>
  );
}
