import React from 'react'
import banner from '../banner.png'
import Blog from "../components/blog";

const MainApp = () => {
    const blog = {
        "id": 1695652281004,
        "author": "Nguyen An",
        "subject": "Bootstrap a React app with smol developer",
        "content": "\nCertainly! Here are some lyrics:\n\n(Verse 1)\nIn the moonlight's gentle glow,\nWe danced beneath the starry show,\nOur hearts entwined, our spirits free,\nLost in this sweet symphony.\n\n(Chorus)\nOh, love, it's you I'm dreaming of,\nIn your arms, I've found my love,\nTogether we'll journey, hand in hand,\nForever, my heart's at your command.\n\n(Verse 2)\nThrough the storms and sunny days,\nIn your love, my heart always stays,\nWith every laugh and every tear,\nOur love grows stronger, year by year.\n\n(Chorus)\nOh, love, it's you I'm dreaming of,\nIn your arms, I've found my love,\nTogether we'll journey, hand in hand,\nForever, my heart's at your command.\n\n(Bridge)\nLife's a song, and you're the rhyme,\nIn your eyes, I find the time,\nTo cherish every moment, every day,\nWith you, my love, in every way.\n\n(Chorus)\nOh, love, it's you I'm dreaming of,\nIn your arms, I've found my love,\nTogether we'll journey, hand in hand,\nForever, my heart's at your command.\n\nFeel free to let me know if you'd like lyrics in a specific style or on a particular theme.",
        "shortContent": "We investigate using the smol developer AI tool to bootstrap a React app, create a browser plugin, and assist..."
    }
  return (
    <div className='container'>
        <img src={banner} className='banner' alt='banner'></img>
    <div className='main-app'>
        <div id='blogs' className='about'>
            <span>Blogs</span>
        </div>
        <div className='contain-blog'>
            <Blog> {blog} </Blog>
        </div>
    </div>
    </div>
  )
}

export default MainApp