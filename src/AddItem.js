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
    <div className="container">
      <h2>Add an item</h2>
      <h1>Items</h1>
      {/* in js would use "for", in JSX htmlFor */}
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>{" "}
        <div className="col">
          <label htmlFor="price-field">Price:</label>
          <input
            id="price-field"
            type="number"
            value={price}
            className="form-control"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>{" "}
        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <input
            id="type-field"
            type="text"
            value={type}
            className="form-control"
            onChange={(e) => {
              setType(e.target.value);
            }}
          ></input>
        </div>{" "}
        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            id="brand-field"
            type="text"
            value={brand}
            className="form-control"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          onClick={AddItemButtonPressed}
          className="btn btn-primary"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
