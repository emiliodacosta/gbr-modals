import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['Poppins'],
    },
    fontSize: {
      '2xl': [
        '32px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      's': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'l': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'purp1': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'purp2': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'purp3': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'slight': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '400'
        }
      ],
      'm': [
        '15px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        }
      ],
      'llight': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '400'
        }
      ],
      'lmobile': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
    },
    extend: {
      aspectRatio: {
        '1/2': '1 / 2',
      },
    },
  },
  plugins: [],
}
export default config
