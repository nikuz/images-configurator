// @flow

import { CONFIGURATOR_CHANGE } from './constants';
import type {
    Item,
    ChangePayload,
} from './types';

export type InitialStateType = {
    imageFilter?: string,
    imageFilters: Item[],
    overlay?: string,
    overlays: Item[],
    textFontFamily: string,
    textAlign: string,
    textEffect: string,
    textEffects: Item[],
    separators: Item[],
    authorFontFamily: string,
    authorAlign: string,
    fonts: Item[],
    aligns: Item[],
};

type Action = {
    type: string,
    payload: ChangePayload,
};

const initialState = {
    imageFilters: [{
        id: 'none',
        text: 'Configurator.Image-Filter.None',
    }, {
        id: 'shade',
        text: 'Configurator.Image-Filter.Shade',
    }, {
        id: 'blur',
        text: 'Configurator.Image-Filter.Blur',
    }, {
        id: 'bw',
        text: 'Configurator.Image-Filter.BW',
    }, {
        id: 'Sepia',
        text: 'Configurator.Image-Filter.Sepia',
    }, {
        id: 'Pixelate',
        text: 'Configurator.Image-Filter.Pixelate',
    }],
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
    text: 'There is no elevator to success, you have to take the stairs.',
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
    author: 'Quote Author',
    authorFontFamily: 'Lobster',
    authorAlign: 'center',
    authorVerticalAlign: '',
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
    color: '#FFFFFF'
};

export default function configurator(state: InitialStateType = initialState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case CONFIGURATOR_CHANGE:
            return {
                ...state,
                [payload.id]: payload.value,
            };

        default:
            return state;
    }
}
