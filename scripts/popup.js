function openURL(url) {
    if (typeof browser !== 'undefined') {
      browser.tabs.create({ url }).catch((error) => {
        console.error('Error opening URL in Firefox:', error);
      });
    } else if (typeof chrome !== 'undefined') {
      chrome.tabs.create({ url }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error opening URL in Chrome:', chrome.runtime.lastError);
        }
      });
    } else {
      console.error('Unsupported browser');
    }
  }

// Add event listeners to the buttons
document.getElementById('ps').addEventListener('click', () => {
    openURL('https://podrzistudente.org/');
});

document.getElementById('bd').addEventListener('click', () => {
    openURL('https://blokadnedonacije.rs/');
});

document.getElementById('ms').addEventListener('click', () => {
    openURL('https://mrezasolidarnosti.org/');
});

