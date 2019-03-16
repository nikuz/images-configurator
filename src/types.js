// @flow

export type Item = {
    id: string,
    text?: string,
    icon?: string,
};

export type Font = {
    id: string,
    icon: string,
};

export type ChangePayload = {
    id: string,
    value: string,
};
