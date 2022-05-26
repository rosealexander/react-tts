/* TtsButton.jsx */

import Tts from "./Tts";

const TtsButton = Tts((props) => {
    const Component = props[props.variant]
    return {...Component, props: {...Component.props, onClick: props.onClick}}
})

export default TtsButton
