
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DialogConfig {
    ref: string;
    show: boolean;
}

export interface DialogState {
    dialogs: DialogConfig[];
}

const initialState: DialogState = {
    dialogs: [],
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<DialogConfig>) => {
            if(!state.dialogs.find(d => d.ref === action.payload.ref))
                state.dialogs.push(action.payload);
        },
        toggle: (state, action: PayloadAction<DialogConfig>) => {
            const i = state.dialogs.findIndex(dc => dc.ref === action.payload.ref);
            state.dialogs[i].show = action.payload.show;
        }
    },
});

// Action creators are generated for each case reducer function
export const { toggle, init } = dialogSlice.actions

export default dialogSlice.reducer