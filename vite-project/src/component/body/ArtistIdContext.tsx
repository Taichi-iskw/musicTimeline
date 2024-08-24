import { createContext, useReducer, ReactNode, useContext } from 'react';

type Action =
    | { type: 'ADD_ARTIST_ID'; payload: string }
    | { type: 'REMOVE_ARTIST_ID'; payload: string }
    | { type: 'CLEAR_ARTIST_IDS' };

type State = string[];

const initialState: State = [];

const artistIdReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_ARTIST_ID':
            if (state.includes(action.payload)) return [...state];
            return [...state, action.payload];
        case 'REMOVE_ARTIST_ID':
            return state.filter((id) => id !== action.payload);
        case 'CLEAR_ARTIST_IDS':
            return [];
        default:
            return state;
    }
};

type contextDef = {
    state: State;
    dispatch: React.Dispatch<Action>;
};
const ArtistIdContext = createContext<contextDef | undefined>(undefined);

// reducerの変数と関数をcontextで呼び出せるようにする
export const ArtistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(artistIdReducer, initialState);
    return (
        <ArtistIdContext.Provider value={{ state, dispatch }}>{children}</ArtistIdContext.Provider>
    );
};

// context呼び出し
export const useArtistId = () => {
    const context = useContext(ArtistIdContext);
    if (!context) {
        throw new Error('useArtistId must be used within an ArtistProvider');
    }
    return context;
};
