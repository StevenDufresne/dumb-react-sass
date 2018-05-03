import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import "./Card.css";

export class Card extends Component {
    render() {
        let cardClass = 'c-card';
        if (this.props.theme) {
            cardClass += ` c-card--${this.props.theme}`;
        }

        return (
            <div className={ cardClass }>
                <header className="c-card__header">
                    <h3 className="c-card__title">{this.props.title}</h3>
                    <p className="c-card__description">
                        {this.props.description}
                    </p>
                </header>
                <div className="c-card__body">{this.props.children}</div>
            </div>
        );
    }
}

Card.defaultProps = {
    styleModifier: PropTypes.oneOf(['', 'c-card--dark']),
	title: 'Card Title',
    description: 'This is the card description',
    children: PropTypes.node
}
