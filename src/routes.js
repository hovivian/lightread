import { Router } from 'express'

const router = Router()

// API | AUTH
router.post('/api/auth/signup', (await import('./controllers/api/auth/signup.js')).default)
router.post('/api/auth/login', (await import('./controllers/api/auth/login.js')).default)
router.delete('/api/auth/logout', (await import('./controllers/api/auth/logout.js')).default)

// API | BOOK REVIEWS

// API | HOMEPAGE

// API | LIBRARY

// API | MY PROFILE | AUTH REQUIRED (BOOK REVIEW, TO-READ LIST)

// API | NOT FOUND




// PAGES | AUTH
router.get('/auth/signup', (await import('./controllers/pages/auth/signup.js')).default)
router.get('/auth/login', (await import('./controllers/pages/auth/login.js')).default)

// PAGES | BOOK REVIEWS

// PAGES | HOMEPAGE

// PAGES | LIBRARY

// PAGES | MY PROFILE | AUTH REQUIRED (BOOK REVIEW, TO-READ LIST)

// PAGES | NOT FOUND


export default router
