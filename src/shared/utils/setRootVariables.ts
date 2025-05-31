import { Breakpoint } from 'shared/context/BreakpointContext';

export function setRootVariables(breakpoint: Breakpoint) {
  const root = document.documentElement;

  switch (breakpoint) {
    case 'mobile':
      root.style.setProperty('--header-height', '64px');
      root.style.setProperty('--horizontal-content-padding', '4%');
      break;
    case 'tablet':
      root.style.setProperty('--header-height', '80px');
      root.style.setProperty('--horizontal-content-padding', '6%');
      break;
    case 'desktop':
    default:
      root.style.setProperty('--header-height', '80px');
      root.style.setProperty('--horizontal-content-padding', '11.5%');
      break;
  }
}
