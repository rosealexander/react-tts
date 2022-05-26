/* useTts.jsx */

const useTts = (synth = window.speechSynthesis) => {
    if (!synth) throw new Error("Your browser is not compatible, https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#speechsynthesis_2")

    return {
        paused: synth.paused,
        pending: synth.pending,
        speaking: synth.speaking,
        cancel: synth.cancel.bind(synth),
        getVoices: synth.getVoices.bind(synth),
        pause: synth.pause.bind(synth),
        resume: synth.resume.bind(synth),
        speak: synth.speak.bind(synth)
    }
}

export default useTts
