document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.querySelector('.text-area');
  const resultArea = document.querySelector('.result-text');
  const messageHeader = document.querySelector('.message');
  const resultHeader = document.querySelector('.result');
  const modeSwitch = document.querySelector('.bt-nav');
  
  modeSwitch.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });

  const encrypt = (text) => {
    const matrizEncrypted = { e: 'enter', i: 'imes', a: 'ai', o: 'ober', u: 'ufat' };
    return text.toLowerCase().replace(/[eioua]/g, match => matrizEncrypted[match]);
  }

  const decrypt = (text) => {
    const matrizEncrypted = { enter: 'e', imes: 'i', ai: 'a', ober: 'o', ufat: 'u' };
    return text.toLowerCase().replace(/enter|imes|ai|ober|ufat/g, match => matrizEncrypted[match]);
  }

  window.buttonEncrypt = () => {
    const encryptedText = encrypt(textArea.value);
    resultArea.value = encryptedText;
    textArea.value = '';
    messageHeader.style.display = encryptedText ? 'none' : 'flex';
    resultHeader.style.display = encryptedText ? 'flex' : 'none';
  };

  window.buttonDecrypt = () => {
    const decryptedText = decrypt(textArea.value);
    resultArea.value = decryptedText;
    textArea.value = '';
    messageHeader.style.display = decryptedText ? 'none' : 'flex';
    resultHeader.style.display = decryptedText ? 'flex' : 'none';
  };

  window.copyClipboard = () => {
    navigator.clipboard.writeText(resultArea.value).then(() => {
      const notification = document.getElementById('notification-clipboard');
      notification.style.display = 'block';
      setTimeout(() => { notification.style.display = 'none'; }, 1500);
    });
  };
})