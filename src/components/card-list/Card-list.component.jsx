import React from 'react';
import './Card-list.styles.scss';
import Card from '../card/Card.component';

export const CardList = ({products}) => {
    console.log(products);
    const dataList = products.map((item) => {
      if (item) {
        return (
          <div className="card-list-card" key={item.id.toString()}>
              <Card itemData={item}/>
          </div>
        )
      }
    });

    return (
    <div className="card-list-container">
        {dataList}
    </div>
    );
  };