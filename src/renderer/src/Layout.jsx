import { Outlet } from 'react-router-dom';
import Header from './components/Header/header'
import Loading from './components/Loading/loading'
import React, { useState, useEffect } from 'react';

export default function Layout(){

  const [LoadingState, setLoadingState] = useState('');

  window.Api.loadingStater((res) => setLoadingState(res))

  console.log(LoadingState)
  if(LoadingState === '' || LoadingState === 'Loading'){
    return <Loading />
  }
  else
  {
    return(<>

      <Header />
      <main>
        
          <Outlet />
      </main>
</>)

  }
}