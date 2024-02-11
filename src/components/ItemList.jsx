const ItemList = () => {
  return (
    <div>
      <div className="menus">
        <div className="recommended-menu">
          <h2>
            {title} ({itemCards.length})
          </h2>
          {itemCards.map((item) => (
            <div className="menu-detail" key={item.card.info.id}>
              <div className="menu-desc">
                <h4>{item.card.info.name}</h4>
                <p>
                  ₹
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </p>
                <p>{item.card.info.description}</p>
              </div>
              <div className="menu-img">
                <div className="add-btn">
                  <p>Add</p>
                  <p>+</p>
                </div>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                    item.card.info.imageId
                  }
                  alt=""
                />
                <p>customizable</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
