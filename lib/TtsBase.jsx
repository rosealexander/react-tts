/* TtsBase.jsx */

import {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from "react";
import useTts from "./useTts";

const TtsBase = forwardRef(({
    Component, autoplay, lang, pitch, rate, text, voice, volume,
    onEnd, onError, onPause, onResume, onStart, synth, ...props
}, ref) => {
    const {cancel: ttsCancel, pause: ttsPause, resume: ttsResume, speak: ttsSpeak} = useTts(synth)
    const [play, setPlay] = useState(autoplay)

    const getInnerText = (obj) => {
        const text = []
        const dfs = (children) => {
            if (!Array.isArray(children)) children = [children]
            children.forEach(child => {
                switch (typeof child){
                    case "undefined":
                        break
                    case "symbol":
                        break
                    case "bigint":
                        break;
                    case "object":
                        return dfs(child.props?.children)
                    default:
                        text.push(child)
                }
            })
        }
        dfs(obj)
        return text.join(' ')
    }

    const handle = (method, callback) => {
        try {
            method()
            if (!!callback) callback()
        } catch (e) {
            if (!!onError) onError(e)
            throw e
        }
    }

    const cancel = () => handle(ttsCancel, onEnd)
    const pause = () => handle(ttsPause, onPause)
    const resume = () => handle(ttsResume, onResume)
    const speak = () => {
        cancel()
        const speech = new SpeechSynthesisUtterance(text || getInnerText(props.children));
        if (!!lang) speech.lang = lang
        if (!!onEnd) speech.onend = onEnd
        if (!!onStart) speech.onstart = onStart
        if (!!pitch) speech.pitch = pitch
        if (!!rate) speech.rate = rate
        if (!!voice) speech.voice = voice
        if (!!volume) speech.volume = volume
        return handle(() => {
            ttsResume()
            ttsSpeak(speech)
        }, null)
    }

    const speakCallback = useCallback(speak, [speak]);
    useEffect(() => {
        if (play) {
            setPlay(false)
            speakCallback()
        }
    }, [play, speakCallback]);

    useImperativeHandle((typeof ref === 'object' ? ref : null), () => ({cancel, pause, resume, speak}))

    return !!Component ? <Component {...props}/> : <div {...props}/>
})

TtsBase.defaultProps = {
    Component: null,
    autoplay: false,
    lang: document.documentElement.lang,
    pitch: null,
    rate: null,
    text: '',
    voice: null,
    volume: null,
    onEnd: null,
    onError: null,
    onPause: null,
    onResume: null,
    onStart: null,
    synth: window.speechSynthesis
}

export default TtsBase;
