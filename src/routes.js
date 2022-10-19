import { Router } from 'express'

const router = Router()

// API | AUTH
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)

// API | BOOK REVIEWS
router.get('/api/bookreviews', (await import('./controllers/api/lightread/bookreviews.js')).default)

// API | HOMEPAGE
router.get('/api/lightread', (await import('./controllers/api/lightread/index.js')).default)

// API | LIBRARY
router.get('/api/lightread/library', (await import('./controllers/api/lightread/library.js')).default)

// API | MY PROFILE | AUTH REQUIRED (BOOK REVIEW, TO-READ LIST)
router.get('/api/my/profile/show', (await import('./controllers/api/my/profile/show.js')).default)

// API | NOT FOUND
router.use('/api', (await import('./controllers/api/not-found.js')).default)

// PAGES | AUTH
router.get('/lightread/signup', (await import('./controllers/pages/auth/signup.js')).default)
router.get('/lightread/login', (await import('./controllers/pages/auth/login.js')).default)

// PAGES | BOOK REVIEWS
router.get('/lightread/bookreviews', (await import('./controllers/pages/lightread/bookreviews.js')).default)

// PAGES | HOMEPAGE
router.get('/lightread', (await import('./controllers/pages/lightread/index.js')).default)

// PAGES | LIBRARY
router.get('/lightread/library', (await import('./controllers/pages/lightread/library.js')).default)

// PAGES | MY PROFILE | AUTH REQUIRED (BOOK REVIEW, TO-READ LIST)
router.get('/lightread/my/profile', (await import('./controllers/pages/my/profile/show.js')).default)

// PAGES | NOT FOUND
router.use((await import('./controllers/pages/not-found.js')).default)


export default router
