import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
 ScrollTop Component
 - For scrolling to top of page when React routing.
 */

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollTop;