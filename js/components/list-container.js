import React from 'react';
import Card from './card';
import List from './list';


export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {cards: [], text: ''};
  }

  changeText(newText) {
    this.setState({
      text: newText
    });
  }

  addCard() {
    var newCard = <Card text={this.state.text} />;
    this.setState((prevState) => ({
      cards: prevState.cards.concat(newCard),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <List title={this.props.title} cards={this.state.cards} change={this.changeText} add={this.addCard} value={this.state.text} key={1} />
      </div>
    );
  }
}