import Iona from './Iona';
import IonaProvider, { Category, Group, Topic, Page, ExternalLink } from './provider';
import PageLoader from './PageLoader';
import RefLinkLoader from './RefLinkLoader';
import IonaApp from './ui';

Object.assign(Iona, {
  Category,
  Group,
  Topic,
  Page,
  ExternalLink,
  PageLoader,
  RefLinkLoader,
});

export { IonaProvider, IonaApp, Category, Group, Topic, ExternalLink };

export default Iona;
