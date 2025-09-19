'use client'

import { useLayoutEffect } from 'react';
import { paths } from "@/constants/paths";
import { useRouter } from 'next/navigation';
import Loading from './loading';



interface FormData {
  email: string;
  password: string;
}

export default function Page() {
  const router = useRouter();

  useLayoutEffect(() => {
    // Clear localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Optionally, you could add a small delay before redirecting
    setTimeout(() => {
      // Redirect to the login page
      router.push(paths.login);
    }, 500);  // Adjust delay as needed (500ms in this case)
  }, [router]);

  return (
    <div>
      <Loading />
    </div>
  );
}
