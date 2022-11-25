import { AuthState } from './AuthContext';


type AuthAction = 
    |{ type: 'signIn' }
    |{ type: 'changeIcon', payload: string }
    |{ type: 'logout' }
    |{ type: 'changeUsername', payload: string }


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'Not username yet'
            }
        case 'changeIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined,    
            }    
        case 'changeUsername':
            return{
                ...state,
                userName: action.payload
            }    

        default:
            return state;
    }
}