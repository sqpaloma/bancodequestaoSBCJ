'use client';

import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <AuthLoading>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 via-brand-blue/10 to-indigo-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando...</p>
          </div>
        </div>
      </AuthLoading>

      <Unauthenticated>
        <RedirectToHome />
      </Unauthenticated>

      <Authenticated>
        <main className="w-full bg-gradient-to-b from-slate-50 via-brand-blue/10 to-indigo-100 min-h-screen">
          {/* Add padding-bottom for mobile nav, remove for desktop */}
          <div className="mx-auto max-w-5xl px-2 pb-20 pt-4 md:px-6 md:py-6">
            {children}
          </div>
        </main>
      </Authenticated>
    </>
  );
}

function RedirectToHome() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 via-brand-blue/10 to-indigo-100">
      <div className="text-center">
        <p className="text-gray-600">Redirecionando para login...</p>
      </div>
    </div>
  );
}
