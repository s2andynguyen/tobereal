import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type LanguageType = {
    locale:string,
    flag: string,
    name: string,
    selected: boolean
}
const initialStateLanguage:LanguageType[] = [
    {
        locale: 'vi',
        flag: 'iconVietNam.svg',
        name: 'VietNamese',
        selected: true
      },
      {
        locale: 'en',
        flag: 'iconEnglish.svg',
        name: 'English',
        selected: false
      },
];

export const language = createSlice({
    name: 'language',
    initialState: {languages: initialStateLanguage},
    reducers: {
        chageLanguage: (state, action:PayloadAction<string>) => {
            state.languages = state.languages.map((lang) => {
                return lang.locale === action.payload 
                ? {...lang, selected: true} 
                : {...lang, selected: false} 
            })
        }
    }
})

export const {chageLanguage} = language.actions
export default language.reducer