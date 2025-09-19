'use client'
import { useEffect, useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { paths } from '@/constants/paths';
import LoaderComponent from '@/components/ui/loader';
import { useAuthUserContexts } from '@/hooks/use-contexts';

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { userAccess, loading } = useAuthUserContexts();
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (userAccess?.length == 0 && !loading && checked) {
      const searchParams = new URLSearchParams({ returnTo: window.location.href }).toString();
      const loginPath = paths.login;
      const href = `${loginPath}?${searchParams}`;
      router.replace(href);

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
  }, [checked]);

  if (!checked) {
    return <LoaderComponent />;
  }

  return <>{children}</>;
}
