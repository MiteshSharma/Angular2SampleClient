import {Action, createFeatureSelector, createSelector, ActionReducerMap} from '@ngrx/store';

export interface State {
    loggedIn: boolean;
}

export const initialState: State = {
    loggedIn: false,
  };

export default function counterReducer(state = initialState, action: Action): State {
    console.log(action);
    switch (action.type) {
        case "Login":
            return {
                ...state,
                loggedIn: true,
              };
        default:
            return state;
    }
}

export const rootReducer = {
    counterReducer: counterReducer
};
  
export const getLoggedIn = (state: State) => state.loggedIn;

export interface AuthState {
    status: State;
}

export const reducers: ActionReducerMap<AuthState> = {
    status: counterReducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);

export const getLoggedInSelector = createSelector(
    selectAuthStatusState,
    getLoggedIn
);