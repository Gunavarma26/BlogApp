//DataContext.jsx

import { format } from "date-fns";
import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
  
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [postImg, setPostImg] = useState('')

    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const [editPostImg, setEditPostImg] = useState('')
    const navigate = useNavigate()

   // signin page datas
    let [regesters, setRegesters] = useState(true)
    let [signName, setSignName] =useState('')
    let [signPassword, setSignPassword] =useState('')

    // login page datas
    let [sign, setSign] = useState(true)
    let [login, setLogin] = useState(true)

    let [userName, setUserName] = useState('null')
    let [userPassword, setUserPassword] = useState('null')



    const [post, setPost] = useState([
      {
        id:1,
        title:"PRAY IN THE SPIRIT",
        img:`https://i.pinimg.com/564x/41/84/0b/41840bc5338be943ab49e335bb0f8b96.jpg`,
        datetime:"Dec 26, 2023 18:30 PM",
        body:`I like running. I even entered the Comrades Marathon one year, together with fifteen thousand other runners. All our friends and supporters were cheering as we left Pietermaritzburg behind. I felt like I could run all day. We ran up Polly Shorts, to the Lion Park and I wasn’t even panting. When I reached Drummond, about the halfway point, the sun was beating down on me. It was midday, the crowds were dispersing. That was the time of the drudgery, the time when we needed to persevere to take hold of what waited at the end of that race.

        In our life on earth we also have to persevere. In Philippians 3:12 the apostle Paul says, “Not that I have already obtained all this, or have already been made perfect, but I press on to take hold of that for which Christ Jesus took hold of me.” Are you weary and tired today? This is when you need to hold on to your faith and pray in the Holy Spirit. He will give you His power to persevere and take hold of the riches of God.
        
        Holy Spirit of God, I pray to You today. Give me the strength to endure and persevere. Help me to hold on to my faith so that I can in the end take hold of the riches of God. Amen.
        .`
      },
      {
        id:2,
        title:" A LETTER ",
        img:"https://i.pinimg.com/564x/b1/fe/0a/b1fe0a57065282aae70b4ca218500a01.jpg",
        datetime:"Dec 27, 2023 18:30 PM",
        body:`Many times I’ve watched the tractor steadily ploughing through the land. We do that all day and every day when we prepare the land for planting the seed. In time we can then gather in the harvest. But to gather the harvest, we have to go through the drudgery of ploughing. When the tractor breaks down, we have to fix it and start ploughing again. We have to plough in the rain and in the sun, so that we can gather the harvest in the end.

        The same is true in our daily lives. We have to press on with patience and perseverance, proclaiming the Gospel so that the Lord can gather the harvest when He returns. We have to be a letter of Christ that other people can read and turn their lives over to the Lord our God. It is not always easy to have the patience, endurance and perseverance to be a letter from Christ in this life. But when we persevere, we will inherit the prize that can never perish, spoil or fade, and which God keeps in heaven for us (1 Pet. 1:4). The Lord will renew our strength when we are weak.
        
        Holy Spirit of God, give me patience, endurance and perseverance to proclaim the good news of Jesus Christ until He returns. Amen.
        .`
      },
      {
        id:3,
        title:"BUILT ON THE ROCK",
        img:'https://i.pinimg.com/564x/c1/07/ac/c107ac87be5824fb7ad4237040a15514.jpg',
        datetime:"Dec 28, 2023 18:30 PM",
        body:`We should beware of false teachings. If we disobey God's Word, we will be like the foolish man who built his house on the sand, which eventually collapsed. If we obey God's Word, we will be like the wise man, who built a sturdy, immovable house on the rock that withstands all of the storms of life.

        "'Anyone who listens to my teaching and follows it is wise, like a person who builds a house on solid rock. Though the rain comes in torrents and the floodwaters rise and the winds beat against that house, it won’t collapse because it is built on bedrock. But anyone who hears my teaching and doesn’t obey it is foolish, like a person who builds a house on sand. When the rains and floods come and the winds beat against that house, it will collapse with a mighty crash.
        When Jesus had finished saying these things, the crowds were amazed at his teaching, for he taught with real authority - quite unlike their teachers of religious law."`
      },
        
      {
        id:4,
        title:"ANT",
        img:"https://i.pinimg.com/564x/a6/84/24/a684249896e25179ee59fb2209befff8.jpg",
        datetime:"Dec 28, 2023 18:30 PM",
        body:`The ant, though individually small, contributes to grand tapestry of communal progress. Through meticulous cooperation and a shared sense of purpose, they construct intricate architectures that withstand the test of time. The ant's unwavering commitment to its duties is a testament to the power of unity and the impact of collective endeavor. Their ceaseless toil echoes the sentiment that even the smallest contributions, when harmonized, yield monumental results.

        Observing the ant, one witnesses not only a lesson in industry but also a narrative of adaptability. In the face of ever-changing environments, ants showcase an innate resilience and an ability to navigate challenges with remarkable ingenuity. The ant's journey is a reminder that obstacles are not roadblocks but opportunities for innovation and creative problem-solving.Moreover, the ant's intricate dance within the ecosystem underscores the interconnectedness of all living beings. Their role as environmental stewards and decomposers emphasizes the importance of every creature in maintaining the delicate balance of nature. It prompts reflection on our responsibility as stewards of our own communities and ecosystems, encouraging a sense of shared accountability for the well-being of our planet.`
      },
      {
        id:5,
        title:"MUSIC",
        img:`https://i.pinimg.com/564x/32/a5/4b/32a54b938cc4fb76876c859d719f9173.jpg`,
        datetime:"Dec 28, 2023 18:30 PM",
        body:`Music, the ethereal tapestry woven from the threads of sound, possesses an extraordinary ability to resonate with the depths of our souls. It transcends linguistic barriers, forging a universal language that speaks directly to the heart. In the symphony of life, music becomes the conductor, orchestrating emotions with unparalleled finesse. It has the power to evoke joy that dances like sunlight on water, to paint landscapes of melancholy that mirror the shadows of our own existence. Through its harmonies and melodies, music captures the essence of human experience, transforming ordinary moments into extraordinary memories. It serves as a timeless companion, guiding us through the labyrinth of emotions, offering solace in times of sorrow and celebration in moments of triumph. Each note is a brushstroke on the canvas of our lives, creating a masterpiece of memories. From the rhythmic heartbeat of a drum to the soaring crescendo of a violin, music is the heartbeat of the universe, echoing the rhythm of our own existence. It is the soundtrack to our journey, the language of the ineffable, and the bridge that connects us all in a symphony of shared humanity.`
      },
      {
        id:6,
        title:"GUIDING LIGHT",
        img:`https://i.pinimg.com/564x/5c/09/03/5c09036db6ea554ca787dde8550b1847.jpg`,
        datetime:"Dec 28, 2023 18:30 PM",
        body:`In the symphony of affection that resonates within a father's love, each note carries the melody of boundless devotion and unwavering support. A father's love is a profound sonnet, written with the ink of sacrifices and sung with the resonance of enduring care. From the earliest lullabies whispered to a sleepy infant to the profound guidance offered in moments of uncertainty, a father's love is an unwritten promise of steadfast presence.It is a love that weathers the storms, standing as a sturdy lighthouse guiding through the tumultuous seas of life. In the tapestry of paternal love, threads of encouragement and wisdom are woven, creating a fabric that shields and warms the heart. A father's love is a sanctuary, a safe harbor where acceptance is unconditional, and understanding flows like a constant river.
        
        The depth of a father's love is revealed not only in moments of celebration but also in the quiet, mundane instances that make up the mosaic of daily life. It is in the shared laughter over shared stories, the silent support in times of defeat, and the gentle nudges towards growth. A father's love is a timeless legacy, an inheritance of values and lessons that echo through generations.`
      },
      {
        id:7,
        title:"GUARD THE GOOD DEPOSIT",
        img:'https://i.pinimg.com/564x/f4/d1/af/f4d1af8353a67e3fc1fe7d0eed7e0dd1.jpg',
        datetime:"Dec 29, 2023 19:35 PM",
        body:`On this last day of the month I pray that God will fill you with His Spirit. I pray that you, with the help of the Holy Spirit who lives in you, will guard the good deposit that was entrusted to you. You received faith and grace and the gifts and the fruit of the Spirit. Guard it and use it to win others for the kingdom of God.

        I want to pray today for every person reading this. Many of us are tired and weary. We have not attained much, nor have we been perfected. But I pray that we will press on to lay hold of the crown that Christ Jesus keeps for us in heaven. I pray that He will give us the courage, the strength and the power of the Holy Spirit to live life one day at a time. We cannot always live on top of the mountain; we have to come down to the valley where the people are. We have to be with them to win them for Jesus. I pray that from today onwards our lives will become meaningful.
        Lord, everything I do from today onwards I want to do for You. I want to live like Your child. I want to serve You with all my heart. Amen.`
      },
      {
        id:8,
        title:"NEVER GIVE UP",
        img:`https://i.pinimg.com/564x/e4/2e/f8/e42ef89a0aa4b967745c264218906de1.jpg`,
        datetime:"Dec 28, 2023 18:30 PM",
        body:`Journey of "never giving up" is a pilgrimage through the valleys of disappointment and over the peaks of determination. It's a testament to the human spirit's tenacity, pushing against the gravitational pull of despair. The road may be fraught with obstacles, but it is in overcoming these hurdles that character is forged. Every setback is a chapter in the narrative of triumph, a lesson etched in the annals of personal growth. In the symphony of life, the refrain of resilience plays loudly, drowning out the whispers of doubt and despair.

        Moreover, the concept of "never give up" extends beyond individual pursuits—it is a collective anthem for humanity. History is replete with tales of those who, against insurmountable odds, stood firm in their resolve. It's a philosophy that permeates the stories of inventors, leaders, and visionaries, each verse echoing the sentiment that greatness is often born from unwavering determination.In essence, "never give up" is not merely a phrase; it's a philosophy that binds the human experience. It's a torchbearer, lighting the way in the darkest of hours, and a guiding star that navigates the seas of uncertainty. The power of these three words lies in their simplicity and universality—a timeless beacon that fuels the fires of hope in the pursuit of dreams.`
      },

      {
        id:9,
        title:"UNCONDITIONAL JOY",
        img:`https://i.pinimg.com/564x/4e/d0/43/4ed043c2ff48ab82913a7aecacfaea45.jpg`,
        datetime:"Dec 27, 2023 22:30 PM",
        body:`Our joy shouldn't depend on material things or on our circumstances. Instead, our joy should be in the Lord. We simply need to rejoice in the Lord, because He is our God, our strength, and our hope.

        "Even though the fig trees have no blossoms,
        and there are no grapes on the vines;
        even though the olive crop fails,
        and the fields lie empty and barren;
        even though the flocks die in the fields,
        and the cattle barns are empty,
        yet I will rejoice in the Lord!
        I will be joyful in the God of my salvation!
        The Sovereign Lord is my strength!
        He makes me as surefooted as a deer,
        able to tread upon the heights."`
      },
        

    ])

    useEffect(()=>{
      const filteredResults = post.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase()) || 
      ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResult(filteredResults.slice().reverse());

    },[post, search])

    const handleSubmit = (e) =>{
      e.preventDefault();
      const id = post.length ? post[post.length - 1].id + 1 : 1 ;
      const datetime = format(new Date(), 'MMM dd, yyyy pp');
      const newPost = {id, title:postTitle, img:postImg, datetime, body:postBody};
      const allPosts = [...post, newPost];
      setPost(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/') 

    }
    
    const handleEdit = (id) => {
        
      const datetime = format(new Date(), 'MMM dd, yyyy pp');
      const updatedPost = {id, title:editTitle, img:editPostImg ,datetime, body:editBody};
      setPost(post.map(post => post.id === id ? {...updatedPost} : post));
      setEditTitle('')
      setEditTitle([])
      setEditBody('')
      navigate('/')
    

    }

    const handleDelete = (id) =>{
      const postsList = post.filter(post => post.id !== id );
      setPost(postsList)
      navigate('/') 

    }

    return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        post,
        handleDelete,
        handleEdit,
        editBody,
        setEditBody,
        editTitle,
        setEditTitle,
        postImg,
        setPostImg,
        editPostImg,
        setEditPostImg,
        login,
        setLogin,
        sign,
        setSign,
        setSignName,
        signName,
        setSignPassword,
        signPassword,
        setUserName,
        userName,
        setUserPassword,
        userPassword,
        setRegesters,
        regesters
      }}
    >
      {children}
    </DataContext.Provider>
    );
};

export default DataContext;