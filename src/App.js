import './App.css';
import Header from './components/Header';
import About from './components/About';

function Section({ id, title }) {
  return (
    <section id={id} className="min-h-[100vh] flex items-center justify-center bg-white border-b border-gray-200">
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <About />
      <Section id="features" title="Features" />
      <Section id="faq" title="FAQ" />
      <Section id="blog" title="Blog" />
      <Section id="contact" title="Contact" />
    </div>
  );
}

export default App;
