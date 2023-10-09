import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { OodiNewsletterEnglish1 } from './components/OodiNewsletterEnglish1/OodiNewsletterEnglish1';
function setZoom() {
  var screenWidth = window.innerWidth;
  var scaleFactor = screenWidth / 1500; // Adjust 1200 based on your desired base width

  document.body.style.zoom = scaleFactor * 100 + '%';
}

window.addEventListener('resize', setZoom);

// Call the function on page load
window.addEventListener('load', setZoom);

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <OodiNewsletterEnglish1 />
    </div>
  );
});
