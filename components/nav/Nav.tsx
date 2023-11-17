"use client"
import React from 'react'
import NavBar from './NavBar'
export default function Nav() {

  return (
    <React.Fragment>
      <header className='w-full md:w-2/3 mx-auto h-20 rounded-lg flex items-center px-10 justify-between'>
      <svg fill="#000000" height="35px" width="35px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 400 400"> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(0 -540.36)"> <g> <g> <path d="M79.55,588.46h-15.6v-0.1c-13.2,0-24,10.8-24,24v328h15.6v-327.9c0-4.8,3.6-8.4,8.4-8.4h15.6c4.8,0,8.4,3.6,8.4,8.4 v327.9h15.6v-327.9C103.55,599.26,92.75,588.46,79.55,588.46z"></path> <path d="M336.05,588.46h-16.8v-0.1c-13.2,0-24,10.8-24,24v328h16.8v-327.9c0-4.8,2.4-8.4,7.2-8.4h16.8c3.6,0,7.2,3.6,7.2,8.4 v327.9h16.8v-327.9C360.05,599.26,349.25,588.46,336.05,588.46z"></path> <path d="M207.75,588.46h-15.6v-0.1c-13.2,0-24,10.8-24,24v328h15.6v-327.9c0-4.8,3.6-8.4,8.4-8.4h15.6c4.8,0,8.4,3.6,8.4,8.4 v327.9h15.6v-327.9C231.75,599.26,220.95,588.46,207.75,588.46z"></path> <path d="M64.05,572.76h24v7.2c0,4.8,3.6,8.4,8.4,8.4h79.1c4.8,0,8.4-3.6,8.4-8.4v-7.2h32.4v7.2c0,4.8,3.6,8.4,7.2,8.4h80.3 c4.8,0,8.4-3.6,8.4-8.4v-7.2h24c10.8,0,10.8-16.8,0-16.8h-24v-7.2c0-4.8-3.6-8.4-8.4-8.4h-80.3c-3.6,0-7.2,3.6-7.2,8.4v7.2h-32.4 v-7.2c0-4.8-3.6-8.4-8.4-8.4h-79.1c-1.2,0-1.2,0-1.2,0c-3.6,0-7.2,3.6-7.2,8.4v7.2h-24c0,0,0,0-1.2,0 C52.05,557.16,53.25,572.76,64.05,572.76z M232.05,555.96h63.5v16.8h-63.5V555.96z M103.85,555.96h64.7v16.8h-64.7V555.96z"></path> </g> </g> </g> </g></svg>
        <span className="md:text-xl text-lg font-bold text-slate-600 ml-1 mr-auto">LiveCricket</span>
        <NavBar />
      </header>
    </React.Fragment>
  )
}
