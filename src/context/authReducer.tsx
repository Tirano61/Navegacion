import { AuthState } from './AuthContext';


type AuthAction = { type: 'signIn' }


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggdIn: true,
                usrName: 'Not username yet'
            }
        default:
            return state;
    }
}