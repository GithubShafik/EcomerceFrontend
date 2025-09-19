'use client'
import { useEffect, useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { paths } from '@/constants/paths';
import LoaderComponent from '@/components/ui/loader';
import { useAuthUserContexts } from '@/hooks/use-contexts';

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const router = useRouter();

  const { userAccess, loading } = useAuthUserContexts();
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (sessionStorage.getItem('Token') && !loading && checked) {
      router.replace(paths.dashboard);
    } else if (loading) {
      // eslint-disable-next-line no-useless-return  
      return
    } else {
      setChecked(true)
    }
  }

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAccess, loading,checked]);

  if (!checked) {
    return <LoaderComponent />;
  }

  return <>{children}</>;
}
