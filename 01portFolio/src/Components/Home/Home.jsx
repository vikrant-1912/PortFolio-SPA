    import React from "react"
    import { Link } from "react-router-dom";


    export default function Home() {
        return (
            <div className="mx-auto w-full max-w-7xl">
                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h3 className="text-4xl font-bold sm:text-5xl">
                            My Resume,
                                <span className="hidden sm:block text-4xl">Download Here</span>
                            </h3>

    
                            <Link
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-yellow-700 rounded-lg hover:opacity-75"
                                to="/Vikrant_Frontend_Resume.pdf"                //     for Downloading Resume , we add "to" prop with the file name i.e PDF Resume file in "Public File"    //
    target="_blank"
    download={"Vikrant_Resume.pdf"}
    rel="noopener noreferrer"            //     for Security Best Practices , we add this "rel = noopener noreferrer"     //
    >  
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Download Now
                            </Link> 


    <br></br>

                    <h4 className="text-3xl font-extrabold text-red-900"> 
                        Connect with Me on LinkedIn 
                    </h4>
                            <Link 
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
                                to="https://www.linkedin.com/in/vikrant1912"   
                            >
                            
                            
                                LinkedIn
                                <svg
                                    // fill="white"
                                    width="30"
                                    height="25"
                                    // xmlns=""
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                {/* &nbsp;  */}       
                            </Link>
                            <br></br>

                        <h4 className="text-3xl font-extrabold text-green-900"> 
                        For Projects, My GitHub 
                    </h4>
                            <Link 
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-violet-700 rounded-lg hover:opacity-75"
                                to="https://github.com/vikrant-1912"   
                            >
                            
                                GitHub Profile
                                <svg
                                    // fill="white"
                                    width="30"
                                    height="25"
                                    // xmlns=""
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                {/* &nbsp;  */}       
                            </Link>
                            <br></br>

                            <h4 className="text-3xl font-extrabold text-blue-800"> 
                        My Social Media 
                    </h4>
                    <Link 
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-pink-700 rounded-lg hover:opacity-75"
                                to="https://instagram.com/vikrant_7017"   
                            >
                                Instagram
                                <svg
                                    // fill="white"
                                    width="30"
                                    height="25"
                                    // xmlns=""
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                {/* &nbsp;  */}       
                            </Link>

                        </div>
                    </div>

                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                        <img className="w-150 h-100" src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" alt="image1" />
                    </div>
                </aside>

        <h4 className="italic text-black sm:text-black-100 text-4xl font-medium md:col-auto mx-1 my-1 hover:opacity-55"> 💼 Practical Experience </h4> <br></br>
        <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50">
                    1. Amazon Clone 
                </h5>
                <p className="text-fuchsia-500 mt-1.5 mb-3">
                    🛒 E-commerce UI clone (March 2025 – Present) <br></br> </p>
                    
                    <span className="text-orange-700 font-bold hover:lowercase"> <a href="https://amazon-clone-1-black-six.vercel.app"> 🔗 LIVE DEMO </a> </span>
                    <p className="mt-2" > 
                    This clone replicates essential e-commerce functionality such as: <br></br>

    🛒 Cart management with real-time item count. <br></br>

    🔍 Search filtering with product displays.<br></br>

    🌓 Dark mode toggle.<br></br>

    🧾 Product modal for detailed item view.<br></br>

    👋 Welcome pop-up, cart tab, and mobile-friendly layout.<br></br>
    <br></br>

    I designed this project to offer a smooth, app-like User-Experience — [ <span className="text-green-800 font-semibold underline"> NOTE: NO BACKEND USED</span> ].
                </p> <br></br>
                <p className="text-violet-600 text-2xl italic mb-1">What I Learned: </p>
    1. Structuring a scalable HTML/CSS/JS project from scratch. <br></br>

    2. Creating reusable components in pure JavaScript.<br></br>

    3. Implementing mobile-first design principles and accessibility.<br></br>

    4. Building Deployable UIs with Vercel as a Hosting Platform <br></br>
    <br></br>
    <div>
    <h4 className="text-xl font-bold text-blue-400 hover:opacity-50 mb-1"> 📦 Tech Stacks : </h4> </div>
    <div>
    1. HTML5 <br></br>

    2. CSS3 <br></br>

    3. JavaScript (ES6) <br></br>

    4. Vercel and Netlify (Hosting/CI)
    </div>

        

                <br></br> <br></br>
                <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50">
                    2. Tic-Tac-Toe 
                </h5>
                <p className="text-fuchsia-500 mt-1">
                    🛒 Tic-Tac-Toe - A UI Web Game (April 2025) <br></br> </p>
                    <p className=""> <br></br>
                        <span className="text-orange-700 font-bold hover:lowercase"> <a href="https://tictactoe-game1912.netlify.app"> 🔗 LIVE DEMO </a> </span> <br></br>
                    <p className="mb-2"></p>  A classic Tic Tac Toe game built from scratch using HTML, CSS, and Vanilla JavaScript. Features include interactive game logic, win/draw detection, and a sleek UI. The project emphasizes JavaScript DOM manipulation, conditional logic, and responsive design, providing an engaging user experience across all devices. <br></br><br></br>
            <p className="text-violet-600 text-2xl italic mb-1">What I Learned: </p> 
            1. DOM traversal and manipulation. <br></br>

        2. Implementing game logic and win conditions. <br></br>

        3. Structuring code using clean, modular JS.
                </p>
                <br></br>
    <div>
    <h4 className="text-xl font-bold text-blue-400 hover:opacity-50 mb-1"> 📦 Tech Stacks : </h4> </div>
    <div>
    1. HTML5 <br></br>

    2. CSS3 <br></br>

    3. JavaScript (ES6) <br></br>

    4. Netlify and Vercel (Hosting/CI)
    </div>
    <br></br>

                <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50">
                    3. Currency Convertor
                </h5>
                <p className="text-fuchsia-500 mt-1">
                    💱 A Currency Convertion WebApp Using API (April 2025) <br></br> </p>
                    <p> 
                        <br></br>
                        <span className="text-orange-700  font-bold hover:lowercase "> <a href="https://github.com/vikrant-1912/Currency-convertor-JS"> 🔗 HOST LINK  </a> </span> <br></br>
                    <p className="mt-2"></p>   A responsive currency conversion web application built using HTML5, CSS3, and JavaScript. Utilizes the Fetch API to retrieve real-time exchange rates from a third-party API. The app features a clean UI, dynamic dropdowns for currency selection, and accurate conversion results based on live data.
    Demonstrates proficiency in API integration, asynchronous JavaScript, and responsive UI design. <br></br> <br></br>
    <p className="text-violet-600 text-2xl italic mb-1">What I Learned: </p>
    1. Working with external Fetch (Frontend) APIs. <br></br>

    2. Handling JSON responses and asynchronous logic with fetch(). <br></br>

    3. Building clean, responsive, user-friendly interfaces. <br></br>

    <br></br>

    <div>
    <h4 className="text-xl font-bold text-blue-400 hover:opacity-50 mb-1"> 📦 Tech Stacks : </h4> </div>
    <div>
    1. HTML5 <br></br>

    2. CSS3 <br></br>

    3. JavaScript (ES6) <br></br>

    </div>

                </p>
                <br></br> <br></br>

                <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50">
                    4. ⚛️ React , 🔀 Router & 🔄 Redux Mini Projects Journey (May 2025 – Present) 
                </h5> <br></br>
                <p> 
                    Built ⚛️ <span className="text-fuchsia-500">React </span> Mini-projects to master Frontend Skills + <span className="text-fuchsia-500"> 🔄 Redux</span> (State Management). <br></br> <br></br>

        <p className="text-violet-500 text-3xl italic font-bold underline hover:opacity-50">Mini Projects : </p> <br></br>
    🚀 First React App (Create React App to Vite Migration) – Built an interactive UI project using CRA.<br></br>
    🎨 Background Color Changer – Demonstrates use of props and dynamic UI updates. <br></br>

    🧩 Card Component UI (Props + Tailwind CSS) – A visually appealing card design component. <br></br>

    🔐 Password Generator – Built with useState, event handling, and custom hooks. <br></br>

    🔢 Counter App – Shows clean implementation of useState and reusable components. <br></br>

    💱 Currency Converter (Custom Hooks) – A responsive app fetching real-time exchange rates.<br></br>
    
    </p>
    <br></br>
    <br></br>
    <h4 className="italic sm:text-black-100 text-4xl font-medium md:col-auto mx-1 my-1 hover:opacity-50">🎓Internship &🧑‍💼Certifications </h4> <br></br>
                

    <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50 transition duration-200">
                    1. AICTE Eduskills – Full Stack Web Development Virtual Internship 
                </h5>

    <p className="text-violet-600 text-2xl italic mt-1">Duration: Oct 2024 – Dec 2024
    </p>
    <p className="mt-2">
        Completed a structured virtual internship covering the fundamentals of full stack web development including HTML, CSS, JavaScript, frontend-backend integration, and hands-on project work.
    </p>

    <a
        href="public/Certificates/Web-Dev-Certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-red-700 hover:text-green-800 transition-all font-medium"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        >
            <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9.414a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0010.586 3H10V2a1 1 0 00-1-1H9zm1 3.414L14.586 9H11a1 1 0 01-1-1V5.414z" />
        </svg>
        See Certificate
    </a>

    <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50 duration-200">
                    2. Google for Developers – AI-ML Virtual Internship 
                </h5>

    <p className="text-violet-600 text-2xl italic mt-1">Duration: Jan 2025 – Mar 2025
    </p>
    <p className="mt-1">
        Gained practical experience in core AI and Machine Learning concepts using Python. Participated in real-world problem-solving tasks and collaborative model-building projects under Google’s AI-ML curriculum.

    </p> 

    <a
        href="public/Certificates/AI-ML-Certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-red-700 hover:text-green-800 transition-all font-medium"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        >
            <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9.414a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0010.586 3H10V2a1 1 0 00-1-1H9zm1 3.414L14.586 9H11a1 1 0 01-1-1V5.414z" />
        </svg>
        See Certificate
    </a>
                
    <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50 duration-200">
                    3. Eduskills Academy – Python Full Stack Web Developer Internship
                </h5>

    <p className="text-violet-600 text-2xl italic mt-1">Duration: March 2025 – May 2025
    </p>
    <p className="mt-1">
    Completed training in full stack Python development including Django, REST APIs, and frontend/backend integration. Received course completion certificate; & Also, My internship certificate will be issued after June 1st, 2025.
    </p>

    <a
        href="public/Certificates/Python-Certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-red-700 hover:text-green-800 transition-all font-medium"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        >
            <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9.414a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0010.586 3H10V2a1 1 0 00-1-1H9zm1 3.414L14.586 9H11a1 1 0 01-1-1V5.414z" />
        </svg>
        See Certificate
    </a>
    <h5 className="text-3xl font-bold text-blue-900 hover:opacity-50 duration-200">
                    4. Codec Technologies - MERN Stack Developer Internship
                </h5>

    <p className="text-violet-600 text-2xl italic mt-1">Duration: May 2025 – June 2025
    </p>

    <p className="mt-1">
        Currently undergoing a comprehensive internship program focused on MERN stack development. Gaining hands-on experience in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. This internship is enhancing my full stack development skills and preparing me for real-world projects.
    
    </p>

    <a
        href="public/Certificates/Vikrant-MERN-Certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-red-700 hover:text-green-800 transition-all font-medium"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        >
            <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9.414a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0010.586 3H10V2a1 1 0 00-1-1H9zm1 3.414L14.586 9H11a1 1 0 01-1-1V5.414z" />
        </svg>
        See Certificate
    </a>
                <div className="grid  place-items-center sm:mt-20">
                    <img className="sm:w-100 w-50" src="https://as1.ftcdn.net/v2/jpg/02/14/87/96/1000_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg" alt="image2" />
                </div>

                <h1 className="text-center text-violet-400 text-2xl sm:text-5xl py-10 font-medium">Vikrant Khatana , Software Developer</h1>
            </div>
        );
    }
