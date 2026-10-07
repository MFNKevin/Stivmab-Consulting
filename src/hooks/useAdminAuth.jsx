import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

const TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

export function useAdminAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let activityTimer;
    
    const checkAuth = async () => {
      try {
        const isAuth = await base44.auth.isAuthenticated();
        if (!isAuth) {
          base44.auth.redirectToLogin(window.location.pathname);
          return;
        }
        const currentUser = await base44.auth.me();
        if (currentUser?.role !== 'admin') {
          navigate('/');
          return;
        }

        // Check last activity
        const lastActivity = localStorage.getItem('admin_last_activity');
        if (lastActivity && Date.now() - parseInt(lastActivity) > TIMEOUT_MS) {
          // Expired
          localStorage.removeItem('admin_last_activity');
          await base44.auth.logout('/');
          return;
        }

        // Update activity
        localStorage.setItem('admin_last_activity', Date.now().toString());
        setUser(currentUser);
        setIsAdmin(true);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };

    checkAuth();

    const updateActivity = () => {
      localStorage.setItem('admin_last_activity', Date.now().toString());
    };

    const handleActivity = () => {
      updateActivity();
      clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        localStorage.removeItem('admin_last_activity');
        base44.auth.logout('/');
      }, TIMEOUT_MS);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);
    
    // Set initial timer
    activityTimer = setTimeout(() => {
      localStorage.removeItem('admin_last_activity');
      base44.auth.logout('/');
    }, TIMEOUT_MS);

    // Listen to visibility change (tab switch/close)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        const lastActivity = localStorage.getItem('admin_last_activity');
        if (lastActivity && Date.now() - parseInt(lastActivity) > TIMEOUT_MS) {
          localStorage.removeItem('admin_last_activity');
          base44.auth.logout('/');
        }
      } else {
        updateActivity();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      document.removeEventListener('visibilitychange', handleVisibility);
      clearTimeout(activityTimer);
    };
  }, [navigate]);

  return { isLoading, isAdmin, user };
}