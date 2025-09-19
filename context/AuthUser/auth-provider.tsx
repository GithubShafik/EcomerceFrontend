'use client';

import { useEffect, useCallback, useMemo, useState } from 'react';
import getAccessForMenu, { getSystemAuthenticatedStatus, setSession } from '@/service/utils';
import { AuthContext } from './auth-context';
import { getconfig } from '@/service/get-request';

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState({});
  const [userCurrentPlan, setUserCurrentPlan] = useState({});
  const [userAccess, setUserAccess] = useState([]);
  const [accessToken, setAccessToken] = useState<any>("");
  const [loading, setLoading] = useState(true);
  const Token = typeof window !== 'undefined' ? sessionStorage.getItem('Token') : null;



  const Dashboard = getAccessForMenu('user_dashboard', userAccess);
  const AdminDashboard = getAccessForMenu('super_admin_dashboard', userAccess);
  const ManageProduct = getAccessForMenu('manage_product', userAccess);
  const ShopingCart = getAccessForMenu('shopping_cart', userAccess);
  const ShopingProduct = getAccessForMenu('shop_product', userAccess);
  const MyOrder = getAccessForMenu('my_order', userAccess);


  const isSystemAuthenticated = getSystemAuthenticatedStatus(accessToken, userAccess);




  const initialize = useCallback(async () => {
    setLoading(true);
    try {

      if (accessToken) {
        await getconfig()
          .then((res) => {
            setUser(res.UserAccess)
            setUserAccess(res.UserAccess)
            // setUserCurrentPlan(res.userCurrentPlan)
            setLoading(false);
          })
          .catch((error) => {
            console.error("API request error:", error);
          })
      }
    } catch (error) {
      console.error(error);
      alert('Something Went Wrong');
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const permisstions = {
    Dashboard,
    AdminDashboard,
    ManageProduct,
    ShopingCart,
    ShopingProduct,
    MyOrder
  }


  useEffect(() => {
    if (Token !== null) {
      setAccessToken(Token);
      setSession(Token)
    }
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const value = useMemo(
    () => ({
      isSystemAuthenticated,
      accessToken,
      userCurrentPlan,
      loading,
      setLoading,
      user,
      setUser,
      userAccess,
      setUserAccess,
      permisstions,
      setAccessToken
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, permisstions, accessToken, isSystemAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
