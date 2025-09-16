import '../globals.css';
import KeyVisual from './KeyVisual';
import Service from './Service';
import Case from './Case';
import Point from './Point';
import Flow from './Flow';
import Faq from './Faq';
import Contact from './Contact';
import Company from './Company';

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
    </main>
  );
};

export default Demand;
