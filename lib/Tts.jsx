/* Tts.jsx */

import {useEffect, useRef, useState} from "react";
import TtsBase from "./TtsBase";

const Tts = Component =>
    function Hoc({autoplay=false, disableClick=false, variant='speak', ...props}) {
        const baseRef = useRef()
        const [isLoading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(false)
        }, [isLoading])

        return (
            <TtsBase
                Component={Component}
                onClick={baseRef.current && !disableClick ? baseRef.current[variant] : null}
                ref={baseRef}
                autoplay={autoplay}
                variant={variant}
                {...props}
            />
        )
    }

export default Tts
