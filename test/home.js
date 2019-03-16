// @flow

import React from 'react';
import ImageRenderer from '@nikuz/images-core';
import ImageConfigurator from '../src/index';
import './styles.css';

const renderProps = {
    container: null,
    width: 600,
    height: 600,
    imageURL: '/graphics/001.jpeg',
    // text
    text: '',
    textFontFamily: '',
    textEffect: '', // type | fade lines | fade letters | slide lines | append lines | fade
    textAlign: '', // left | center | right
    textVerticalAlign: '', // top | center | bottom
    // author
    author: '',
    authorFontFamily: '',
    authorEffect: '', // type | slide | append | fade
    authorAlign: '', // left | center | right
    authorVerticalAlign: '', // top | center | bottom
    // common
    animate: true,
    frameQuality: 0.93,
    overlay: '', // solid | lines | border
    color: '#FFF',
};

type Props = {};

export default class Home extends React.Component<Props> {
    rendererContainer: ?HTMLElement;

    renderImage = (opts: Object) => {
        const canvas = new ImageRenderer(opts);
        canvas.render();
    };

    onFilterChange = (data: Object) => {
        const rendererContainer = this.rendererContainer;
        if (!rendererContainer) {
            return;
        }

        rendererContainer.innerText = '';

        this.renderImage({
            ...renderProps,
            ...data,
            container: rendererContainer,
        });
    };

    render() {
        return [
            <ImageConfigurator
                key="configurator"
                text="There is no elevator to success, you have to take the stairs."
                author="Quote Author"
                onSubmit={this.onFilterChange}
            />,
            <div key="canvas" ref={el => this.rendererContainer = el} />,
        ];
    }
}

