function ItemsDisplay(props) {
  const showItems = (item) => {
    return (
      <div>
        <p>ID: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Type: {item.type}</p>
        <p>Brand: {item.brand}</p>
      </div>
    );
  };

  return <div id="someID">{props.items.map(showItems)}</div>;
}

export default ItemsDisplay;
