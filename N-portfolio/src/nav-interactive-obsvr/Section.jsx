import React from 'react'
import { useInView } from 'react-intersection-observer'

const Section = ({id, setActive}) => {
    const {ref, inView} = useInView({
        threshold: 0.6,
    });

    if(inView){
        setActive(id);
    }

  return (
    <section
      id={id}
      ref={ref}
      className="h-screen flex items-center justify-center"
    >
      <h1 className="text-4xl">{id}</h1>
    </section>
  )
}

export default Section