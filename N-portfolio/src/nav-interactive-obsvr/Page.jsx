import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import FloatingNav from '../components/FloatingNav';

const Page = () => {
    const [active, setActive] = useState("");

    const sections = ["about","contact", "hero","footer","projects","services" ]
  return (
    <div>

        <FloatingNav active={active} />

        {sections.map((id) => (
        <Section key={id} id={id} setActive={setActive} />
      ))}

    </div>
  )
}

export default Page