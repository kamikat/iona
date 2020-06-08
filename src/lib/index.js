import Iona from './Iona';
import IonaProvider, { Category, Group, Topic, Page, ExternalLink } from './provider';
import PageLoader from './PageLoader';
import RefLinkLoader from './RefLinkLoader';

Object.assign(Iona, {
  Category,
  Group,
  Topic,
  Page,
  ExternalLink,
  PageLoader,
  RefLinkLoader,
});

export { IonaProvider, Category, Group, Topic, ExternalLink };

export default Iona;
