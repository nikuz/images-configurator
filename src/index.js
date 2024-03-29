// @flow

import React from 'react';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import RadioButtons from './components/radio-buttons';
import FontSelector from './components/font-selector';
import ColorSelector from './components/color-selector';
import type {
    Item,
    Font,
    ChangePayload,
} from './types';
import './styles.css';

type SubmitData = {
    filter: ?string,
    overlay: ?string,
    textFontFamily: string,
    textAlign: string,
    textVerticalAlign: string,
    textEffect: string,
    separator: ?string,
    authorFontFamily: string,
    authorAlign: string,
    authorVerticalAlign: string,
    authorEffect: string,
    color: ?string,
    animate: boolean,
};

type Props = {
    filter?: string,
    overlay?: string,
    text: string,
    textFontFamily?: string,
    textAlign?: string,
    textVerticalAlign?: string,
    textEffect?: string,
    textEffectDisabled?: boolean,
    separator?: string,
    author: string,
    authorFontFamily?: string,
    authorAlign?: string,
    authorVerticalAlign?: string,
    authorEffect?: string,
    authorEffectDisabled?: boolean,
    color?: string,
    radioButtonClassName?: string | { [className: string]: * },
    radioButtonItemClassName?: string | { [className: string]: * },
    colorSelectorClassName?: string | { [className: string]: * },
    colorSelectorItemClassName?: string | { [className: string]: * },
    fontSelectorClassName?: string | { [className: string]: * },
    fontSelectorItemClassName?: string | { [className: string]: * },
    containerClassName?: string | { [className: string]: * },
    subtitleClassName?: string | { [className: string]: * },
    submitButtonClassName?: string | { [className: string]: * },
    textareaClassName?: string | { [className: string]: * },
    inputClassName?: string | { [className: string]: * },
    translationDomain?: string,
    filters?: Item[],
    overlays?: Item[],
    textEffects?: Item[],
    separators?: Item[],
    authorEffects?: Item[],
    onChange?: (data: ChangePayload) => *,
    onSubmit: (data: SubmitData) => *,
};

export type State = {
    text: ?string,
    filter: ?string,
    filters: Item[],
    overlay: ?string,
    overlays: Item[],
    textFontFamily: string,
    textAlign: string,
    textVerticalAligns: Item[],
    textVerticalAlign: string,
    textEffect: string,
    textEffects: Item[],
    author: ?string,
    authorFontFamily: string,
    authorAlign: string,
    authorVerticalAligns: Item[],
    authorVerticalAlign: string,
    authorEffects: Item[],
    authorEffect: string,
    fonts: Font[],
    aligns: Item[],
    separators: Item[],
    separator?: string,
    color: ?string,
};

export default class Configurator extends React.Component<Props, State> {
    static defaultProps = {
        textEffectDisabled: false,
        authorEffectDisabled: false,
    };

