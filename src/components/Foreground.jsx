import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref=useRef(null);
    const data=[
        {
          "desc": "Discover the latest trends in web development and design.",
          "filesize": "1.2MB",
          "close": false,
          "tag": { "isOpen": true, "tagTitle": "New Update", "tagColor": "blue" }
        },
        {
          "desc": "Master the fundamentals of JavaScript with this free guide.",
          "filesize": "800KB",
          "close": true,
          "tag": { "isOpen": false, "tagTitle": "Download Now", "tagColor": "green" }
        },
        {
          "desc": "Learn how to build responsive websites with HTML and CSS.",
          "filesize": "1.5MB",
          "close": false,
          "tag": { "isOpen": true, "tagTitle": "Hot Topic", "tagColor": "red" }
        },
        {
          "desc": "Explore the power of React and how it simplifies UI development.",
          "filesize": "2.1MB",
          "close": true,
          "tag": { "isOpen": false, "tagTitle": "Free Resource", "tagColor": "purple" }
        },
        {
          "desc": "Get started with backend development using Node.js and Express.",
          "filesize": "900KB",
          "close": false,
          "tag": { "isOpen": true, "tagTitle": "Beginner Friendly", "tagColor": "orange" }
        },
        {
          "desc": "Understand the importance of APIs and how to work with them.",
          "filesize": "1.8MB",
          "close": true,
          "tag": { "isOpen": false, "tagTitle": "Essentials", "tagColor": "cyan" }
        },
        {
          "desc": "A complete guide to deploying web apps on cloud platforms.",
          "filesize": "2.3MB",
          "close": false,
          "tag": { "isOpen": true, "tagTitle": "DevOps Tips", "tagColor": "gray" }
        },
        {
          "desc": "How to optimize your website for better performance and speed.",
          "filesize": "750KB",
          "close": true,
          "tag": { "isOpen": false, "tagTitle": "Performance Hacks", "tagColor": "teal" }
        },
        {
          "desc": "Everything you need to know about database management.",
          "filesize": "1.4MB",
          "close": false,
          "tag": { "isOpen": true, "tagTitle": "Database Guide", "tagColor": "brown" }
        },
        {
          "desc": "Understanding authentication and authorization in web apps.",
          "filesize": "1.1MB",
          "close": true,
          "tag": { "isOpen": false, "tagTitle": "Security Tips", "tagColor": "black" }
        }
      ]
      
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground