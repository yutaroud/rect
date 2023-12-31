import './globals.css'
import Kv from '../modules/Kv';
import Company from '../modules/Company';
import Business from '../modules/Business';
import Recruitment from '@/modules/Recuritment';
import Contact from '@/modules/Contact';

export default function Home() {
  return (
    <main>
      <Kv />
      <Company />
      <Business />
      <Recruitment />
      <Contact />
    </main>
  );
}