    state = {
        filter: undefined,
        filters: [{
            id: 'none',
            text: 'Configurator.Image-Filter.None',
        }, {
            id: 'shade',
            text: 'Configurator.Image-Filter.Shade',
        }, {
            id: 'blur',
            text: 'Configurator.Image-Filter.Blur',
        }, {
            id: 'grayscale',
            text: 'Configurator.Image-Filter.BW',
        }, {
            id: 'sepia',
            text: 'Configurator.Image-Filter.Sepia',
        }, {
            id: 'pixelate',
            text: 'Configurator.Image-Filter.Pixelate',
        }, {
            id: 'spread',
            text: 'Configurator.Image-Filter.Spread',
        }, {
            id: 'swirl',
            text: 'Configurator.Image-Filter.Swirl',
        }, {
            id: 'paint',
            text: 'Configurator.Image-Filter.Paint',
        }, {
            id: 'raise',
            text: 'Configurator.Image-Filter.Raise',
        }],
        overlay: undefined,
        overlays: [{
            id: 'none',
            text: 'Configurator.Overlay.None',
        }, {
            id: 'solid',
            text: 'Configurator.Overlay.Solid',
        }, {
            id: 'border',
            text: 'Configurator.Overlay.Border',
        }, {
            id: 'lines',
            text: 'Configurator.Overlay.Lines',
        }],
        text: undefined,
        textFontFamily: 'Courgette',
        textAlign: 'center',
        textVerticalAlign: 'center',
        textEffect: 'type',
        textEffects: [{
            id: 'type',
            text: 'Configurator.Quote-Text-Animation.Type',
        }, {
            id: 'fade-letters',
            text: 'Configurator.Quote-Text-Animation.Fade-Letters',
        }, {
            id: 'fade-lines',
            text: 'Configurator.Quote-Text-Animation.Fade-Lines',
        }, {
            id: 'slide-lines',
            text: 'Configurator.Quote-Text-Animation.Slide-Lines',
        }, {
            id: 'append-lines',
            text: 'Configurator.Quote-Text-Animation.Append-Lines',
        }, {
            id: 'fade',
            text: 'Configurator.Quote-Text-Animation.Fade',
        }],
        textVerticalAligns: [{
            id: 'top',
            icon: 'vertical-top',
        }, {
            id: 'center',
            icon: 'vertical-center',
        }, {
            id: 'bottom',
            icon: 'vertical-bottom',
        }],
        separator: undefined,
        separators: [{
            id: 'none',
            text: 'Configurator.Separator.None',
        }, {
            id: 'line',
            text: 'Configurator.Separator.Ndash',
        }, {
            id: 'dash',
            text: 'Configurator.Separator.Dashes',
        }, {
            id: 'dot',
            text: 'Configurator.Separator.Dots',
        }],
        author: undefined,
        authorFontFamily: 'Lobster',
        authorAlign: 'center',
        authorVerticalAlign: 'stick',
        authorVerticalAligns: [{
            id: 'stick',
            icon: 'vertical-top',
        }, {
            id: 'bottom',
            icon: 'vertical-bottom',
        }],
        authorEffect: 'fade',
        authorEffects: [{
            id: 'type',
            text: 'Configurator.Author-Text-Animation.Type',
        }, {
            id: 'slide',
            text: 'Configurator.Author-Text-Animation.Slide',
        }, {
            id: 'fade',
            text: 'Configurator.Author-Text-Animation.Fade',
        }],
        fonts: [{
            id: 'Typograph',
            icon: 'typograph',
        }, {
            id: 'Tahoma',
            icon: 'tahoma',
        }, {
            id: 'Lobster',
            icon: 'lobster',
        }, {
            id: 'Sports',
            icon: 'sports',
        }, {
            id: 'Courgette',
            icon: 'courgette',
        }, {
            id: 'Sensei',
            icon: 'sensei',
        }, {
            id: 'GreatVibes',
            icon: 'greatvibes',
        }, {
            id: 'Guerilla',
            icon: 'guerilla',
        }, {
            id: 'Kaushan',
            icon: 'kaushan',
        }, {
            id: 'Exo',
            icon: 'exo',
        }, {
            id: 'YellowTail',
            icon: 'yellowtail',
        }, {
            id: 'MyUnderwood',
            icon: 'myunderwood',
        }, {
            id: 'NickAinley',
            icon: 'nickainley',
        }, {
            id: 'Lato',
            icon: 'lato',
        }],
        aligns: [{
            id: 'left',
            icon: 'align-left',
        }, {
            id: 'center',
            icon: 'align-center',
        }, {
            id: 'right',
            icon: 'align-right',
        }],
        color: undefined,
    };

    constructor(props: Props) {
        super(props);

        const state = this.state;

        this.state = {
            ...this.state,
            filter: props.filter || state.filter || 'none',
            filters: state.filters.concat(props.filters || []),
            overlay: props.overlay || state.overlay || 'none',
            overlays: state.overlays.concat(props.overlays || []),
            text: props.text,
            textFontFamily: props.textFontFamily || state.textFontFamily,
            textAlign: props.textAlign || state.textAlign,
            textVerticalAlign: props.textVerticalAlign || state.textVerticalAlign,
            textEffect: props.textEffect || state.textEffect,
            textEffects: state.textEffects.concat(props.textEffects || []),
            separator: props.separator || state.separator || 'none',
            separators: state.separators.concat(props.separators || []),
            author: props.author,
            authorFontFamily: props.authorFontFamily || state.authorFontFamily,
            authorAlign: props.authorAlign || state.authorAlign,
            authorVerticalAlign: props.authorVerticalAlign || state.authorVerticalAlign,
            authorEffect: props.authorEffect || state.authorEffect,
            authorEffects: state.authorEffects.concat(props.authorEffects || []),
            color: props.color || state.color || '#FFFFFF',
        };
    }

    handleChange = (data: ChangePayload) => {
        const { onChange } = this.props;

        this.setState({
            [data.id]: data.value,
        });

        if (onChange instanceof Function) {
            onChange({
                id: data.id,
                value: data.value,
            });
        }
    };

    textValueChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value;

