async function fetchAndParseMarkdown() {
    const url = './assets/posts/cosa.md'
    const response = await fetch(url)
    const data = await response.text()
    const htmlFromMarkdown = marked(data, { sanitize: true }); 
    return htmlFromMarkdown
  }
  
  async function init() {
    const $main = document.querySelector('.contents');
    const htmlContent = await fetchAndParseMarkdown();
    $main.innerHTML = htmlContent
  }
  
  init();