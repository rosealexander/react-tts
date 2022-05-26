import {TtsBase} from "react-tts";

const text = 'react-tts can be used to autoplay text inside of components when they render'

const TtsBaseExample = () =>
    <div className={'autoplayExample'}>
        <TtsBase autoplay text={text}/>
        {text}
    </div>

export default TtsBaseExample;
