import React, { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const ref = useRef();
  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (fullBody < 90) {
        setFullBody(fullBody + 1);
      }
      if (piercing < 80) {
        setPiercing(piercing + 1);
      }
      if (fullColor < 75) {
        setFullColor(fullColor + 1);
      }
      if (temporary < 95) {
        setTemporary(temporary + 1);
      }
    }, 50);
  }, [fullBody, piercing, fullBody, temporary]);

  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <section ref={ref} className='section font-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between'>
          <div className='w-[275px]'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={fullBody}
              text={`${fullBody}%`}
            />
            <div>Full Body Tatoo</div>
          </div>
          <div className='w-[275px]'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={piercing}
              text={`${piercing}%`}
            />
          </div>
          <div className='w-[275px]'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={fullColor}
              text={`${fullColor}%`}
            />
          </div>
          <div className='w-[275px]'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={temporary}
              text={`${temporary}%`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
