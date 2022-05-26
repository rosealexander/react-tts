import {useState} from "react";
import {TtsButton} from "react-tts";

const TtsButtonExample = () => {
    const [speaking, setSpeaking] = useState(false)
    const [paused, setPaused] = useState(false)
    const [text, setText] = useState('button example')
    return (
        <div className={'buttonExample'}>
            <input
                className={'buttonExampleInput'}
                defaultValue={text}
                onChange={event => setText(event.target.value)}
            />
            <TtsButton
                text={text}
                variant={speaking ? paused ? 'resume' : 'pause' : paused ? 'resume' : 'speak'}
                speak={<div>▶️</div>}
                pause={<div>⏸</div>}
                resume={<div>⏯️</div>}
                onStart={() => setSpeaking(true)}
                onPause={() => setPaused(true)}
                onResume={() => setPaused(false)}
                onEnd={() => setSpeaking(false)}
            />
        </div>
    )
}

export default TtsButtonExample
