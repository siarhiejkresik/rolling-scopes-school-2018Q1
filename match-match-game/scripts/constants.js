import {
    EnumFromString
} from "./utils.js";

const _VIEWS = 'welcome login menu game result';
const _CONTROLS = 'play next login logout return';
const _CARD_STATE = 'opened closed disabled';
const _DIFFICULTIES = 'easy normal hard';
const _PLAYER = 'firstname lastname email back difficulty';
const _THEMES = 'circle microbial-mat corners fancy underwater';

const VIEWS = EnumFromString(_VIEWS, '.');
const CONTROLS = EnumFromString(_CONTROLS, '.');
const CARD_STATE = EnumFromString(_CARD_STATE);

const DIFFICULTIES = EnumFromString(_DIFFICULTIES);
const DIFFICULTY_BUTTONS = EnumFromString(_DIFFICULTIES, '.')
const PLAYER = EnumFromString(_PLAYER);
const THEMES = _THEMES.trim().split(/ +/);

const DB_KEY = 'matchmatch';
const DEFAULT_DB = {
    lastPlayerId: null,
    players: []
}

const LEVELS = {
    easy: {
        cards: 2,
        types: 1,
        sequence: 2,
    },
    normal: {
        cards: 24,
        types: 12,
        sequence: 2,
    },
    hard: {
        cards: 24,
        types: 8,
        sequence: 3,
    },
}

export {
    VIEWS,
    CONTROLS,
    CARD_STATE,
    THEMES,
    DIFFICULTIES,
    DIFFICULTY_BUTTONS,
    PLAYER,
    DB_KEY,
    DEFAULT_DB,
    LEVELS
};