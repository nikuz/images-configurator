// @flow

import React from 'react';
import cn from 'classnames';
import Icon from '../icon';
import type {
    Font,
    ChangePayload,
} from '../../types';
import './styles.css';
import ReactDOM from "react-dom";

type Props = {
    id: string,
    fonts: Font[],
    active: string,
    className?: string | { [className: string]: * },
    itemsClassName?: string | { [className: string]: * },
    onChange: (data: ChangePayload) => *,
};

type State = {
    opened: boolean,
};

export default class FontSelector extends React.Component<Props, State> {
    state = {
        opened: false,
    };

    tooltipEl: ?HTMLElement;

    containerEl: ?HTMLElement;

    componentDidMount(): void {
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps: Props, prevState: State): void {
        if (!prevState.opened && this.state.opened) {
            this.handleResize();
        }
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const { opened } = this.state;
        const tooltipEl = this.tooltipEl;
        const containerEl = this.containerEl;
        if (!opened || !tooltipEl || !containerEl) {
            return;
        }

        const rect = tooltipEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        const wh = window.innerHeight;
        const ww = window.innerWidth;
        let rh = rect.height;
        let rw = rect.width;
        const wRight = ww + window.scrollX;
        const wBottom = wh + window.scrollY;

        if (rh > wh) {
            tooltipEl.style.height = `${wh}px`;
            rh = wh;
        }
        if (rw > ww) {
            tooltipEl.style.width = `${ww}px`;
            rw = ww;
        }

        const hCenterPosition = containerRect.top - (rh / 2);
        let top = hCenterPosition;
        if (hCenterPosition < 0 || hCenterPosition < window.scrollY) {
            top = window.scrollY;
        } else if (hCenterPosition + rh > wBottom) {
            top = hCenterPosition - ((hCenterPosition + rh) - wBottom);
        }
        tooltipEl.style.top = `${top}px`;

        const wCenterPosition = containerRect.left - (rw / 2);
        let left = window.scrollX + wCenterPosition;
        if (wCenterPosition < 0 || wCenterPosition < window.scrollX) {
            left = window.scrollX;
        } else if (wCenterPosition + rw > wRight) {
            left = wCenterPosition - ((wCenterPosition + rw) - wRight);
        }
        tooltipEl.style.left = `${left}px`;
    };

    getActiveFont = (): Font => {
        const {
            fonts,
            active,
        } = this.props;
        const activeFont = fonts.find(item => item.id === active);

        return activeFont || fonts[0];
    };

    handleChoose = (item: Font) => {
        const { id } = this.props;
        this.props.onChange({
            id,
            value: item.id,
        });
        this.handleClose();
    };

    handleOpen = () => {
        this.setState({
            opened: true,
        });
    };

    handleClose = () => {
        this.setState({
            opened: false,
        });
    };

    renderFontItem = (item: Font) => {
        const {
            itemsClassName,
            active,
        } = this.props;
        const className = cn(
            'configurator-font-selector-item',
            item.id === active && 'active',
            itemsClassName
        );

        return (
            <div
                key={item.id}
                className={className}
                onClick={() => this.handleChoose(item)}
            >
                <Icon
                    src={item.icon}
                    className="configurator-font-selector-tooltip-icon"
                />
            </div>
        );
    };

    renderTooltip = () => {
        const body = document.body;
        if (!body) {
            return null;
        }
        const { fonts } = this.props;
        const { opened } = this.state;
        if (!opened) {
            return null;
        }

        return ReactDOM.createPortal(
            [
                <div
                    key="blocker"
                    className="configurator-font-selector-blocker"
                    onClick={this.handleClose}
                />,
                <div
                    key="tooltip"
                    ref={el => this.tooltipEl = el}
                    className="configurator-font-selector-tooltip"
                >
                    {fonts.map(this.renderFontItem)}
                </div>,
            ],
            body
        );
    };

    render() {
        const { className } = this.props;
        const containerClassName = cn(
            'configurator-font-selector-container',
            className
        );
        const activeFont = this.getActiveFont();

        return (
            <div
                className={containerClassName}
                ref={el => this.containerEl = el}
            >
                <div
                    className="configurator-font-selector"
                    onClick={this.handleOpen}
                >
                    <Icon
                        src={activeFont.icon}
                        className="configurator-font-selector-current-font"
                    />
                    <span className="configurator-font-selector-icon-container">
                        <Icon
                            src="down"
                            className="configurator-font-selector-icon"
                        />
                    </span>
                </div>
                { this.renderTooltip() }
            </div>
        );
    }
}
