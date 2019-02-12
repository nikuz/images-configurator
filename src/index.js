// @flow

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import configuratorReducer from './reducer';
import RadioButtons from './components/radio-buttons';
import FontSelector from './components/font-selector';
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
    textEffect: string,
    separator: string,
    authorFontFamily: string,
    authorAlign: string,
    authorEffect: string,
};

type Props = {
    imageFilter: string,
    imageFilters: Item[],
    overlay: string,
    overlays: Item[],
    text: string,
    textFontFamily: string,
    textAlign: string,
    textEffect: string,
    textEffects: Item[],
    separator: string,
    separators: Item[],
    author: string,
    authorFontFamily: string,
    authorAlign: string,
    authorEffect: string,
    authorEffects: Item[],
    fonts: Font[],
    aligns: Item[],
    onChange: (data: ChangePayload) => *,
    onSubmit: (data: SubmitData) => *,
};

class Configurator extends React.Component<Props> {
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
            textEffect,
            separator,
            author,
            authorFontFamily,
            authorAlign,
            authorEffect,
        } = this.props;

        this.props.onSubmit({
            imageFilter,
            overlay,
            text,
            textFontFamily,
            textAlign,
            textEffect,
            separator,
            author,
            authorFontFamily,
            authorAlign,
            authorEffect,
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
            textEffect,
            textEffects,
            separator,
            separators,
            author,
            authorFontFamily,
            authorAlign,
            authorEffect,
            authorEffects,
            fonts,
            aligns,
        } = this.props;

        return (
            <form action="#" onSubmit={this.handleSubmit} className="configurator-container">
                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Image-Filter.Title" />
                </h3>
                <RadioButtons
                    id="imageFilter"
                    items={imageFilters}
                    active={imageFilter}
                    onChange={this.props.onChange}
                />

                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Overlay.Title" />
                </h3>
                <RadioButtons
                    id="overlay"
                    items={overlays}
                    active={overlay}
                    onChange={this.props.onChange}
                />

                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Quote-Text.Title" />
                </h3>
                <div className="configurator-text-container">
                    <textarea
                        id="text"
                        onChange={this.textValueChange}
                        value={text}
                        className="configurator-textarea"
                        maxLength={255}
                    />
                    <div className="configurator-text-container-footer">
                        <FontSelector
                            id="textFontFamily"
                            fonts={fonts}
                            active={textFontFamily}
                            onChange={this.props.onChange}
                        />
                        <RadioButtons
                            id="textAlign"
                            items={aligns}
                            active={textAlign}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>

                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Quote-Text-Animation.Title" />
                </h3>
                <RadioButtons
                    id="textEffect"
                    items={textEffects}
                    active={textEffect}
                    onChange={this.props.onChange}
                />

                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Separator.Title" />
                </h3>
                <RadioButtons
                    id="separator"
                    items={separators}
                    active={separator}
                    onChange={this.props.onChange}
                />

                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Author-Text.Title" />
                </h3>
                <div className="configurator-text-container">
                    <input
                        type="text"
                        id="author"
                        value={author}
                        className="configurator-input"
                        maxLength={60}
                        onChange={this.textValueChange}
                    />
                    <div className="configurator-text-container-footer">
                        <FontSelector
                            id="authorFontFamily"
                            fonts={fonts}
                            active={authorFontFamily}
                            onChange={this.props.onChange}
                        />
                        <RadioButtons
                            id="authorAlign"
                            items={aligns}
                            active={authorAlign}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>


                <h3 className="configurator-subtitle">
                    <FormattedMessage id="Configurator.Author-Text-Animation.Title" />
                </h3>
                <RadioButtons
                    id="authorEffect"
                    items={authorEffects}
                    active={authorEffect}
                    onChange={this.props.onChange}
                />
                <button type="submit" className="configurator-submit">
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
    textEffect: state.configurator.textEffect || ownProps.textEffect,
    textEffects: state.configurator.textEffects.concat(ownProps.textEffects || []),
    separator: state.configurator.separator || ownProps.separator || 'none',
    separators: state.configurator.separators.concat(ownProps.separators || []),
    author: state.configurator.author || ownProps.author || '',
    authorFontFamily: state.configurator.authorFontFamily || ownProps.authorFontFamily,
    authorAlign: state.configurator.authorAlign || ownProps.authorAlign,
    authorEffect: state.configurator.authorEffect || ownProps.authorEffect,
    authorEffects: state.configurator.authorEffects.concat(ownProps.authorEffects || []),
    fonts: state.configurator.fonts,
    aligns: state.configurator.aligns,
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
