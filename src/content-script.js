const enablePaste = (event) => {
  event.stopImmediatePropagation();
  return true; 
}

const enableCopy = (event) => {
  event.stopImmediatePropagation();
  return true; 
}

document.addEventListener('copy', enableCopy, true);
document.addEventListener('paste', enablePaste, true);

console.log('Content script loaded');