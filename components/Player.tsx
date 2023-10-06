'use client';

import usePlayer from "@/hooks/usePlayer";
import useSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import PlayerContent from "./PlayerContent";
import { useRef } from "react";
const Player = () => {
    const player = usePlayer();
    const {song} = useSongById(player.activeId);
    const songRef = useRef<HTMLAudioElement | null>(null); 

    const songUrl = useLoadSongUrl(song!);

    if(!song || !songUrl || !player.activeId){
        return null;
    }
    return ( 
        <div 
            className="
                fixed
                bottom-0
                bg-black
                w-full
                py-2
                h-[80px]
                px-4
            "
        >
            <PlayerContent
                key={songUrl}
                song={song}
                songUrl={songUrl}
                songRef={songRef}
            />
        </div>
     );
}
 
export default Player;