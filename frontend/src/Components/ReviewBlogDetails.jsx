import React from 'react'
import base_url from '../URL'
import '../Assets/css/ReviewBlogDetails.css'

function ReviewBlogDetails({ blog }) {
    let options = []
    options.push(blog.graphics)
    options.push(blog.story)
    options.push(blog.gameplay)
    options.push(blog.soundtracks)
    options.push(blog.difficulty)
    options.push(blog.grind)
    options.push(blog.gametime)
    options.push(blog.bugs)

    console.log(options)
  return (
    <div>
        <h3>Review Blog</h3>
        <h3>{ blog.author }</h3>
        <p>{ blog.body }</p>

        {/* graphics section */}
        <p>Graphics</p>
        <label key="1">
            <input
               type="checkbox"
               disabled
               checked={options.includes('you forget what reality is')}
            />
            You forget what reality is
         </label>
         <label key="2">
            <input
               type="checkbox"
               disabled
               checked={options.includes('beautiful')}
            />
            Beautiful
         </label>
         <label key="3">
            <input
               type="checkbox"
               disabled
               checked={options.includes('good')}
            />
            Good
         </label>
         <label key="4">
            <input
               type="checkbox"
               disabled
               checked={options.includes('decent')}
            />
            Decent
         </label>
         <label key="5">
            <input
               type="checkbox"
               disabled
               checked={options.includes('bad')}
            />
            Bad
         </label>
         <label key="6">
            <input
               type="checkbox"
               disabled
               checked={options.includes('paint')}
            />
            Paint.exe
         </label>
         
         <p>Story</p>
        <label key="7">
            <input
               type="checkbox"
               disabled
               checked={options.includes('will make you cry')}
            />
            Will make you cry
         </label>
         <label key="8">
            <input
               type="checkbox"
               disabled
               checked={options.includes('amazing')}
            />
            Amazing
         </label>
         <label key="9">
            <input
               type="checkbox"
               disabled
               checked={options.includes('good')}
            />
            Good
         </label>
         <label key="10">
            <input
               type="checkbox"
               disabled
               checked={options.includes('average')}
            />
            Average
         </label>
         <label key="11">
            <input
               type="checkbox"
               disabled
               checked={options.includes('meh')}
            />
            Meh
         </label>
         <label key="12">
            <input
               type="checkbox"
               disabled
               checked={options.includes('bad')}
            />
            Bad
         </label>

         <p>Gameplay</p>
        <label key="13">
            <input
               type="checkbox"
               disabled
               checked={options.includes('very good')}
            />
            Very good
         </label>
         <label key="14">
            <input
               type="checkbox"
               disabled
               checked={options.includes('good')}
            />
            Good
         </label>
         <label key="15">
            <input
               type="checkbox"
               disabled
               checked={options.includes('point and click')}
            />
            Point and click
         </label>
         <label key="16">
            <input
               type="checkbox"
               disabled
               checked={options.includes('meh')}
            />
            Meh
         </label>
         <label key="17">
            <input
               type="checkbox"
               disabled
               checked={options.includes('starring at wall is better')}
            />
            Starring at wall is better
         </label>
         <label key="18">
            <input
               type="checkbox"
               disabled
               checked={options.includes('worse')}
            />
            Worse
         </label>

         <p>SoundTracks</p>
        <label key="19">
            <input
               type="checkbox"
               disabled
               checked={options.includes('fantastic')}
            />
            Fantastic
         </label>
         <label key="20">
            <input
               type="checkbox"
               disabled
               checked={options.includes('very good')}
            />
            Very good
         </label>
         <label key="21">
            <input
               type="checkbox"
               disabled
               checked={options.includes('good')}
            />
            Good
         </label>
         <label key="22">
            <input
               type="checkbox"
               disabled
               checked={options.includes('not too bad')}
            />
            Not too bad
         </label>
         <label key="23">
            <input
               type="checkbox"
               disabled
               checked={options.includes('bad')}
            />
            Bad
         </label>
         <label key="24">
            <input
               type="checkbox"
               disabled
               checked={options.includes('worse')}
            />
            Worse
         </label>

         <p>Difficulty</p>
        <label key="25">
            <input
               type="checkbox"
               disabled
               checked={options.includes('adws')}
            />
            Just press A, D, W, S
         </label>
         <label key="26">
            <input
               type="checkbox"
               disabled
               checked={options.includes('easy')}
            />
            Easy
         </label>
         <label key="27">
            <input
               type="checkbox"
               disabled
               checked={options.includes('significant brain usage')}
            />
            Significant brain usage
         </label>
         <label key="28">
            <input
               type="checkbox"
               disabled
               checked={options.includes('balanced')}
            />
            Balanced
         </label>
         <label key="29">
            <input
               type="checkbox"
               disabled
               checked={options.includes('easy to learn, hard to master')}
            />
            Easy to learn, hard to master
         </label>
         <label key="30">
            <input
               type="checkbox"
               disabled
               checked={options.includes('difficult')}
            />
            Difficult
         </label>

         <p>Grind</p>
        <label key="31">
            <input
               type="checkbox"
               disabled
               checked={options.includes('nothing to grind')}
            />
            Nothing to grind
         </label>
         <label key="32">
            <input
               type="checkbox"
               disabled
               checked={options.includes('only if you care about ranks/leaderboards')}
            />
            Only if you care about ranks/leaderboards
         </label>
         <label key="33">
            <input
               type="checkbox"
               disabled
               checked={options.includes('not necessary for progress')}
            />
            Not neccessary for progress
         </label>
         <label key="34">
            <input
               type="checkbox"
               disabled
               checked={options.includes('average grind level')}
            />
            Average grind level
         </label>
         <label key="35">
            <input
               type="checkbox"
               disabled
               checked={options.includes('too much grinding')}
            />
            Too much grinding
         </label>
         <label key="36">
            <input
               type="checkbox"
               disabled
               checked={options.includes('you will need a second life for grinding')}
            />
            You will need a second life for grinding
         </label>

         <p>Game Time</p>
        <label key="37">
            <input
               type="checkbox"
               disabled
               checked={options.includes('long enough for a cup of coffee')}
            />
            Long enough for a cup of coffee
         </label>
         <label key="38">
            <input
               type="checkbox"
               disabled
               checked={options.includes('short')}
            />
            Short(2-5h)
         </label>
         <label key="39">
            <input
               type="checkbox"
               disabled
               checked={options.includes('average')}
            />
            Average(6-8h)
         </label>
         <label key="40">
            <input
               type="checkbox"
               disabled
               checked={options.includes('long')}
            />
            Long(15-20h)
         </label>
         <label key="41">
            <input
               type="checkbox"
               disabled
               checked={options.includes('very long')}
            />
            Very long(35-40h)
         </label>
         <label key="42">
            <input
               type="checkbox"
               disabled
               checked={options.includes('endless')}
            />
            Endless
         </label>

         <p>Bugs</p>
        <label key="43">
            <input
               type="checkbox"
               disabled
               checked={options.includes('found no bugs')}
            />
            Found no bugs
         </label>
         <label key="44">
            <input
               type="checkbox"
               disabled
               checked={options.includes('minor bugs')}
            />
            Minor bugs
         </label>
         <label key="45">
            <input
               type="checkbox"
               disabled
               checked={options.includes('can get annoying')}
            />
            Can get annoying
         </label>
         <label key="46">
            <input
               type="checkbox"
               disabled
               checked={options.includes('game breaking')}
            />
            Game breaking
         </label>
         <label key="47">
            <input
               type="checkbox"
               disabled
               checked={options.includes('unplayable')}
            />
            Unplayable
         </label>

        <p>Rating: { blog.rating }</p>
        {blog.images && blog.images.map((image) => (
            <img src= {base_url + '/postImage/' + image} height='300px' width='300px'/>
        ))}

        {blog.videos && blog.videos.map((video) => (
            <video controls src= {base_url + '/postImage/' + video} height='400px' width='600px' type="video/mp4"/>
        ))}
    </div>
  )
}

export default ReviewBlogDetails