'use client'

import React from 'react'
import LangContext from './LangContext';
import { FormattedMessage } from 'react-intl';


const i18 = {
  HELLO: < FormattedMessage id="HELLO" />,
  WORLD: < FormattedMessage id="WORLD" />,
  BYE: <FormattedMessage id="BYE" />
}


const Home = () => {
  const { lang, switchLang } = React.useContext(LangContext);

  return (
    <>
      <h1>{lang}</h1>
      <button onClick={() => switchLang && switchLang()}>switch language</button>
      <h1> {i18.HELLO}  {i18.WORLD}</h1>
      <h1> {i18.BYE} </h1>
    </>
  )
}



export default Home;
