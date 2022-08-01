import plugin from 'tailwindcss/plugin'

export default plugin(({ matchUtilities, theme }) => {
  matchUtilities<string>(
    {
      'inline-bricks': (value) => ({
        marginTop: `calc(${value} * -1)`,
        marginLeft: `calc(${value} * -1)`,
        '& > *': {
          marginTop: value,
          marginLeft: value,
        },
      }),
      'inline-bricks-x': (value) => ({
        marginLeft: `calc(${value} * -1)`,
        '& > *': {
          marginLeft: value,
        },
      }),
      'inline-bricks-y': (value) => ({
        marginTop: `calc(${value} * -1)`,
        '& > *': {
          marginTop: value,
        },
      }),
    },
    {
      values: theme('space'),
    }
  )
})
