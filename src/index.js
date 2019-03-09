// @flow

import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import configuratorReducer from './reducer';
import RadioButtons from './components/radio-buttons';
import FontSelector from './components/font-selector';
import ColorSelector from './components/color-selector';
import { change } from './actions';
import type {
    Item,
    ChangePayload,
    Font,
} from './types';
import './styles.css';

type SubmitData = {
    imageFilter: string,
    overlay: string,
    textFontFamily: string,
    textAlign: string,
    textVerticalAlign: string,
    textEffect: string,
    separator: string,
    authorFontFamily: string,
    authorAlign: string,
    authorVerticalAlign: string,
    authorEffect: string,
    color: string,
    animated: boolean,
};

type Props = {
    imageFilter: string,
    imageFilters: Item[],
    overlay: string,
    overlays: Item[],
    text: string,
    textFontFamily: string,
    textAlign: string,
    textVerticalAlign: string,
    textVerticalAligns: Item[],
    textEffect: string,
    textEffectDisabled?: boolean,
    textEffects: Item[],
    separator: string,
    separators: Item[],
    author: string,
    authorFontFamily: string,
    authorAlign: string,
    authorVerticalAlign: string,
    authorVerticalAligns: Item[],
    authorEffect: string,
    authorEffectDisabled?: boolean,
    authorEffects: Item[],
    fonts: Font[],
    aligns: Item[],
    color: string,
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
    onChange: (data: ChangePayload) => *,
    onSubmit: (data: SubmitData) => *,
};

class Configurator extends React.Component<Props> {
    static defaultProps = {
        textEffectDisabled: false,
        authorEffectDisabled: false,
    };

    textValueChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        this.props.onChange({
            id,
            value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            imageFilter,
            overlay,
            text,
            textFontFamily,
            textAlign,
            textVerticalAlign,
            textEffect,
            textEffectDisabled,
            separator,
            author,
            authorFontFamily,
            authorAlign,
            authorVerticalAlign,
            authorEffect,
            authorEffectDisabled,
            color,
        } = this.props;

        this.props.onSubmit({
            imageFilter,
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
            imageFilter,
            imageFilters,
            overlay,
            overlays,
            text,
            textFontFamily,
            textAlign,
            textVerticalAlign,
            textVerticalAligns,
            textEffect,
            textEffectDisabled,
            textEffects,
            separator,
            separators,
            author,
            authorFontFamily,
            authorAlign,
            authorVerticalAlign,
            authorVerticalAligns,
            authorEffect,
            authorEffectDisabled,
            authorEffects,
            fonts,
            aligns,
            color,
            radioButtonClassName,
            radioButtonItemClassName,
            colorSelectorClassName,
            colorSelectorItemClassName,
            fontSelectorClassName,
            fontSelectorItemClassName,
        } = this.props;
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
                    <FormattedMessage id="Configurator.Image-Filter.Title" />
                </h3>
                <RadioButtons
                    id="imageFilter"
                    items={imageFilters}
                    active={imageFilter}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    onChange={this.props.onChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Overlay.Title" />
                </h3>
                <RadioButtons
                    id="overlay"
                    items={overlays}
                    active={overlay}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    onChange={this.props.onChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Quote-Text.Title" />
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
                            onChange={this.props.onChange}
                        />
                        <RadioButtons
                            id="textAlign"
                            items={aligns}
                            active={textAlign}
                            className={radioButtonClassName}
                            itemsClassName={radioButtonItemClassName}
                            onChange={this.props.onChange}
                        />
                        <RadioButtons
                            id="textVerticalAlign"
                            items={textVerticalAligns}
                            active={textVerticalAlign}
                            className={cn('configurator-text-vertical-align', radioButtonClassName)}
                            itemsClassName={radioButtonItemClassName}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>

                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Quote-Text-Animation.Title" />
                </h3>
                <RadioButtons
                    id="textEffect"
                    items={textEffects}
                    active={textEffect}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    disabled={textEffectDisabled}
                    onChange={this.props.onChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Separator.Title" />
                </h3>
                <RadioButtons
                    id="separator"
                    items={separators}
                    active={separator}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    onChange={this.props.onChange}
                />

                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Author-Text.Title" />
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
                            onChange={this.props.onChange}
                        />
                        <RadioButtons
                            id="authorAlign"
                            items={aligns}
                            active={authorAlign}
                            className={radioButtonClassName}
                            itemsClassName={radioButtonItemClassName}
                            onChange={this.props.onChange}
                        />
                        <RadioButtons
                            id="authorVerticalAlign"
                            items={authorVerticalAligns}
                            active={authorVerticalAlign}
                            className={cn('configurator-text-vertical-align', radioButtonClassName)}
                            itemsClassName={radioButtonItemClassName}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>


                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Author-Text-Animation.Title" />
                </h3>
                <RadioButtons
                    id="authorEffect"
                    items={authorEffects}
                    active={authorEffect}
                    className={radioButtonClassName}
                    itemsClassName={radioButtonItemClassName}
                    disabled={authorEffectDisabled}
                    onChange={this.props.onChange}
                />
                <h3 className={subtitleClassName}>
                    <FormattedMessage id="Configurator.Color.Title" />
                </h3>
                <ColorSelector
                    id="color"
                    active={color}
                    className={colorSelectorClassName}
                    itemsClassName={colorSelectorItemClassName}
                    onChange={this.props.onChange}
                />

                <button type="submit" className={submitButtonClassName}>
                    <FormattedMessage id="Configurator.Submit" />
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state: Object, ownProps: Object) => ({
    imageFilter: state.configurator.imageFilter || ownProps.imageFilter || 'none',
    imageFilters: state.configurator.imageFilters.concat(ownProps.imageFilters || []),
    overlay: state.configurator.overlay || ownProps.overlay || 'none',
    overlays: state.configurator.overlays.concat(ownProps.overlays || []),
    text: state.configurator.text || ownProps.text || '',
    textFontFamily: state.configurator.textFontFamily || ownProps.textFontFamily,
    textAlign: state.configurator.textAlign || ownProps.textAlign,
    textVerticalAlign: state.configurator.textVerticalAlign || ownProps.textVerticalAlign,
    textVerticalAligns: state.configurator.textVerticalAligns,
    textEffect: state.configurator.textEffect || ownProps.textEffect,
    textEffects: state.configurator.textEffects.concat(ownProps.textEffects || []),
    separator: state.configurator.separator || ownProps.separator || 'none',
    separators: state.configurator.separators.concat(ownProps.separators || []),
    author: state.configurator.author || ownProps.author || '',
    authorFontFamily: state.configurator.authorFontFamily || ownProps.authorFontFamily,
    authorAlign: state.configurator.authorAlign || ownProps.authorAlign,
    authorVerticalAlign: state.configurator.authorVerticalAlign || ownProps.authorVerticalAlign,
    authorVerticalAligns: state.configurator.authorVerticalAligns,
    authorEffect: state.configurator.authorEffect || ownProps.authorEffect,
    authorEffects: state.configurator.authorEffects.concat(ownProps.authorEffects || []),
    fonts: state.configurator.fonts,
    aligns: state.configurator.aligns,
    color: state.configurator.color,
});

const mapDispatchToProps = {
    onChange: change,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Configurator);

export {
    configuratorReducer,
};
