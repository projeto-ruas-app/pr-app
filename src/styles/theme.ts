import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        primary: {
            700: '#996DFF'
        },
        secondary: {
            700: '#FBA94C'
        },
        green: {
            700: '#00875F',
            500: '#00B37E',
            300: '#04D361',
        },
        gray: {
            700: '#121214',
            600: '#202024',
            500: '#29292E',
            400: '#323238',
            300: '#7C7C8A',
            200: '#C4C4CC',
            100: '#E1E1E6',
            50: '#F5F5F9',
            0: '#FFFFFF',
        },
        blue: {
            700: '#00B2FF',
            500: '#00C8FF',
            300: '#00E5FF',
        },
        red: {
            700: '#FF5252',
            500: '#FF8A80',
            300: '#FFE0B2',
            100: '#FFF3E0'
        },
        white: '#FFFFFF'
    },
    fonts: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
    },
    sizes: {
        14: 56
    }
});