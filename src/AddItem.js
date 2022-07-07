import { useState } from "react";

/*
{
    name:
    price:
    type:
    brand:

}
*/

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const AddItemButtonPressed = () => {
    props.addItem({ name: name, price: price, type: type, brand: brand });
   setName("");
   setPrice(0);
   setType("");
   setBrand("");
    
   
  };

  return (
    <div>
      <h2>Add an item</h2>
      <form>
        <h1>Items</h1>
        {/* in js would use "for", in JSX htmlFor */}
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label htmlFor="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        ></input>
        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        ></input>
        <button type="button" onClick={AddItemButtonPressed}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;