import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiMyBookReviews = async (req, res) => {
  try {
    const foundBookReviews = await prisma.bookReview.findMany({
      include: {
        book: true,
        user: true
      }
    })
    return res.status(200).json(foundBookReviews)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyBookReviews
