# react-tts example
### [https://rosealexander.github.io/react-tts/](https://rosealexander.github.io/react-tts/)

### Tts wrapper
```jsx
import {Tts} from "lib/index.mjs";

const WrappedExample = Tts(props =>
    <div {...props}>
        {props.children}
    </div>)

const Component = () =>
    <WrappedExample>
        <button>
            <b>A</b>
            <i>B</i>
            C
        </button>
    </WrappedExample>
```

### TtsButton
```jsx
import {TtsButton} from "lib/index.mjs";
import {useState} from "react";

const ButtonExample = props => {
    const [speaking, setSpeaking] = useState(false)
    const [paused, setPaused] = useState(false)
    return (
        <TtsButton
            text={props.text}
            variant={speaking ? paused ? 'resume' : 'pause' : paused ? 'resume' : 'speak'}
            speak={<div>▶️</div>}
            pause={<div>⏸</div>}
            resume={<div>⏯️</div>}
            onStart={() => setSpeaking(true)}
            onPause={() => setPaused(true)}
            onResume={() => setPaused(false)}
            onEnd={() => setSpeaking(false)}
        >
            {props.children}
        </TtsButton>
    )
}
```

### TtsBase
```jsx
import {TtsBase} from "react-tts";

const TtsBaseExample = () => <TtsBase autoplay text={"Text to speech will autoplay each time component renders"}/>
```
[![MIT License][license-shield]][license-url] 

[license-shield]: https://img.shields.io/github/license/rosealexander/react-tts.svg?style=for-the-badge
[license-url]: https://github.com/rosealexander/react-tts/blob/master/LICENSE
