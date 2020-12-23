import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Services />
    </div>
  );
}
