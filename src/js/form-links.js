(() => {
  const linkRef = document.querySelector('section.qwiz');
  const rtnBtn = document.querySelector('.qwiz-return-button');
  const mainBtn = document.querySelector('.qwiz-main-button');

  let path,
    pathBack = '';

  switch (linkRef.classList[1]) {
    case 'qwiz2':
      // path = 'qwiz3.html';
      pathBack = 'index.html#qwiz-start';
      break;
    case 'qwiz3':
      // path = 'qwiz4.html';
      pathBack = 'qwiz2.html';

      break;
    default:
      // path = 'qwiz2.html';
      pathBack = '';
  }
  // mainBtn.href = `${path}`;
  rtnBtn.href = `${pathBack}`;
})();
