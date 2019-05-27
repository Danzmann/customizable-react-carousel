/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Swal from 'sweetalert2';

import './carouselItem.scss';

const initialState = {
    image: {
        src: '',
        updating: false,
    },
    title: {
        text: 'Click to Add title',
        updating: false,
    },
    subtitle: {
        text: 'Click to Add subtitle',
        updating: false,
    },
    fullPrice: {
        text: '',
        updating: false,
    },
    monthlyPrice: {
        text: '',
        updating: false,
    },
    buttons: [],
};

export default class CarouselItem extends Component {
    constructor(props) {
        super(props);

        console.log("new one created");

        this.state = initialState;
    }

    /**
     * @method addButton will create a new button throgh user input with sweetalert form and
     *  append to list
     */
    addButton = async () => {
        const result = await Swal.mixin({
            input: 'text',
            confirmButtonText: 'Add button',
            showCancelButton: true,
            progressSteps: ['1', '2'],
        }).queue([
            {
                title: 'Button Text',
                text: 'Type text to be show in button',
            },
            {
                title: 'Button url',
                text: 'Type url to redirect when button is clicked',
            },
        ]);

        if (result.value) {
            this.setState(
                {
                    buttons: [...this.state.buttons, //eslint-disable-line
                        {
                            id: this.state.buttons.length, //eslint-disable-line
                            text: result.value[0],
                            url: result.value[1].includes('http') ? result.value[1] : `http://${result.value[1]}`,
                        }],
                },
            );
            Swal.close();
        }
    }

    /**
     * @method removeButton will remove button by id, generated for each button
     */
    removeButton = (id) => {
        const { buttons } = this.state;
        this.setState({
            buttons: buttons.slice(0, id).concat(buttons.slice(id + 1, buttons.length)), //eslint-disable-line
        });
    }

    render() {
        const {
            image,
            title,
            subtitle,
            buttons,
        } = this.state;

        return (
            <div className="main-item-wrapper">
                {
                    image.updating === false ? (
                        <div className="item-image-wrapper">

                        </div>
                    ) : (
                        <div></div>
                    )
                }
                {
                    title.updating === false ? (
                        <div className="item-title-wrapper">
                            <a onClick={() => this.setState({ title: { updating: true, text: title.text } })}>
                                <h3>{title.text}</h3>
                            </a>
                        </div>
                    ) : (
                        <div className="item-title-edit-wrapper">
                            <input value={title.text} onChange={e => this.setState({ title: { updating: true, text: e.target.value } })} />
                            <button type="button" onClick={() => this.setState({ title: { updating: false, text: title.text } })}>Save</button>
                        </div>
                    )
                }
                {
                    subtitle.updating === false ? (
                        <div className="item-subtitle-wrapper">
                            <a onClick={() => this.setState({ subtitle: { updating: true, text: subtitle.text } })}>
                                <h5>{subtitle.text}</h5>
                            </a>
                        </div>
                    ) : (
                        <div className="item-subtitle-edit-wrapper">
                            <input value={subtitle.text} onChange={e => this.setState({ subtitle: { updating: true, text: e.target.value } })} />
                            <button type="button" onClick={() => this.setState({ subtitle: { updating: false, text: subtitle.text } })}>Save</button>
                        </div>
                    )
                }
                <div className="item-buttons">
                    {
                        buttons.map(button => (
                            <div className="item-button-wrapper">
                                <button
                                    type="button"
                                    key={button.id}
                                    className="item-button"
                                    onClick={() => { window.open(button.url, '_blank'); }}
                                >
                                    {button.text}
                                </button>
                                <a className="add-button-to-item" onClick={() => this.removeButton(button.id)}>
                                    <img src="/img/remove-item.png" alt="add button to item" />
                                </a>
                            </div>
                        ))
                    }
                    <a className="add-button-to-item" onClick={() => this.addButton()}>
                        <img src="/img/add-item.png" alt="add button to item" />
                        <span>Click to Add Button</span>
                    </a>
                </div>
            </div>
        );
    }
}
