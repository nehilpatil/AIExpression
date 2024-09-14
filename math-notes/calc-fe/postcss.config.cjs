module.exports = {
    plugins: {
      'postcss-preset-mantine': {},  // Correct plugin name with an empty config object
      'postcss-simple-vars': {
        variables: {
          'mantine-breakpoint-xs': '36em',    // Small screen (XS)
          'mantine-breakpoint-sm': '48em',    // Small-medium screen (SM)
          'mantine-breakpoint-md': '62em',    // Medium screen (MD)
          'mantine-breakpoint-lg': '75em',    // Large screen (LG)
          'mantine-breakpoint-xl': '88em',   // Extra-large screen (XL)
        }
      }
    }
  };
  