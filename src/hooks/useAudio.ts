import { useSound } from "use-sound";

const useAudio = (sound: string): any => {
    const soundPath = `/sounds/${sound}.mp3`;
    const [play] = useSound(soundPath, { volume: 0.5 });

    return [play];
};

export default useAudio;
