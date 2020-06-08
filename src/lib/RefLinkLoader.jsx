import React from 'react';
import { useEntries } from './provider';
import { useMDXComponents } from '@mdx-js/react';
import { Link } from 'react-router-dom';

const RefLinkLoader = ({ sourceId, sourcePath, ...props }) => {
  const [entries] = useEntries();

  const {a: Component=Link} = useMDXComponents();

  const item = entries.find(({ type, refId }) => type === 'page' && refId === sourceId);

  return (
    <Component to={item} {...props} />
  );
};

export default RefLinkLoader;
