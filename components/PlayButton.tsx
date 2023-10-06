import {FaPlay} from 'react-icons/fa'
const PlayButton = () => {
    return ( 
        <button className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        p-4
        drop-shadow-md
        group-hover:opacity-100
        hover:scale-110
        border-[2px]
        border-white
    ">
        <FaPlay/>
    </button>
     );
}
 
export default PlayButton;