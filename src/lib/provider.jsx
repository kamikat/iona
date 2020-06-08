import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import slugify from 'slugify';
import deepEqual from 'fast-deep-equal';
import { nanoid } from 'nanoid';

const IonaNodeContext = React.createContext(null);

const IonaProvider = ({ children }) => {

  const [entries, dispatch] = useReducer((entries, [action, entry]) => {
    switch (action) {
      case 'ADD': {
        return [ ...entries, entry ];
      }
      case 'DELETE': {
        return entries.filter((t) => t.id !== entry.id);
      }
      default: {
        return entries;
      }
    }
  }, []);

  return (
    <IonaNodeContext.Provider value={[entries, dispatch]}>
      {children}
    </IonaNodeContext.Provider>
  );
};

const useEntries = () => useContext(IonaNodeContext);

const createComponent = (type) => {

  const Component = ({ name='', children, ..._props }) => {

    const id = useMemo(() => {
      return slugify(name, { remove: /[*+~.()'"!:@/]/g }) || `${type}:${nanoid()}`;
    }, [name]);

    const [entries, dispatch0] = useEntries();

    const lastProps = useRef();
    const props = lastProps.current = deepEqual(_props, lastProps.current) ? lastProps.current : _props;

    const selfIndex = useRef(null);

    useEffect(() => {
      if (selfIndex.current === null) {
        // request a new index from parent node
        selfIndex.current = dispatch0(['ADD', { type, id, name, ...props }]);
      } else {
        // keep index for subsequent updates
        dispatch0(['ADD', { type, id, name, index: selfIndex.current, ...props }]);
      }
      return () => {
        dispatch0(['DELETE', { type, id, name, ...props }]);
      };
    }, [dispatch0, id, name, props]);

    const lastChildIndex = useRef(0);

    const dispatch = useCallback(([action, entry]) => {
      const childIndex = lastChildIndex.current++;
      dispatch0([action, { [type]: { id, name }, index: childIndex, ...entry }]);
      return childIndex;
    }, [dispatch0, id, name]);

    return children ? (
      <IonaNodeContext.Provider value={[entries, dispatch]}>
        {children}
      </IonaNodeContext.Provider>
    ) : null;
  };

  return Object.assign(Component, {
    displayName: `Iona.Node(${type[0].toUpperCase() + type.slice(1)})`
  });
};

const Category = createComponent('category');

const Group = createComponent('group');

const Topic = createComponent('topic');

const Page = createComponent('page');

const ExternalLink = createComponent('externalLink');

const H1 = createComponent('h1');

const H2 = createComponent('h2');

const H3 = createComponent('h3');

export { useEntries, createComponent };

export { Category, Group, Topic, Page, ExternalLink, H1, H2, H3 };

export default IonaProvider;
