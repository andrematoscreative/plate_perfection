import React from 'react';


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">© 2023 André Matos</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap;