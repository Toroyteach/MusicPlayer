import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';


export default function About() {

    //initiate tge translator
    const { t } = useTranslation();


    return (
        <div style={{ height: "86vh", overflow: "auto" }}>
            <Tabs
                defaultActiveKey="fans"
                id="justify-tab-example"
                className="mb-1"
                justify
            >
                <Tab eventKey="fans" title={t("for-fans-and-music-lovers")} className="text-body">
                    Hello there glad you made it. I love you so much that i decided to create this amazing application for you. Lets be honest and realistic your here because you already know me or you were coarsed by the social inter-web into joining. Well either way your time shall not be wasted nor shall it be disappointed. With this system comes a bunch of features that i can guarantee you will grasp a good chunk of your attention. You know me for being a self proclaimed Disk Jockey(DJ), i Have being making mixes since back in high school. Some of you must have heard a couple of them and might want to listen to them again if not again and again, lucky you since i was keeping them. I recently gave more priority to House and Edm genre. But more genres shall follow obviously.

                    I decided to build this application since am Software Person hehe. So i took very long break from the social life so i can focus on something that can be cool and vuala here we are. I have designed and developed this application wholey to address most of the needs that I couldn’t be offered by those platforms and added even more sophisticated features on top of it so that it stands out or addresses the attention magnet I was referring to early on. Here you will be able to download or listen to those mixes live and have a cool immersion while your at it. For those of you who are techy and would like to get to know the intricacies that come into the realization of this system then head over to the developers section and youl get to see what i used to achieve this note here your alone haha. You can also head over to my youtube channel (Toroyteachs) to see me describe and commentate on every feature and also a basic tutorial around the application.

                    Enough intro let me talk about what to expect. On the dashboard page you will get to see your stats for the entire time you will be on the application from listening to downloaded to minutes listened to comments your made on a mix item etc.
                    On the Music section being the main reason why we are here. You will be able to select the mix item to listen to wait couple seconds to have it buffer then you can listen them. you will be able to favorite some mix items so that you can select that favorite playlist and only listen to the selected ones. You can randomize the playlist, you can replay the mix item after it has finished so you can enjoy it in loo. You will be able to seek forward and back(something some platform offer as payed version similar to micro transaction something i do not like haha). there is also a back 30sec and forward 1min button to move precisely to your desired  position. I have also implemented cookies so that next time when you log in you can resume from where you were without any hicks, so do accept my cookies request hehe. BTW the music section has its own navigation that you can move about so you can also appreciate what other features i have in-store for you. This include Online (Listeners) which shall make you be able to see other logged in users and what exact mix they would be listening to at that time. This is as close as other users can come to each other apart from commenting which i shall mention later. But don't dispare if your an introvert like i am for i have made it such that you can go the profile section and have this feature disabled meaning you wont be able to see other user online activiy and also they wont be able to see yours. So choice shall be yours always. This is almost similar to online status in any social media platform WhatsApp as an example.

                    Picture of the day which is cool high resolution image of NASA that they take using there equipments and provide them to me together with there description and title. This photos change daily which each day bringing an even cooler image. so be sure to login in daily to get to see them hehe.

                    You will be able to give me a comment on the mix time and reply to other users comments about the same and have a nested conversation right there, i think this is among the main reasons i built this application so i can get the feedback from you people. You will also in your profile section be able to disable this so that only you and i can see the comments you have written. Note this option is a one way option such that you if you disable that feature the comments from that time hence forth shall take the effect and vice varsa.

                    Notifications is quite self explanatory. Youl get all notifications on any new content uploaded or any communication that will be made that concerns the application.

                    And thus the About section which is for this part now where you are and will get to read about this application.
                    On the Account section we have the profile and the logout. i wont talk about the Logout but in the profile section is where your settings are and where you can update your profile details as well.

                    Since i would have collected your information and some Data then good development practice dictate that i make it able for you to delete your details, and hence i have given you an option to delete your account and all your data that i have collected. I have also made this decision a cool one haha. try and delete your account and see what happens, its a bitter sweet experience.


                    You should have or will notice that in all my mixes i don’t have any drops of my initials or my names anywhere, its just minutes long of straight music without interruptions. I personally don't like that idea, i like anonymity but then again i should make people be able to identify the person responsible behind this, so this application should do that part for me haha. Also you’l note on the cover images i have chosen for the mix items are cool animal paintings. Ill give you a hint they are not animals.

                    There is also a multi lingual feature that i have added so if your from another not English speaking country you can change it to your own and continue enjoying the application, you can also change to you favorite international language and learn as you navigate around the application.

                    Please Enjoy my work and shout it out for me for that's the much appreciation i could ask for. i took 6 months developing and designing it just for you. Finally do not be selfish and share this work to your peers and friends for i am sure at most 3 mixes may impress them not to give me gangsta points but to make you enjoy and cure your boredom for a little while. My portfolio website is https://toroyteach.com and the music application website is https://music.toroyteach.com
                </Tab>
                <Tab eventKey="devs" title={t("for-developers-and-recruiters")} className="text-body">
                    🎉 Greetings! I'm Anthony Toroitich, your friendly neighborhood Software Engineer with a whopping 7 years in the game. Armed with a Bachelor's degree in Computer Science, I've cooked up something special with a dash of ReactJS and a sprinkle of NestJS.
                    <br /><br/>
                    💻 This digital symphony I've crafted isn't your run-of-the-mill app – it's an ode to audio awesomeness. Picture this: you, the user, diving into a seamless experience, blissfully unaware of the intricate web of DevOps magic happening behind the scenes.
                    <br /><br/>
                    🚀 I'm not just a code-slinger; I'm a maestro orchestrating the perfect audio playback. Recognizing the challenge of handling sizable audio files, I've devised a nifty solution. A clever shell script steps in, breaking down these musical marvels into bite-sized 100kb chunks. The app then dynamically fetches, decodes, and serenades your ears with the sweet sounds, all thanks to an AudioContext wizard I conjured up.
                    <br /><br/>
                    🎶 Now, about the data dance. Why Firebase NoSQL, you ask? Well, it's not just a choice; it's a symphony of logic. The dynamic data flow within the app needed a robust partner, and Firebase fit the bill. It cradles and nurtures user-generated content like a musical garden.
                    <br /><br/>
                    🏗️ Behind the digital curtain, I've fine-tuned the infrastructure – picture me as a web server maestro. Linux VPS, Nginx, Let's Encrypt – I've curated a blend of tools and packages to create a robust stage for our musical journey.
                    <br /><br/>
                    🕰️ But what's a symphony without an audience? Enter WebSockets. I've woven them into the fabric of the app, letting users peek into each other's playlists, creating a vibe of shared musical moments. It's not just an app; it's a community, where the tech meets the beat.
                    <br /><br/>
                    🎧 So, buckle up and join me on this audio escapade. It's not just an app; it's a journey, where every line of code hums in harmony with the melody of innovation.
                </Tab>
                <Tab eventKey="support" title={t("support-and-good-course")} className="text-body">
                    HeHe now that you are here. I am quite sure there many good souls who like to see others do better or good. if your that kind or person why not extend that curtesy and donate to my patreon. i have a plee written and described there. otherwise i enjoy and love what i do i wont stop neither loose motivation. but i just though why not put it there. Fun fact in all of my mixes you will not hear my nome dropped anywhere
                    <br /><a className="text-primary text-gradient font-weight-bold" href='https://www.patreon.com/toroyteach'>Patreon</a>
                </Tab>
            </Tabs>
        </div>
    )
}