        this.handleChange({
            id,
            value,
        });
    };

    getTranslationId = (id: string) => {
        const { translationDomain } = this.props;
        return `${translationDomain ? `${translationDomain}.` : ''}${id}`;
    };

    handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {
            filter,
            overlay,
            text,
            textFontFamily,
            textAlign,
            textVerticalAlign,
            textEffect,
            separator,
            author,
            authorFontFamily,
            authorAlign,
            authorVerticalAlign,
            authorEffect,
            color,
        } = this.state;
        const {
            textEffectDisabled,
            authorEffectDisabled,
        } = this.props;

        this.props.onSubmit({
            filter,
            overlay,
            text,
            textFontFamily,
            textAlign,
            textVerticalAlign,
            textEffect,
            separator,
            author,
            authorFontFamily,
            authorAlign,
            authorVerticalAlign,
            authorEffect,
            color,
            animate: !textEffectDisabled && !authorEffectDisabled,
        });
    };

    render() {
        const {
            radioButtonClassName,
            radioButtonItemClassName,
            colorSelectorClassName,
            colorSelectorItemClassName,
            fontSelectorClassName,
            fontSelectorItemClassName,
            textEffectDisabled,
            authorEffectDisabled,
            translationDomain,
        } = this.props;
        const {
            filter,
            filters,
            overlay,
            overlays,
            text,
            textFontFamily,
            textAlign,
            textVerticalAlign,
            textVerticalAligns,
            textEffect,
            textEffects,
            separator,
            separators,
            author,
            authorFontFamily,
            authorAlign,
            authorVerticalAlign,
            authorVerticalAligns,
            authorEffect,
            authorEffects,
            fonts,
            aligns,
            color,
        } = this.state;
        let {
            containerClassName,
            subtitleClassName,
            submitButtonClassName,
            textareaClassName,
            inputClassName,
        } = this.props;

        containerClassName = cn(
            'configurator-container',
            containerClassName
        );
        subtitleClassName = cn(
            'configurator-subtitle',
            subtitleClassName
        );
        submitButtonClassName = cn(
            'configurator-submit',
            submitButtonClassName
        );
        textareaClassName = cn(
            'configurator-textarea',
            textareaClassName
        );
        inputClassName = cn(
            'configurator-input',
            inputClassName
        );

        return (
            <form action="#" onSubmit={this.handleSubmit} className={containerClassName}>
                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Image-Filter.Title')}
                    />
                </h3>
                <RadioButtons
                    id="filter"
                    items={filters}
                    active={filter}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    translationDomain={translationDomain}
                    onChange={this.handleChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Overlay.Title')}
                    />
                </h3>
                <RadioButtons
                    id="overlay"
                    items={overlays}
                    active={overlay}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    translationDomain={translationDomain}
                    onChange={this.handleChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Quote-Text.Title')}
                    />
                </h3>
                <div className="configurator-text-container">
                    <textarea
                        id="text"
                        onChange={this.textValueChange}
                        value={text}
                        className={textareaClassName}
                        maxLength={255}
                    />
                    <div className="configurator-text-container-footer">
                        <FontSelector
                            id="textFontFamily"
                            fonts={fonts}
                            active={textFontFamily}
                            className={fontSelectorClassName}
                            itemsClassName={fontSelectorItemClassName}
                            onChange={this.handleChange}
                        />
                        <RadioButtons
                            id="textAlign"
                            items={aligns}
                            active={textAlign}
                            className={radioButtonClassName}
                            itemsClassName={radioButtonItemClassName}
                            translationDomain={translationDomain}
                            onChange={this.handleChange}
                        />
                        <RadioButtons
                            id="textVerticalAlign"
                            items={textVerticalAligns}
                            active={textVerticalAlign}
                            className={cn('configurator-text-vertical-align', radioButtonClassName)}
                            itemsClassName={radioButtonItemClassName}
                            translationDomain={translationDomain}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Quote-Text-Animation.Title')}
                    />
                </h3>
                <RadioButtons
                    id="textEffect"
                    items={textEffects}
                    active={textEffect}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    disabled={textEffectDisabled}
                    translationDomain={translationDomain}
                    onChange={this.handleChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Separator.Title')}
                    />
                </h3>
                <RadioButtons
                    id="separator"
                    items={separators}
                    active={separator}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    translationDomain={translationDomain}
                    onChange={this.handleChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Author-Text.Title')}
                    />
                </h3>
                <div className="configurator-text-container">
                    <input
                        type="text"
                        id="author"
                        value={author}
                        className={inputClassName}
                        maxLength={60}
                        onChange={this.textValueChange}
                    />
                    <div className="configurator-text-container-footer">
                        <FontSelector
                            id="authorFontFamily"
                            fonts={fonts}
                            active={authorFontFamily}
                            className={fontSelectorClassName}
                            itemsClassName={fontSelectorItemClassName}
                            onChange={this.handleChange}
                        />
                        <RadioButtons
                            id="authorAlign"
                            items={aligns}
                            active={authorAlign}
                            className={radioButtonClassName}
                            itemsClassName={radioButtonItemClassName}
                            translationDomain={translationDomain}
                            onChange={this.handleChange}
                        />
                        <RadioButtons
                            id="authorVerticalAlign"
                            items={authorVerticalAligns}
                            active={authorVerticalAlign}
                            className={cn('configurator-text-vertical-align', radioButtonClassName)}
                            itemsClassName={radioButtonItemClassName}
                            translationDomain={translationDomain}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>


                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Author-Text-Animation.Title')}
                    />
                </h3>
                <RadioButtons
                    id="authorEffect"
                    items={authorEffects}
                    active={authorEffect}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    disabled={authorEffectDisabled}
                    translationDomain={translationDomain}
                    onChange={this.handleChange}
                />
                <h3 className={subtitleClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Color.Title')}
                    />
                </h3>
                <ColorSelector
                    id="color"
                    active={color}
                    className={colorSelectorClassName}
                    itemsClassName={colorSelectorItemClassName}
                    onChange={this.handleChange}
                />

                <button type="submit" className={submitButtonClassName}>
                    <FormattedMessage
                        id={this.getTranslationId('Configurator.Submit')}
                    />
                </button>
            </form>
        );
    }
}
