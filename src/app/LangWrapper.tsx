'use client'

import React from 'react'
import { IntlProvider } from 'react-intl'
import LangContext, { Lang } from './LangContext'
import enData from '../../languages/en.json'
import jaData from '../../languages/jp.json'

const LangWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = React.useState<Lang>('en');

  const loadData = React.useMemo(() => {
    if (lang === 'ja') {
      return jaData;
    } else if (lang === 'en') {
      return enData
    }
    return {}
  }, [lang]);

  const switchLang = () => {
    setLang(prev => prev === 'en' ? 'ja' : 'en');
  };

  return (
    <LangContext.Provider value={{
      lang, switchLang
    }}>
      <IntlProvider
        locale={lang}
        messages={loadData}
      >
        {children}
      </IntlProvider>
    </LangContext.Provider>
  )
}

export default LangWrapper;
