import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StudentResults } from './components/StudentResults';
import { CoursePreview } from './components/CoursePreview';
import { Certificate } from './components/Certificate';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-yellow-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Certificate />
        <StudentResults />
        <CoursePreview />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;