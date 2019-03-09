// @flow

import React from 'react';
import cn from 'classnames';
import type {
    ChangePayload,
} from '../../types';
import './styles.css';

type Color = {
    name: string,
    value: string,
};

type Props = {
    id: string,
    active: string,
    className?: string | { [className: string]: * },
    itemsClassName?: string | { [className: string]: * },
    onChange: (data: ChangePayload) => *,
};

export default class ColorSelector extends React.Component<Props> {
    handleChoose = (color: string) => {
        this.props.onChange({
            id: this.props.id,
            value: color,
        });
    };

    colors = [{
        name: 'White',
        value: '#FFFFFF'
    }, {
        name: 'Aureolin',
        value: '#FDEE00'
    }, {
        name: 'Amber',
        value: '#FF7E00'
    }, {
        name: 'Lime',
        value: '#D0FF14'
    }, {
        name: 'Green',
        value: '#00FF00'
    }, {
        name: 'Aqua',
        value: '#00FFFF'
    }, {
        name: 'Azure',
        value: '#007FFF'
    }, {
        name: 'Shades of pink',
        value: '#FF007F'
    }, {
        name: 'Candy apple red',
        value: '#FF0800'
    }, {
        name: 'Shades of white',
        value: '#E2E5DE'
    }, {
        name: 'Lemon yellow',
        value: '#FFFF9F'
    }, {
        name: 'Light goldenrod',
        value: '#FFEC8B'
    }, {
        name: 'Light moss green',
        value: '#ADDFAD'
    }, {
        name: 'Alien Armpit',
        value: '#84DE02'
    }, {
        name: 'Light cyan',
        value: '#E0FFFF'
    }, {
        name: 'Light sky blue',
        value: '#87CEFA'
    }, {
        name: 'Light deep pink',
        value: '#FF5CCD'
    }, {
        name: 'Shades of red',
        value: '#FF6961'
    }];

    renderColor = (color: Color) => {
        const {
            active,
            itemsClassName,
        } = this.props;
        const style = {
            backgroundColor: color.value,
        };
        const className = cn(
            'configurator-color-selector-item',
            (color.value === active) && 'active',
            itemsClassName
        );

        return (
            <div
                key={color.value}
                className="configurator-color-selector-item-wrap"
                title={color.name}
            >
                <div
                    className={className}
                    style={style}
                    onClick={() => this.handleChoose(color.value)}
                />
            </div>
        );
    };

    render() {
        const { className } = this.props;
        const containerClassName = cn(
            'configurator-color-selector',
            className
        );

        return (
            <div className={containerClassName}>
                {this.colors.map(this.renderColor)}
            </div>
        );
    }
}
