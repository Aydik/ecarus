import { Breakpoint } from 'shared/context/BreakpointContext';

export function setRootVariables(breakpoint: Breakpoint) {
  const root = document.documentElement;

  switch (breakpoint) {
    case 'mobile':
      root.style.setProperty('--header-height', '64px');
      root.style.setProperty('--horizontal-content-padding', '4%');
      root.style.setProperty('--main-padding-top', '24px');
      break;
    case 'tablet':
      root.style.setProperty('--header-height', '80px');
      root.style.setProperty('--horizontal-content-padding', '6%');
      root.style.setProperty('--main-padding-top', '40px');
      break;
    case 'desktop':
    default:
      root.style.setProperty('--header-height', '80px');
      root.style.setProperty('--horizontal-content-padding', '12.5%');
      root.style.setProperty('--main-padding-top', '40px');
      break;
  }
}
