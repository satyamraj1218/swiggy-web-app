import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menuData = await fetch(MENU_API + resId);
    const result = await menuData.json();

    setResMenu(result?.data);
  };
  return resMenu;
};

export default useResMenu;
