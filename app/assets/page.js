
import Image from "next/image";
import Link from "next/link";

import ss1 from './img/ss1.jpeg';
import ss2 from './img/ss2.jpeg';
import ss3 from './img/ss3.jpeg';

export default function Main(){
    
    return (
        <>
        
        <h1 className="flex justify-center items-center h-[100vh] md:hidden">Content not loaded in mobile/tab. please use pc!</h1>
        <main className="hidden md:block relative" id="home">
            <div className="fixed w-full top-0 flex justify-between p-3 backdrop-blur-sm z-50">
                <h1 className="text-2xl">Dany</h1>
                <div className="flex gap-6 items-center">
                    <Link href="#home" className="transition-all hover:-translate-y-1">Home</Link>
                    <Link href="#aboutme" className="transition-all hover:-translate-y-1">About me</Link>
                    <Link href="#" className="transition-all hover:-translate-y-1">Social</Link>
                    <Link href="#project" className="transition-all hover:-translate-y-1">Project</Link>
                </div>
                <div className="hidden sm:flex">
                    <h1><span className="text-2xl"><ion-icon name="planet-outline"></ion-icon></span></h1>
                </div>
            </div>

            <div className="flex justify-center items-center h-[100vh] flex-col text-lg">
                <h1 className="text-8xl mb-8">Hey There!</h1>
                <p>Im Dany, Here is my portfolio and project i made as a hobby</p>
                <p>Minecraft Player | Programmer | Student | Content Creator</p>
            </div>
            <div className="flex justify-center items-center h-[100vh]" id="scroll">
                <div className="flex flex-col text-lg text-center">
                    <h1 className="text-8xl mb-10">BIODATA</h1>
                    <ul>
                        <li>Name : Danial</li>
                        <li>Year : 16 Years</li>
                        <li>Hobby : [Coding, Minecraft, Editing]</li>
                        <li>Status : Student</li>
                    </ul>
                    <p className="my-10">Or anything?</p>
                    <div className="flex gap-4">
                        <Link href="#" className="bg-slate-500 w-32 flex items-center justify-center h-10 rounded-full transition-all hover:scale-110 hover:translate-y-2">
                            <span className="flex mr-2"><ion-icon name="eye-outline"></ion-icon></span>Portfolio
                        </Link>
                        <Link href="#" className="bg-slate-500 w-32 flex items-center justify-center h-10 rounded-full transition-all hover:scale-110 hover:translate-y-2">
                            <span className="flex mr-2"><ion-icon name="folder-outline"></ion-icon></span>Project
                        </Link>
                        <Link href="#" className="bg-slate-500 w-32 flex items-center justify-center h-10 rounded-full transition-all hover:scale-110 hover:translate-y-2">
                            <span className="flex mr-2"><ion-icon name="compass-outline"></ion-icon></span>Contact
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-lg flex items-center justify-center h-screen gap-12 mx-60" id="aboutme">
                <h1 className="text-8xl text-center">ABOUT ME</h1>
                <p>I am Student and exciting with advancement of technology. I like to level up my skills in web development, study, programming and editing.
                 I have skills in Javascript and now i start learning framework such React and Next.js to expand my knowledges about web. 
                 I already experienced with React about 1 year ago for my responsive web and interaction with. 
                 Not only that, I've been experiencing with any framework for styling like Tailwind and Bootstrap. But i choose tailwind because its trending.</p>
            </div>

            <div className="text-center flex flex-col gap-y-12 h-screen">
                <div className="text-8xl flex gap-60 justify-center items-center">
                    <div className="flex flex-col gap-y-16">
                        <span className="hover:text-[#E44D26] hover:scale-110 transition-all cursor-pointer"><ion-icon name="logo-html5"></ion-icon></span>
                        <span className="hover:text-[#1572B6] hover:scale-110 transition-all cursor-pointer"><ion-icon name="logo-css3"></ion-icon></span>
                        <span className="hover:text-[#F0DB4F] hover:scale-110 transition-all cursor-pointer"><ion-icon name="logo-javascript"></ion-icon></span>
                    </div>
                    <div>
                        <h1 className="text-8xl">MY<br/>SKILLS</h1>
                    </div>
                    <div className="flex flex-col gap-y-16">
                        <span className="hover:text-[#61DBFA] hover:scale-110 transition-all cursor-pointer"><ion-icon name="logo-react"></ion-icon></span>
                        <span className="hover:fill-[#38bdf8] hover:scale-110 transition-all cursor-pointer fill-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" /></svg></span>
                        <span className="hover:fill-[#38bdf8] hover:scale-110 transition-all cursor-pointer fill-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#000" d="M22.67 47h99.67v73.67H22.67z"/><path data-name="original" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/></svg></span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row h-screen justify-center items-center mx-60 gap-20">
                <div className="w-[100%]">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg></span>
                </div>
                <div className="text-left text-lg">
                    <p>Im learning java since 2 years ago and had me stress because java is hard to understand and a lot of error when i do mistake like miss a line or semicolon ";". 
                    But now, im feel so pro after learning at youtube or online course and do some exercise to sharp my skills. 
                    However im still in developing learn Java and need more exercise to make my skills are improve</p>
                </div>
            </div>
            
            

            {/* Base of Project : Techonology > react/web | Search Engine | Minecraft*/}
            <section className="flex flex-col justify-center items-center h-[100vh]" id="project">
                <h1 className="text-8xl my-20 text-center">MINECRAFT</h1>
                <div className="flex gap-8">
                    <div className="w-52 h-96 bg-slate-500 transition-all hover:scale-105 cursor-pointer">
                        <Image src={ss1} className="h-full object-cover"/>
                    </div>
                    <div className="w-52 h-96 bg-slate-500 transition-all hover:scale-105 cursor-pointer">
                        <Image src={ss2} className="h-full object-cover"/>
                    </div>
                    <div className="w-52 h-96 bg-slate-500 transition-all hover:scale-105 cursor-pointer">
                        <Image src={ss3} className="h-full object-cover"/>
                    </div>
                </div>
            </section>

            <div className="flex flex-col h-screen justify-center items-center gap-y-20">
                <h1 className="text-8xl text-center">KNOWLEDGE</h1>
                <div className="flex gap-4">
                    <div className="bg-[#202020] h-[100%] w-80 p-10 rounded-2xl">
                        <h1 className="text-3xl mb-8">Engineering Software</h1>
                        <p>When i was young, I've interested with Software Engineer since i was like hacking.</p>
                    </div>
                    <div className="bg-[#202020] h-[100%] w-80 p-10 rounded-2xl">
                        <h1 className="text-3xl mb-8">Education</h1>
                        <p>Im almost got failed in science because its combined with physics, biology, chemistry and anything. But i love more at Physics because of Isaac Newton. Yeah, he is very influential nowadays with his Motion of Law's.</p>
                    </div>
                    <div className="bg-[#202020] h-[100%] w-80 p-10 rounded-2xl">
                        <h1 className="text-3xl mb-8">Minecraft</h1>
                        <p>Minecraft is sandbox video games. So what's the point? Minecraft are make me creative at designing house, redstone engineer and memory.</p>
                    </div>
                </div>
            </div>
        </main>
        <div className="bg-gradient-to-t from-[#0c0c0c] to-[#111111] flex flex-col h-screen justify-center items-center relative gap-y-20">
            <h1 className="text-8xl">Created by</h1>
            <div className="w-[30%] flex-row flex gap-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>
            </div>
        </div>
        </>
    )
}