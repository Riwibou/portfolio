import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import GraphqlIcon from '../../Icon/GraphqlIcon';
import JsIcon from '../../Icon/JsIcon';
import NextjsIcon from '../../Icon/NextjsIcon';
import NodeIcon from '../../Icon/NodeIcon';
import ReactIcon from '../../Icon/ReactIcon';
import TailwindIcon from '../../Icon/TailwindIcon';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-gray-200" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Technologies">
          <p className="pb-8"></p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <JsIcon />
            <NextjsIcon />
            <ReactIcon />
            <NodeIcon />
            <TailwindIcon/>
            <GraphqlIcon/>
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
