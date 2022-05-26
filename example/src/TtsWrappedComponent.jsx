import {Tts} from "react-tts";

const TtsWrapper = Tts(props =>
    <div {...props}>
        {props.children}
    </div>
)

const TtsWrappedComponent = props =>
    <TtsWrapper>
        <button>
            <b>Wrapped </b>
            <i>Component</i>
        </button>
    </TtsWrapper>

export default TtsWrappedComponent;
