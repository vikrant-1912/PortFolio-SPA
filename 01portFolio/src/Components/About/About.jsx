import React from "react"


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-12 xl:px-20">
               
                <div className="flex flex-col md:flex-row items-start gap-10">

                    {/* Image Section */}

          <div className="w-full md:w-5/12 flex justify-center">
          
                         <img
                            src="vikrant.jpg"
                            className="rounded-lg object-cover shadow-lg w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                            alt="Vikrant Khatana"
                        />  
                    </div>

                    {/* Text Content Section */}

                    <div className="w-full md:w-7/12 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl text-gray-900 font-bold">
                            Hi , I'm Vikrant Khatana 
                            </h2>
                            <h5 className="text-violet-400 text-xl md:text-2xl font-semibold mt-2">Software Developer | Frontend Enthusiast 
                                </h5> 
                        
                        <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
                            🎓 B.Tech CSE (Data Science) 2021 - 2025 | Galgotias University , Greater Noida 💻  <br></br><br></br>
                            
💡 Currently delving into Full-Stack Development while actively strengthening Data Structures & Algorithms using Java — with the goal of transitioning into a Software Development Engineer (SDE) role. <br></br><br></br>
🎓 Successfully Completed an AI-ML Virtual Internship by "Google for developers", along with other curated programs under AICTE Eduskills Academy, enhancing both technical and practical exposure. <br></br> <br></br>
<h5 className="text-xl font-bold font-">🧑‍💻 Built and Deployed live Projects : </h5><br></br>
📱 → Includes a Fully Responsive Amazon UI Clone and a Personal Portfolio SPA. <br></br>
📱 → Version-controlled and hosted on GitHub & Deployed via Vercel and Netlify. <br></br>
                        </p>
{/* <br></br>
<br></br> */}

  {/* Skills */}

  <div className="mt-8">
<h3 className="iitalic text-3xl text-violet-800 font-extrabold hover:underline cursor-pointer mb-4"> My Skills💡  
</h3>
{/* <br></br>
<br></br> */}

<div className="space-y-4 text-left text-gray-700 text-sm md:text-base">
    <div>
        <h5 className="text-2xl text-orange-400 font-extrabold">Frontend Languages</h5> 

🚀 HTML5 ,🎨 CSS3 , ⚙️ Javascript , ⚙️ Typescript , ⚛️ React.js 

</div>

<div>
<h5 className="text-2xl text-orange-400 font-extrabold">Backend </h5>

🟩 Node.js , 🛠️ Express.js , ⚡Next.js
</div>
<div>

<h5 className="text-2xl text-red-500 font-extrabold"> Database </h5>

🐬 MySQL 
</div>

<div>
<h5 className="text-2xl text-red-500 font-extrabold">Tools/Platforms </h5>

🧰 Git , 🐙GitHub , 🖥️ VS Code , ▲ Vercel , Netlify
</div>

<div>
<h5 className="text-2xl text-shadow-teal-800 font-extrabold">Frameworks/Libraries</h5>

⚛️ React , 🔀 Router, 🔄 Redux , 🎨 Tailwind CSS
</div>

<div>
<h5 className="text-2xl text-shadow-teal-800 font-extrabold">Other Concepts</h5>

🔌 API Integration, 📱 Responsive Web Design , 🧠 CS Fundamentals
</div>

<div>
<h5 className="text-2xl text-shadow-teal-800 font-extrabold">Problem Solving</h5>

 📊 Core DSA (Java) ☕
 </div>
 </div>

{/* <br></br>
<br></br>
<br></br>
<br></br> */}

<p className="mt-8 text-lg text-red-500 font-medium">
                        Learning never stops 🚀 —building & improving every day.
                        💙
                    </p>
                          
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}