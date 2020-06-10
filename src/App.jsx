import React from 'react';
import { name, version } from '../package.json';
import Iona, { Group, Topic } from './lib';
import Page from './lib/Page.macro';

const baseUrl = process.env.PUBLIC_URL + '/'; /* eslint-disable-line no-undef */

const App = () => {
  return (
    <Iona name={name} version={version} baseUrl={baseUrl}>
      <Group name="Manual">
        <Topic name="General">
          <Page src="./docs/Introduction.mdx" />
          <Page src="./docs/GettingStarted.mdx" />
          <Page src="./docs/WritingMDX.mdx" />
          <Page src="./docs/CreateTOC.mdx" />
          <Page src="./docs/Styling.mdx" />
          <Page src="./docs/Release.mdx" />
        </Topic>
        <Topic name="Advanced">
          <Page src="./docs/UseAPIProxy.mdx" />
          <Page src="./docs/UseEnvVars.mdx" />
          <Page src="./docs/ProjectStructure.mdx" />
          <Page src="./docs/CustomTheme.mdx" />
          <Page src="./docs/DesktopApp.mdx" />
        </Topic>
      </Group>
      <Group name="Reference">
        <Topic name="Components">
        </Topic>
        <Topic name="Miscellaneous">
        </Topic>
      </Group>
    </Iona>
  );
};

export default App;
