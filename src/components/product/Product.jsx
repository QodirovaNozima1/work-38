import React from "react";
import "./Product.scss";
import tel1 from "../../assets/tel1.avif";
import tel2 from "../../assets/tel2.avif";
import tel4 from "../../assets/tel3.avif"
const pitem = [
    "For You",
    "Top Deals",
    "Mobile",
    "Tv&Audio",
    "Home Appliances",
    " Computing",
  ];
  const CardItem = [
    {
      image: tel1,
      title: "Galaxy Z fold6, 512GB ()UNLOCKED",
      price: "save up tu $1200",
      from: "From $189652.2 before eligible tride in",
    },
    {
      image: tel2,
      title: "Galaxy Buds3 Pro",
      price: "save up tu $100",
      from: "From $182.2 before eligible tride in",
    },
    {
      image: tel1,
      title: "Galaxy Watch7,40mm",
      price: "save up tu $250",
      from: "From $299.22 before eligible tride in",
    },
    {
      image: tel4,
      title: "Galaxy Z fold6, 512GB ()UNLOCKED",
      price: "save up tu $650",
      from: "From $1299.22 before eligible tride in",
    },
    {
      image: tel2,
      title: "Galaxy S24+,256GB",
      price: "save up tu $600",
      from: "From $999.22 before eligible tride in",
    },
    {
      image: tel1,
      title: "Galaxy 32 Smart Monitoring UHD with stream TV",
      price: "save up tu $600",
      from: "From $999.22 before eligible tride in",
    },
  ];
  const Product = () => {
    return (
      <div className="container">
        <div className="product__wrap">
          <b>Shop all latest offers and innovations</b>
          <a href="">
            <i>View all offers</i>
          </a>
          <div className="product__nav">
            {pitem?.map((el, inx) => (
              <a key={inx} href="">
                <p>{el}</p>
              </a>
            ))}
          </div>
          <div className="product__card__wrap">
            {CardItem?.map((el, inx) => (
              <div key={inx} className="card">
                <div className="img">
                  <img src={el.image} alt="" />
                </div>
                <strong>{el.title}</strong>
                <p>{el.price}</p>
                <span>{el.from}</span>
                <button>Buy now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;
  