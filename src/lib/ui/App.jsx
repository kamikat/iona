import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route, Redirect, Link, useLocation } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { useEntries } from '../provider';

const BaseUrlContext = React.createContext(null);

const useBaseUrl = () => useContext(BaseUrlContext);

const IonaApp = ({ name, version, baseUrl="/" }) => {

  const location = useLocation();

  const [keyword, setSearchKeyword] = useState('');

  const keywordMatch = /^\/(.*)$/.exec(keyword);
  const keywordRegexStr = keywordMatch && keywordMatch[1];
  const keywordRegex = new RegExp(keywordRegexStr || `.*${keyword}.*`, 'i');

  const [entries] = useEntries();

  const categories = entries.filter(({ type }) => type === 'category');

  const urlCategoryId = categories.map((a) => a.id).find((id) => location.pathname.startsWith(baseUrl + id + '/'));
  const defaultCategoryId = categories[0] && categories[0].id;

  const [categoryId, setCategoryId] = useState(urlCategoryId);

  useEffect(() => {
    setCategoryId(urlCategoryId || defaultCategoryId);
  }, [urlCategoryId, defaultCategoryId]);

  const entries1 = entries.filter(({ type, title, keywords=[] }) => {
    if (type === 'page' || type === 'externalLink') {
      return keywordRegex.test(title + '/' + keywords.join('/'));
    }
    return true;
  });

  const groups = entries1.filter(({ category={} }) => category.id === categoryId);
  const topics = entries1.filter(({ category={}, group }) => category.id === categoryId && !group);
  const pages = entries1.filter(({ category={}, group, topic }) => category.id === categoryId && !group && !topic);

  return (
    <BaseUrlContext.Provider value={baseUrl}>
      <div className="iona-container">
        <div className="iona-menu">
          <div className="iona-header">
            <div className="iona-header-title">
              <Link to={baseUrl}>{name}{version && (<span className="iona-header-title-version">{version}</span>)}</Link>
            </div>
            <div className="iona-category-pane">
              {categories.map(({ name, id }) => (
                <div key={id} className="iona-category-item" active={`${categoryId === id}`} onClick={() => setCategoryId(id)}>{name}</div>
              ))}
            </div>
          </div>
          <div className="iona-search-box">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Escape') {
                  e.target.blur();
                }
              }} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
              </path>
            </svg>
          </div>
          <div className="iona-nav-pane">
            <PageList entries={pages} />
            <TopicList entries={topics} />
            <GroupList entries={groups} />
          </div>
        </div>
        <div className="iona-content">
          <div className="iona-content-wrapper">
            <ContentView entries={entries} />
          </div>
        </div>
      </div>
    </BaseUrlContext.Provider>
  );
};

const GroupList = ({ entries }) => {
  return entries.filter(({ type }) => type === 'group').map(({ id, name }) => {
    const topics = entries.filter(({ group={} }) => group.id === id);
    const pages = entries.filter(({ group={}, topic }) => group.id === id && !topic);
    return (
      <div className="iona-nav-group" key={id}>
        <div className="iona-nav-title">{name}</div>
        <div className="iona-nav-list">
          <PageList entries={pages} />
          <TopicList entries={topics} />
        </div>
      </div>
    );
  });
};

const TopicList = ({ entries }) => {
  return entries.filter(({ type }) => type === 'topic').map(({ id, name }) => {
    const pages = entries.filter(({ topic={} }) => topic.id === id);
    return (
      <div className="iona-nav-topic" key={id}>
        <div className="iona-nav-title">{name}</div>
        <div className="iona-nav-list">
          <PageList entries={pages} />
        </div>
      </div>
    );
  });
};

const PageList = ({ entries }) => {
  const baseUrl = useBaseUrl();
  return entries.filter(
    ({ type }) => type === 'page' || type === 'externalLink'
  ).sort(
    (a, b) => a.index - b.index
  ).map((entry) => {
    const { id, name, type, url, loading } = entry;
    return (
      <div className="iona-nav-entry" key={id}>
        {type === 'page' ? (
          <div className="iona-nav-page" disabled={loading}><Link to={getPageUrl(baseUrl, entry)}>{name}</Link></div>
        ) : (
          <div className="iona-nav-link"><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></div>
        )}
      </div>
    );
  });
};

const RefLink = ({ href, to, children, ...props }) => {
  const baseUrl = useBaseUrl();
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link to={to.type === 'page' ? getPageUrl(baseUrl, to) : to} {...props}>
        {children}
      </Link>
    );
  } else {
    return null;
  }
};

const TableWrapper = ({ children }) => (
  <div className="table-wrapper">
    <table>
      {children}
    </table>
  </div>
);

const MDXComponents = {
  a: RefLink,
  table: TableWrapper,
};

const ContentView = ({ entries }) => {
  const baseUrl = useBaseUrl();
  const pages = entries.filter(({ type }) => type === 'page');
  const defaultPage = pages.filter(({ default: _default }) => _default)[0];
  return (
    <Switch>
      {pages.map(({ component: Component, ...page }) => {
        const path = getPageUrl(baseUrl, page);
        return Component && (
          <Route key={path} exact path={path}>
            <MDXProvider components={MDXComponents}>
              <Component />
            </MDXProvider>
          </Route>
        );
      })}
      {defaultPage && defaultPage.component && (
        <Redirect to={getPageUrl(baseUrl, defaultPage)} />
      )}
    </Switch>
  );
};

const getPageUrl = (baseUrl, { category={}, group={}, topic={}, id }) => {
  return baseUrl + [category.id, group.id, topic.id, id].filter((a) => a).join('/');
};

export default IonaApp;

