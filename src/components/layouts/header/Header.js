import { useState, useRef, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderSidebar from './HeaderSidebar';
import headBG from '../../../assets/images/header/default-head-bg.jpg';

export default function Header() {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, visible: false });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef(null);
  const fadeTimeout = useRef(null);
  const activeLinkIndex = useRef(null);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  // Load Orbitron font dynamically once
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Close sidebar on scroll
  useEffect(() => {
    if (!sidebarOpen) return;
    const handleScroll = () => setSidebarOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sidebarOpen]);

  // Clear fade timeout on unmount
  useEffect(() => () => fadeTimeout.current && clearTimeout(fadeTimeout.current), []);

  // Hover handlers for desktop nav underline
  function handleContainerMouseEnter(index, e) {
    if (!headerRef.current) return;
    if (activeLinkIndex.current === index && indicatorStyle.visible) return;
    activeLinkIndex.current = index;

    const headerRect = headerRef.current.getBoundingClientRect();
    const containerRect = e.currentTarget.getBoundingClientRect();

    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);

    setIndicatorStyle({
      left: containerRect.left - headerRect.left,
      width: containerRect.width,
      visible: true,
    });
  }

  function handleContainerMouseLeave() {
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setIndicatorStyle(prev => ({ ...prev, visible: false }));
      activeLinkIndex.current = null;
    }, 150);
  }

  return (
    <>
      <HeaderSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        links={links}
        headBG={headBG}
      />
      <HeaderDesktop
        headerRef={headerRef}
        links={links}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        indicatorStyle={indicatorStyle}
        handleContainerMouseEnter={handleContainerMouseEnter}
        handleContainerMouseLeave={handleContainerMouseLeave}
        headBG={headBG}
      />
    </>
  );
}
