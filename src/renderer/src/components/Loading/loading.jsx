import i18next from 'i18next'
import { useTranslation, Trans } from 'react-i18next'
import './loading.css'
import React, { useState, useEffect } from 'react';


export default function Loading(){
    const {t} = useTranslation()

    const [updateState, setUpdateState] = useState('')

    const [isDbsOpened, setIsDbOpened] = useState(false);
    const [isLoadingFinished, setIsLoadingFinished] = useState(false);

    if(isDbsOpened) setTimeout(() => {
        window.Api.loadingStateChanger('Finished')
    }, 2000);

    window.Api.openDb().then((res) => setIsDbOpened(res))
    console.log('Db State: '+isDbsOpened)

    window.Api.updateStater((e,res) => setUpdateState(res))
    console.log('Update State: '+updateState)

    return (<>
    <div className="parent">
        <div className="loader"></div>
        <div className="p"><p>{t('loading')}</p></div>
        <div><p id="updateState">{t(updateState)}</p></div>

    </div>
    </>)
}