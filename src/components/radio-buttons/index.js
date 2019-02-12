// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';
import Icon from '../icon';
import type {
    Item,
    ChangePayload,
} from '../../types';
import './styles.css';

type Props = {
    id: string,
    items: Item[],
    active: string,
    className?: string | { [className: string]: * },
    itemsClassName?: string | { [className: string]: * },
    onChange: (data: ChangePayload) => *,
};

export default class RadioButtons extends React.Component<Props> {
    handleChoose = (item: Item) => {
        const { id } = this.props;
        this.props.onChange({
            id,
            value: item.id,
        });
    };

    render() {
        const {
            items,
            active,
            className,
            itemsClassName,
        } = this.props;
        const containerClassName = cn('configurator-radio-buttons', className);

        return (
            <ul className={containerClassName}>
                { items.map((item) => {
                    const itemClassName = cn(
                        'configurator-radio-buttons-item',
                        itemsClassName,
                        item.id === active && 'active',
                        !item.text && 'no-text'
                    );
                    return (
                        <li
                            key={item.id}
                            className={itemClassName}
                        >
                            { item.text && (
                                <FormattedMessage id={item.text} />
                            ) }
                            { item.icon && (
                                <Icon
                                    src={item.icon}
                                    className="configurator-radio-buttons-icon"
                                />
                            ) }
                            <div
                                className="configurator-radio-buttons-blocker"
                                onClick={() => this.handleChoose(item)}
                            />
                        </li>
                    );
                }) }
            </ul>
        );
    }
}
