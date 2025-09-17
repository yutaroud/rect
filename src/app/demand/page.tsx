import '../globals.css';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation';
import KeyVisual from './KeyVisual';
import Service from './Service';
import Case from './Case';
import Point from './Point';
import Flow from './Flow';
import Faq from './Faq';
import Contact from './Contact';
import Company from './Company';
import { demandTopTitle } from '@/lib/const/BreadCrumbTitle';

export const metadata = {
  title: '開発等の相談 | 株式会社レクト',
};

const Demand = () => {
  return (
    <main style={{ color: '#000'}}>
      <KeyVisual />
      <Service />
      <Case />
      <Point />
      <Flow />
      <Faq />
      <Contact />
      <Company />
      <BreadcrumbsNavigation titles={demandTopTitle} />
    </main>
  );
};

export default Demand;
