import { FC, useEffect, useRef } from 'react';
import Player from 'video.js/dist/types/player';
import videojs from 'video.js';

import './style.css';
import 'video.js/dist/video-js.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Audio />
    </div>
  );
};

type AudioProps = {};

const Audio = (props: AudioProps) => {
  const videoJsRef = useRef<Player | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const videoJsInstance = videojs(audio, {
        sources: {
          src: 'http://thinkingform.com/wp-content/uploads/2017/09/video-sample-mp4.mp4?_=1',
          type: 'video/mp4',
        },
      });

      videoJsRef.current = videoJsInstance;
    }
  }, []);

  return (
    <div data-vjs-player>
      <audio ref={audioRef} {...props} />
    </div>
  );
};
