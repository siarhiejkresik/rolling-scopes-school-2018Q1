import {
    EnumFromString
} from "./utils.js";

const _VIEWS = 'welcome login menu game result';
const _CONTROLS = 'play next login logout return';
const _CARD_STATE = 'opened closed disabled';
const _DIFFICULTIES = 'easy normal hard';

const VIEWS = EnumFromString(_VIEWS, '.');
const CONTROLS = EnumFromString(_CONTROLS, '.');
const CARD_STATE = EnumFromString(_CARD_STATE);

const DIFFICULTIES = EnumFromString(_DIFFICULTIES);
const DIFFICULTIES_BUTTONS = EnumFromString(_DIFFICULTIES, '.')




export {
    VIEWS,
    CONTROLS,
    CARD_STATE,
    DIFFICULTIES,
    DIFFICULTIES_BUTTONS
};