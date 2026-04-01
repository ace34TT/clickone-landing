import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { LenisProvider } from './LenisProvider'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <LenisProvider>
      <ThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ThemeProvider>
    </LenisProvider>
  )
}
