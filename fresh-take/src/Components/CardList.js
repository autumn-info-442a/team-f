import React, { Component } from "react";
import "../style.css";
import CATEGORY_DATA from "../category.json";

class Card extends Component {
  render() {
    let topic = this.props.category;
    let pic = topic.img;
    return (
      <div className="card">
        <div className="card-list">
        <a href={topic.link}>
        <img
          src={require("../img/" + pic + ".jpg")}
          className={"card-img-top"}
          alt={topic.name}
          aria-hidden="true"
        />   
        <div className="card-body">
          <h4 className="card-title">{topic.name}</h4>
        </div>
        </a>
        </div>
      </div>
    );
  }
}
class CardList extends Component {
  render() {
    let newList = CATEGORY_DATA.map((type) => {
      if (type.cuisine === this.props.cuisine) {
        return <Card key={type.name} category={type} />;
      }
      return null;
    });

    return <div className="card-deck">{newList}</div>;
  }
}
export default CardList;
