import { useState } from "react"

const colors = {
  primary: '#c5f8c7',
  secondary: '#4CAF50',
}

const Home = () => {
  const [imagePostion, setImagePostion] = useState([
    {
      top: '220px',
      left: '100px',
      name: 'Ankita',
      color: '#C5F8C7',
      textColor: '#4CAF50',
      company: 'ML Engineer @Firework',
      rating: '4.9',
      description: 'Working my way to build the world\'s future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ',
      image: '/M3.svg',

    },
    {
      top: '60px',
      left: '250px',
      name: 'Keshav Bathla',
      color: '#7ABD87',
      textColor: '#609B6C',
      company: 'SDE-1 @Groww',
      rating: '5.0',
      description: 'A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor',
      image: '/M5.svg'
    },
    {
      top: '10px',
      left: '500px',
      name: 'Saumya Singh',
      color: '#C5F8C7',
      textColor: '#4CAF50',
      company: 'Software Engineer @Red Hat',
      rating: '5.0',
      description: 'Engineer @RedHat | Program Manager 20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner 19 | Mentor GCI',
      image: '/M4.svg'
    },
    {
      top: '80px',
      left: '750px',
      color: '#7ABD87',
      textColor: '#609B6C',
      name: 'Saurav Pal',
      company: 'SDE-2 @Amazon',
      rating: '5.0',
      description: 'I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.',
      image: '/M2.svg',
    },
    {
      top: '310px',
      left: '920px',
      color: '#C5F8C7',
      textColor: '#4CAF50',
      name: 'Prankur Gupta',
      company: 'SDE @Amazon',
      rating: '4.9',
      description: 'I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.',
      image: '/M1.svg',
    },
    {
      top: '500px',
      left: '920px',
      name: 'Keshav Bathla',
      color: '#7ABD87',
      textColor: '#609B6C',
      company: 'SDE-1 @Groww',
      rating: '5.0',
      description: 'A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor',
      image: '/M5.svg'
    },
    {
      top: '550px',
      left: '750px',
      color: '#C5F8C7',
      textColor: '#4CAF50',
      name: 'Saumya Singh',
      company: 'Software Engineer @Red Hat',
      rating: '5.0',
      description: 'Engineer @RedHat | Program Manager 20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner 19 | Mentor GCI',
      image: '/M4.svg'
    },
    {
      top: '500px',
      left: '500px',
      name: 'Ankita',
      color: '#C5F8C7',
      textColor: '#4CAF50',
      company: 'ML Engineer @Firework',
      rating: '4.9',
      description: 'Working my way to build the world\'s future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ',
      image: '/M3.svg'
    },
    {
      top: '500px',
      left: '400px',
      name: 'Saurav Pal',
      color: '#7ABD87',
      textColor: '#609B6C',
      company: 'SDE-2 @Amazon',
      rating: '5.0',
      description: 'I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.',
      image: '/M2.svg',
    },
    {
      top: '450px',
      left: '100px',
      color: '#C5F8C7',
      textColor: '#4CAF50',
      name: 'Prankur Gupta',
      company: 'SDE @Amazon',
      rating: '4.9',
      description: 'I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.',
      image: '/M1.svg',

    }
  ]

  )


  const handleGoBack = () => {
    //remove the last element from array and add it to front
    const temp = imagePostion.pop()
    imagePostion.unshift(temp)
    setImagePostion([...imagePostion])

  }

  const handleGoForward = () => {
    //remove the first element from array and add it to last
    const temp = imagePostion.shift()
    imagePostion.push(temp)
    setImagePostion([...imagePostion])
  }
  return (
    <div className="flex w-[100vw] relative justify-between h-[100vh]">
      <div className="h-[100vh] pb-[80px] pl-[60px] flex flex-col justify-end">
        <p style={{
          color: imagePostion[2].textColor
        }} className={`text-[56px] transition-all duration-300 font-[700]`}>
          {imagePostion[2].rating}
        </p>
        <p className={`text-[48px] transition-all duration-300 whitespace-nowrap font-[600] `}>
          {imagePostion[2].name}
        </p>
        <p className={`text-[28px] transition-all duration-300 whitespace-nowrap font-[500] `}>
          {imagePostion[2].company}
        </p>
        <p className={`text-[18px] transition-all duration-300 w-[20vw] mt-[50px]  font-[400] `}>
          {
            imagePostion[2].description
          }
        </p>
        <button style={{
          backgroundColor: imagePostion[2].textColor,

        }} className="w-[300px] shadow-2xl mt-[50px] shadow-[#609B6C] h-[60px] font-[600] text-white text-[28px] ">
          Book a session
        </button>
      </div>
      <div>
        <div className="w-[70vw] overflow-hidden h-[70vh] relative justify-center" style={{
          clipPath: 'ellipse(61% 94% at 62% 2%)',
          backgroundColor: imagePostion[2].color
        }}>
          <img src='/Semi.svg' className="w-[70vw] top-[-80px] absolute mt-[10rem]" />
          <img src={'/M1.svg'} style={{
            top: imagePostion[0].top,
            left: imagePostion[0].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M2.svg'} style={{
            top: imagePostion[1].top,
            left: imagePostion[1].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M4.svg'} style={{
            top: imagePostion[2].top,
            left: imagePostion[2].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M5.svg'} style={{
            top: imagePostion[3].top,
            left: imagePostion[3].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M3.svg'} style={{
            top: imagePostion[4].top,
            left: imagePostion[4].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M1.svg'} style={{
            top: imagePostion[5].top,
            left: imagePostion[5].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M2.svg'} style={{
            top: imagePostion[6].top,
            left: imagePostion[6].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M3.svg'} style={{
            top: imagePostion[7].top,
            left: imagePostion[7].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M4.svg'} style={{
            top: imagePostion[8].top,
            left: imagePostion[8].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />
          <img src={'/M5.svg'} style={{
            top: imagePostion[9].top,
            left: imagePostion[9].left
          }} className={`h-[25%] transition-all duration-300 absolute`} />

        </div>
      </div>
      <div className="absolute right-[350px] bottom-[20vh]">
        <img src={imagePostion[2].image} />
      </div>
      <div onClick={handleGoBack} className="absolute right-[50vw] rounded-full h-[50px] w-[50px] flex items-center justify-center bottom-[30vh]" style={{
        backgroundColor: imagePostion[2].textColor
      }}>
        <img className="h-[30px]" src={'/Arrow.svg'} />
      </div>
      <div onClick={handleGoForward} className="absolute right-[10vw] rounded-full h-[50px] w-[50px] flex items-center justify-center bottom-[30vh]" style={{
        backgroundColor: imagePostion[2].textColor
      }}>
        <img className="h-[30px]" src={'/Arrow.svg'} />
      </div>
      <div className="absolute w-[300px] h-[70px] flex items-center justify-center rounded-xl bg-[rgba(0,162,7,0.17)] right-[350px] bottom-[8vh]">
        <p className={`text-[28px] transition-all duration-300 whitespace-nowrap font-[500] `}>
          {imagePostion[2].name}
        </p>
      </div>
    </div>
  )
}

export default Home
