
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
    value: 'light' | 'dark'
}

const initialState: ThemeState = {
    value: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload ? 'dark' : 'light';
            document.documentElement.classList.toggle('dark', action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions

export default themeSlice.reducer