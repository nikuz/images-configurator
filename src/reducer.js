// @flow

export type InitialStateType = {

};

type Action = {
    type: string,
    payload: any,
};

const initialState = {

};

export default function configurator(state: InitialStateType = initialState, action: Action) {
    // const { type, payload } = action;
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}
