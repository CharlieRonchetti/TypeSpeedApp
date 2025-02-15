import React from 'react';

const EpisodeList = ({ episodeData, setEpisodeNum }) => {
    const episodeSplit = episodeData.map((episode, index) => ({
        episodeWords: episode.title.split("-")
    }))

    // Event Handlers
    const handleEpisodeClick = (episodeID) => {
        setEpisodeNum(episodeID+1);
        console.log(episodeSplit);
    }

    const isEvenOddEpisode = (index) => {
        if (index % 2 === 1) {
            return true
        } else {
            return null
        }
    }

  return (
    <>
        <div className='flex justify-center gap-3 flex-wrap flex-row p-3 overflow-auto max-h-40 scrollbar xl:hidden xl:justify-start xl:max-h-full'>
            {episodeData.map((episodeData, index) => (
                <div key={index} className="bg-zinc-700 flex justify-center items-center w-20 h-10 rounded-xl" onClick={() => handleEpisodeClick(index)}>
                    <p className="cursor-pointer">{index+1}</p>
                </div> 
            ))}
        </div>
        <div className='hidden overflow-auto scrollbar xl:w-full xl:block xl:justify-start xl:max-h-full'>
            {episodeSplit.map((episodeData, index) => (
                
                <div key={index} className={`xl:max-h-full w-full" + ${isEvenOddEpisode(index) ? "bg-zinc-800" : "bg-zinc-900"}`} onClick={() => handleEpisodeClick(index)}>
                    <div className="hidden xl:flex xl:px-2 py-2">
                        <p className={"line-clamp-1 hover:text-violet-400 overflow-ellipsis cursor-pointer"}>{episodeData.episodeWords[1] ? `Episode ${index+1} - ${episodeData.episodeWords[1]}` : `Episode ${index+1}`}</p>
                    </div> 
                </div>
            ))}
        </div>
    </>
  )
}

export default EpisodeList