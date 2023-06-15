const express = require('express')
const router = express.Router()
const Url = require('../../models/url') // 載入 Url model
const shortUrl = require('../../public/javascripts/shortUrl') // 載入 generateShortUrl function
const host = 'http://localhost:3000/'


router.get('/', (req, res) => {
	res.render('index')
})

// 產生短網址
router.post('/', (req, res) => {
	const originalUrl = req.body.originalUrl
	// 若未輸入網址，則顯示錯誤訊息
	if (!req.body.originalUrl) {
		const error = '請輸入網址'
		return res.render('index', { error })
	}

	Url.findOne({ originalUrl })
		.lean()
		.then(url => {
			// 若資料庫已有該網址，則回傳短網址
			if (url) {
				res.render('index', { originalUrl, shortenUrl: url.shortenUrl })
			} else {
				// 若資料庫沒有該網址，則新增短網址
				const shortenUrl = host + shortUrl()
				Url.create({ originalUrl, shortenUrl })
					.then(() => res.render('index', { originalUrl, shortenUrl }))
					.catch(error => console.log(error))
			}
		})
		.catch(error => console.log(error))
})

// 輸入短網址可連回原網址
router.get('/:shortenUrl', (req, res) => {
	const shortUrl = req.params.shortenUrl
	const shortenUrl = host + shortUrl
	Url.findOne({ shortenUrl })
		.lean()
		.then(url => {
			res.redirect(url.originalUrl)
		})
		.catch(error => console.log(error))
})

module.exports = router
