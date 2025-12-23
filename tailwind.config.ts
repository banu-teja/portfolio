import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
				display: ['Cal Sans', 'Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				// Strict Monochrome Palette
				background: '#000000',
				surface: '#0a0a0a',       // Very subtle off-black for cards
				surfaceHighlight: '#171717', // Slightly lighter for hovers
				border: '#262626',        // Dark gray border

				// Re-mapping primitives
				gray: colors.neutral,

				// Functional colors
				primary: {
					DEFAULT: '#ffffff',
					foreground: '#000000',
				},
				secondary: {
					DEFAULT: '#171717',
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#737373', // Neutral 500
					foreground: '#a3a3a3', // Neutral 400
				},
				accent: {
					DEFAULT: '#ffffff',
					foreground: '#000000',
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				// Removed colored glows
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		}
	},

	plugins: [typography, forms, aspectRatio]
} as Config;
