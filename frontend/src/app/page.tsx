import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="z-10 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-sm font-medium mb-8">
          <ShieldCheck className="w-4 h-4" />
          Full-Stack Auth System Boilerplate
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-6 tracking-tight">
          Modern Auth for <br /> Modern Apps.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A premium full-stack authentication system built with NestJS, Next.js, MongoDB, and Passport. Ready for production.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/register" 
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/login" 
            className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-2 text-indigo-400">NestJS Backend</h3>
            <p className="text-neutral-500 text-sm">Robust API with JWT, Passport, and Mongoose integration.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-2 text-purple-400">Next.js Frontend</h3>
            <p className="text-neutral-500 text-sm">Beautiful UI with Tailwind CSS, Framer Motion, and Axios.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm">
            <h3 className="font-bold text-lg mb-2 text-green-400">Google Auth</h3>
            <p className="text-neutral-500 text-sm">One-click social login using Google OAuth 2.0 strategy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
