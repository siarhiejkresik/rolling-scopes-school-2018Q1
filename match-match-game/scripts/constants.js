import {EnumFromString} from "./utils.js";

const _VIEWS = 'welcome login menu game result';
const _CONTROLLS = 'play next login logout return';
const _CARD_STATE = 'opened closed disabled';

const VIEWS = EnumFromString(_VIEWS, '.');
const CONTROLLS = EnumFromString(_CONTROLLS, '.');
const CARD_STATE = EnumFromString(_CARD_STATE);

export {
    VIEWS, CONTROLLS, CARD_STATE
};