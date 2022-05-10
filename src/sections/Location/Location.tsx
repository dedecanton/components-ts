import React from 'react'
import { LocationContainer, Section } from './Location.style'

const Location = () => {
  return (
    <Section id='location' title='Localização' >
        {/* <LocationContainer> */}
        <iframe className="w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14057.163037559536!2d-52.4032835!3d-28.2591991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e59b88612f7269d!2sTochetto&#39;s%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1652203801685!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" ></iframe>
        {/* </LocationContainer> */}

    </Section>
  )
}

export default Location