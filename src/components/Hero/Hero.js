import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi i'm <br />
          Abdulroheem Olalekan
        </SectionTitle>
        <SectionText>
         A motivated designer with experience in creating innovative designs. Experienced in UI/UX Design, Web-design, and software development.
         
        {/* The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. */}
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;