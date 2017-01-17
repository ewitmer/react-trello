import React from 'react';
import Card from './card';


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

    renderList() {
        const cards = [];
        for (var i = 0; i < this.props.cards.length; i++) {
            cards.push(<Card text={this.props.cards[i]} key={i} />);
        }
        return cards
    }

    handleChange(e) {
        var text = e.target.value;
        this.props.change(text)
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.add();
    }


    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.renderList()}
                <form>
                    <input type="text" value={this.props.value} onChange={this.handleChange} /> 
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}