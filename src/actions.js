// @flow

import { CONFIGURATOR_CHANGE } from './constants';
import type { ChangePayload } from './types';

export const change = (data: ChangePayload) => ({
    type: CONFIGURATOR_CHANGE,
    payload: data,
});
