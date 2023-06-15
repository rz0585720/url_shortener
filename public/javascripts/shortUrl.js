function generateShortUrl() {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const number = '0123456789'
  let shortUrl = ''

  // 產生 5 個隨機字元，由亂數決定是大寫、小寫或數字
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 3)
    switch (random) {
      case 0:
        shortUrl += upperCase[Math.floor(Math.random() * 26)]
        break
      case 1:
        shortUrl += lowerCase[Math.floor(Math.random() * 26)]
        break
      case 2:
        shortUrl += number[Math.floor(Math.random() * 10)]
        break
    }
  }
  return shortUrl
}

module.exports = generateShortUrl