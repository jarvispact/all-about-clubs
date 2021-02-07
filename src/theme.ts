export const theme = {
    breakpoint: {
        s: '640px',
        m: '768px',
        l: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
    },
    spacing: {
        xs: '0.15rem',
        s: '0.25rem',
        m: '0.5rem',
        l: '0.75rem',
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
    },
    fontSize: {
        xs: '0.75rem',
        s: '0.875rem',
        m: '1rem',
        l: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    fontFamily: {
        sans: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ].join(', '),
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(', '),
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(', '),
    },
    color: {
        white: '#ffffff',
        black: '#000000',
        gray50: '#FAFAFA',
        gray100: '#F5F5F5',
        gray200: '#E5E5E5',
        gray300: '#D4D4D4',
        gray400: '#A3A3A3',
        gray500: '#737373',
        gray600: '#525252',
        gray700: '#404040',
        gray800: '#262626',
        gray900: '#171717',
        primary500: '#01C13B',
    },
    boxShadow: {
        appbar: '0px 1px 3px 2px rgba(0,0,0,0.49)',
    },
} as const;

export type Theme = typeof theme;
