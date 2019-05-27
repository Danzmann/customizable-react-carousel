/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import CarouselItem from './CarouselItem';

import './carousel.scss';

const initialState = {
    itemList: [],
    currentItem: 0,
};

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    getCurrentItem = () => { //eslint-disable-line
        // eslint-disable-next-line react/destructuring-assignment
        return this.state.itemList[this.state.currentItem];
    }

    createNewItem = (direction) => {
        const { itemList } = this.state;

        // Add to the right (or in case it is empty)
        if (itemList.length === 0 || direction === 1) {
            this.setState({
                itemList: [...itemList, <CarouselItem key={itemList.length} />],
                currentItem: itemList.length,
            });
        }

        // Add to the left
        if (direction === -1) {
            this.setState({
                itemList: [<CarouselItem key={-itemList.length} />, ...itemList],
                currentItem: 0,
            });
        }
        setTimeout(() => { console.log(this.state); }, 1000);
    }

    changeItem = (direction) => {
        const { currentItem, itemList } = this.state;

        if ((direction === 1 && currentItem - 1 === itemList.length)
            || (direction === -1 && currentItem === 0)) {
            return;
        }

        this.setState({
            currentItem: direction === -1 ? currentItem - 1 : currentItem + 1,
        }, console.log(this.state));
    }

    render() {
        const { itemList } = this.state;
        return (
            <div className="temporary-wrapper">
                <div className="carousel-wrapper">
                    <div className="left-buttons-wrapper">
                        <div className="button-change-item-left-wrapper">
                            <a className="button-add-item-small" onClick={() => this.changeItem(-1)}>
                                <img src="/img/arrow-right.png" alt="Change left" />
                            </a>
                        </div>
                        <div className="button-add-item-left-wrapper">
                            <a className="button-add-item-small" onClick={() => this.createNewItem(-1)}>
                                <img src="/img/add-item.png" alt="Add left" />
                            </a>
                        </div>
                    </div>
                    {itemList.length !== 0
                        ? this.getCurrentItem()
                        : (
                            <div className="button-add-item-main-wrapper">
                                <a className="button-add-item-small" onClick={() => this.createNewItem(0)}>
                                    <img src="/img/add-item.png" alt="Add item" />
                                </a>
                            </div>
                        )
                    }
                    <div className="right-buttons-wrapper">
                        <div className="button-change-item-right-wrapper">
                            <a className="button-add-item-small" onClick={() => this.changeItem(1)}>
                                <img src="/img/arrow-right.png" alt="Change right" />
                            </a>
                        </div>
                        <div className="button-add-item-right-wrapper">
                            <a className="button-add-item-small" onClick={() => this.createNewItem(1)}>
                                <img src="/img/add-item.png" alt="Add righ" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
