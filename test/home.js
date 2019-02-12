// @flow

import { connect } from 'react-redux';
import React from 'react';
import ImageRenderer from '@nikuz/images-renderer';
import ImageConfigurator from '../src/index';
import './styles.css';

const renderProps = {
    container: null,
    width: 600,
    height: 600,
    imageURL: '/graphics/001.jpeg',
    // text
    text: 'Specify the color of the box to write. For the general syntax of this option',
    textFontFamily: 'GreatVibes',
    textEffect: 'append-lines', // type | fade lines | fade letters | slide lines | append lines | fade
    textAlign: 'right', // left | center | right
    textVerticalAlign: 'top', // top | center | bottom
    // author
    author: 'William Longgood',
    authorFontFamily: 'NickAinley',
    authorEffect: 'fade', // type | slide | append | fade
    authorAlign: 'left', // left | center | right
    authorVerticalAlign: 'bottom', // top | center | bottom
    // common
    animate: true,
    frameQuality: 0.93,
    overlay: 'border', // solid | lines | border
    color: '#FFF',
};

class Home extends React.Component<void> {
    rendererContainer: ?HTMLElement;

    componentDidMount() {
        this.renderImage({
            ...renderProps,
            container: this.rendererContainer,
        });
    }

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
                onSubmit={this.onFilterChange}
            />,
            <div key="canvas" ref={el => this.rendererContainer = el} />,
        ];
    }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
