// @flow

import { connect } from 'react-redux';
import React from 'react';
import ImageRenderer from '@nikuz/images-renderer';
import ImageConfigurator from '../src/index';
import './styles.css';

class Home extends React.Component<void> {
    rendererContainer;

    componentDidMount() {
        const canvas = new ImageRenderer({
            container: this.rendererContainer,
            width: 600,
            height: 600,
            imageURL: '/graphics/001.jpeg',
            // text
            text: 'Specify the color of the box to write. For the general syntax of this option',
            textFontFamily: 'Kaushan Script',
            textEffect: 'append lines', // type | fade lines | fade letters | slide lines | append lines | fade
            textAlign: 'right', // left | center | right
            textVerticalAlign: 'top', // top | center | bottom
            // author
            author: 'William Longgood',
            authorFontFamily: 'Nickainley',
            authorEffect: 'fade', // type | slide | append | fade
            authorAlign: 'left', // left | center | right
            authorVerticalAlign: 'bottom', // top | center | bottom
            // common
            animate: true,
            frameQuality: 0.93,
            overlay: 'border', // solid | lines | border
            color: '#FFF',
        });
        canvas.render();
    }

    render() {
        return [
            <div key="canvas" ref={el => this.rendererContainer = el} />,
            <ImageConfigurator key="configurator" />,
        ];
    }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
