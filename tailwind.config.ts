import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                widthSmaller: { max: '240px' },
                widthSmall: '748px',
                widthMid: '991px',
                widthLarge: '1024px',
                widthSuper: '1440px',
                widthUltra: '2560px',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                sans: ['Poppins', 'sans-serif'],
            },
            letterSpacing: {
                '1px': '1px',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                'gray-border': '#a4b4c3',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            boxShadow: {
                buttonShadow: '0px 6px 22px rgba(6, 34, 51, 0.22)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            animation: {
                'left-right': 'leftRight 6s ease-in-out infinite',
                'top-down': 'topDown 4s ease-in-out infinite',
                growWidth: 'growWidth 1.5s forwards',
                growWidthReverse: 'growWidthReverse 1.5s forwards',
            },
            keyframes: {
                leftRight: {
                    '0%': { transform: 'translateX(-15px)' },
                    '50%': { transform: 'translateX(45px)' },
                    '100%': { transform: 'translateX(-15px)' },
                },
                topDown: {
                    '0%': { transform: 'translateY(200px)' },
                    '50%': { transform: 'translateY(225px)' },
                    '100%': { transform: 'translateY(200px)' },
                },
                stretchdelay: {
                    '0%, 40%, 100%': { transform: 'scaleY(0.4)' },
                    '20%': { transform: 'scaleY(1.0)' },
                },
                growWidth: {
                    '0%': {
                        width: '0',
                    },
                    '100%': {
                        width: '100%',
                    },
                    },
                    growWidthReverse: {
                    '0%': {
                        width: '100%',
                    },
                    '100%': {
                        width: '0',
                    },
                },
            },
        },
    },
    plugins: [tailwindcssAnimate],
}

export default config
