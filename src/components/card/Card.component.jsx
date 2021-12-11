import React from "react";
import "./Card.styles.scss";
// import Icon from "@mdi/react";
// import { mdiHeart } from "@mdi/js";
// import default_image from '../../assets/images/default_image.jpg';

function Card({ itemData }) {
    console.log(itemData);
    const { imageUrl, name, price } = itemData;
//   const image = post?.image === undefined ? default_image : post.image;
//   const date = new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//   }).format(new Date(Date.parse(post.publishDate)));


  return (
    <React.Fragment>
      <div className="card-img">
        <img alt="robots" src={imageUrl} height="200px" />
      </div>
      <div className="card-body">
        <div className="card-body__title">{name}</div>
        <p className="card-body__description">{price}€</p>
      </div>
      {/*<div className="card__icon">
        <Icon path={mdiHeart} title="heart" size={1} color="#95dada" />
          <p className="card__icon-count">{post.likes}</p>
          <p className="card__icon-date">{date}</p>
      </div> */}
    </React.Fragment>
  );
}

export default Card;
