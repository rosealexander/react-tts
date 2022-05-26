import "./styles.css";
import TtsButtonExample from "./TtsButtonExample";
import WrappedExample from "./TtsWrappedComponent";
import TtsBaseExample from "./TtsBaseExample";

const App = () =>
    <div className="layout">
        <header>react-tts example</header>
        <TtsBaseExample />
        <WrappedExample />
        <TtsButtonExample />
        <footer>MIT License (c) 2022</footer>
    </div>

export default App;
