function ItemsDisplay(props) {
  const deleteItem = (item) => {
    props.deleteItem(item);
  };

  const showItems = (item) => {
    if (item.id) {
      //hotfix. Guess I have an issue with useEffect which leads to double entries in items-table after hitting "Add Item".
      return (
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.type}</td>
          <td>{item.brand}</td>
          <td>
            <button
              className="button btn-primary"
              onClick={() => deleteItem(item)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">Items</div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{props.items.map(showItems)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
