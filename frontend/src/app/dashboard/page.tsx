'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { Loader2, LogOut, User as UserIcon, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/auth/profile');
        setUser(response.data);
      } catch (err) {
        localStorage.removeItem('token');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30">
      <nav className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">NestAuth</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-1">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg ring-4 ring-neutral-800">
                <UserIcon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-1">{user?.email?.split('@')[0]}</h2>
              <p className="text-neutral-500 text-sm mb-6">{user?.email}</p>
              <div className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full inline-block uppercase tracking-wider">
                Active Session
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Account Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-400">User ID</span>
                  <span className="font-mono text-xs bg-neutral-800 px-2 py-1 rounded">{user?.userId}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-4">
                  <span className="text-neutral-400">Email Address</span>
                  <span>{user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Auth Method</span>
                  <span className="text-green-500 font-medium">JWT Secure</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Welcome to the Dashboard</h3>
              <p className="text-indigo-100 max-w-md">
                You have successfully logged in using our full-stack NestJS and Next.js authentication system.
              </p>
              <button className="mt-6 bg-white text-indigo-600 px-6 py-2 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                Explore Features
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
