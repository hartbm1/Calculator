import React from "react";
import useSound from "use-sound";
import countSfx from './sound/count.mp3'

const Sound = () => {
    const [play] = useSound(countSfx);
    return (
        <button onClick={play}>count!</button>
    )
};



export default Sound;

