import i18next from 'i18next'
import { useTranslation, Trans } from 'react-i18next'
import './loading.css'
import React, { useState, useEffect } from 'react';


export default function Loading(){
    const {t} = useTranslation()


    const [updateState, setUpdateState] = useState('')
    const [version, setVersion] = useState('')

    const [isDbsOpened, setIsDbOpened] = useState(false);
    const [isLoadingFinished, setIsLoadingFinished] = useState(false);

    if(isDbsOpened && updateState === 'updateNotFound') setTimeout(() => {
        window.Api.loadingStateChanger('Finished')
    }, 2000);

    window.Api.openDb().then((res) => setIsDbOpened(res))


    window.Api.updateStater((e,res) => setUpdateState(res))
    window.Api.getVersion((e,res) => setVersion(res))
    console.log(version)

    return (<>
    <div className="parent">
        <div className="loader"></div>
        <div className="p"><p>{t('loading')}</p></div>
        <div><p id="updateState">{t(updateState)+' v'+version}</p></div>

    </div>
    </>)
}