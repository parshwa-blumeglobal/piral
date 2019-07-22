import * as React from 'react';
import { Section, ResponsiveContent, Md, EditSection, Menu } from '../components';

const Content: React.FC = () => {
  const ref = React.useRef(undefined);

  return (
    <>
      <ResponsiveContent ref={ref}>
        <Section id="gateway-specification" title="Gateway Specification">
          <Md>{require('../../../../../../docs/specs/gateway-specification.md')}</Md>
          <EditSection link="specs/gateway-specification.md" />
        </Section>
      </ResponsiveContent>
      <Menu content={ref} />
    </>
  );
};

export default Content;