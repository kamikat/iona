import React, { useEffect, useState } from 'react';
import { Page } from './provider';

const PageLoader = ({ sourceId, sourcePath, promise }) => {
  const [module, setModule] = useState(null);

  const sourceFileName = /.*\/([^/]+).mdx?/.exec(sourcePath)[1];

  useEffect(() => {
    let aborted = false;
    promise.then((module) => {
      if (aborted) {
        return;
      }
      setModule(module);
    });
    return () => {
      aborted = true;
      setModule(null);
    };
  }, [promise]);

  if (module) {
    return (
      <Page
        name={module.frontMatter.title || sourceFileName}
        {...module.frontMatter}
        refId={sourceId}
        tableOfContents={module.tableOfContents}
        component={module['default']} />
    );
  } else {
    return (
      <Page
        name="..."
        refId={sourceId}
        loading={true}
        component={null} />
    );
  }
};

export default PageLoader;
