const ProductDetails = ({ card, onClose }) => {
    return (
      <div className="app__menu-card-details">
        <div className="app__menu-card-details-header">
          <button onClick={onClose}>Close</button>
          <h3>{card.name}</h3>
        </div>
        <img src={card.image} alt={card.name} className="app__menu-card-image" />
        <div className="app__menu-card-details-info">
          <p>{card.description}</p>
          <p>{card.price}</p>
          {/* Add any other information you want to display */}
        </div>
      </div>
    );
  };