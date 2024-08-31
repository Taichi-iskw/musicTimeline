import { createContext, useReducer, ReactNode, useContext } from 'react';

type Action =
    | { type: 'ADD_ARTIST'; payload: { id: string; name: string } }
    | { type: 'REMOVE_ARTIST'; payload: string }
    | { type: 'CLEAR_ARTISTS' };

type Artist = {
    id: string;
    name: string;
};

type State = Artist[];

const initialState: State = [];

const artistIdReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_ARTIST':
            if (state.find((artist) => artist.id === action.payload.id)) return [...state];
            return [...state, { id: action.payload.id, name: action.payload.name }];
        case 'REMOVE_ARTIST':
            return state.filter((artist) => artist.id !== action.payload);
        case 'CLEAR_ARTISTS':
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
