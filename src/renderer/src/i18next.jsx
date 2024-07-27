import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Languagedetector from 'i18next-browser-languagedetector'

i18next
.use(initReactI18next)
.use(Languagedetector)
.init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                loading: 'Loading',
                updateCheck: 'Checking for updates... Current version is',
                updateFound: 'Update found! Will be downloaded after you close the app. Current version is',
                updateNotFound: 'Your app is up to date. Current version is',
                updateDownloaded: 'Update is downloaded. Current version is',
                play: 'Play'
            }
        },
        tr: {
            translation: {
                loading: 'Yükleniyor',
                updateCheck: 'Guncellemeler kontrol ediliyor... Su an ki surum',
                updateFound: 'Guncelleme bulundu! Programi kapattiksan sonra indirilecek. Su an ki surum',
                updateNotFound: 'Programiniz guncel. Su an ki surum',
                updateDownloaded: 'Guncelleme indirildi. Su an ki surum',
                play: 'Oyna'
            }
        }
    }
})