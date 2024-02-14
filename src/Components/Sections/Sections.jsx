import React, { useState, useEffect } from 'react';
import './Sections.css';
import images from './Emoji.svg';
import img from './img.png';

function Sections() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <h1 className='Loader'>LOADING ...</h1>
          </div>
        </div>
      ) : (
        <div className="all">
          <div className='wrapperello'>
              <div className="texts-one">
                <h1>Hi</h1>
                <img src={images} alt="bu yerda rasm bor" />
              </div>
              <div className="texttwo">
                <h1>I'M CHARLES '</h1>
              </div>
              <div className="textthree">
                <h1>FRONT-END DEVELOPER</h1>
              </div>
              <div className="wraper-text">
                <h3>I design and develop experiences that make people’s lives <br /> simpler through Web and Mobile apps.I work with FIgma , <br /> HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</h3>
              </div>
              <div className="btns">
                <button className='one'>HIRE ME </button>
                <button className='two'>SEE MY PROJECTS</button>
              </div>
          </div>
          <div className="big-img">
            <img className='img' src={img} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Sections;
