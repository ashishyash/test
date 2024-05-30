import React, { useEffect } from 'react'

function About() {


    useEffect(()=> {
        console.log('about child');
        return ()=> {
            console.log('child unmount')
        }
    }, [])

  return (
    <div>about</div>
  )
}

export default About