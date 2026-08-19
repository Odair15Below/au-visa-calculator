import quiz_data from '../data/appData.json';
import { alertMessageForSelection, scorePointsTest } from '../scoring/pointsTest';

const isDarkMode = typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches;

const emptyScore = scorePointsTest({});

const initialState = {
    darkMode: isDarkMode,
    data: quiz_data,
    selectedTabIndex: 0,
    alertMessage: '',
    scoreBoard: {
        points: emptyScore.pathwayScores[189],
        pathwayScores: emptyScore.pathwayScores,
        warnings: emptyScore.warnings,
        selectedOptions: {}
    }
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case OPTION_CHANGED: {
            const newSelectedOptions = Object.assign({}, state.scoreBoard.selectedOptions);
            newSelectedOptions[action.payload.category] = {
                option: action.payload.option,
                points: action.payload.points
            };

            const newSelectedTabIndex = (state.selectedTabIndex + 1) <= (quiz_data.length - 1)
                ? (state.selectedTabIndex + 1)
                : (quiz_data.length - 1);

            const result = scorePointsTest(newSelectedOptions);
            const message = alertMessageForSelection(action.payload, result);

            return {
                ...state,
                selectedTabIndex: newSelectedTabIndex,
                scoreBoard: {
                    ...state.scoreBoard,
                    points: result.pathwayScores[189],
                    pathwayScores: result.pathwayScores,
                    warnings: result.warnings,
                    selectedOptions: newSelectedOptions
                },
                alertMessage: message
            };
        }
        case DARKMODE_CHANGED:
            return { ...state, darkMode: action.payload };
        case SELECTEDCATEGORYTAB_CHANGED:
            return { ...state, selectedTabIndex: action.payload };
        case ALERTMESSAGE_CLOSED:
            return { ...state, alertMessage: '' };
        default:
            return state;
    }
}

export const getTotalPoints = (state) => state.app.scoreBoard.points;
export const getPathwayScores = (state) => state.app.scoreBoard.pathwayScores || { 189: 0, 190: 5, 491: 15 };
export const getScoreWarnings = (state) => state.app.scoreBoard.warnings || [];
export const getData = (state) => state.app.data;
export const getDarkModePreference = (state) => state.app.darkMode;
export const getSelectedOptions = (state) => state.app.scoreBoard.selectedOptions;
export const getSelectedTabIndex = (state) => state.app.selectedTabIndex;
export const getAlertMessage = (state) => state.app.alertMessage;

export const OPTION_CHANGED = "app/optionChanged";
export const DARKMODE_CHANGED = "app/darkModeChanged";
export const SELECTEDCATEGORYTAB_CHANGED = "app/selectedCategoryTabChanged";
export const ALERTMESSAGE_CLOSED = "app/AlertMessageClosed";

export const selectOption = (option) => ({
    type: OPTION_CHANGED,
    payload: option
});

export const changeDarkMode = (isDarkMode) => ({
    type: DARKMODE_CHANGED,
    payload: isDarkMode
});

export const changeSelectedCategoryTab = (newSelectedTabIndex) => ({
    type: SELECTEDCATEGORYTAB_CHANGED,
    payload: newSelectedTabIndex
});

export const closeAlertMessage = () => ({
    type: ALERTMESSAGE_CLOSED
});
