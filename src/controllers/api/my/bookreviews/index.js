import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyBookReviews = async (req, res) => {
  try {
    const { session: { user: { id } } } = req
    const foundBookReviews = await prisma.bookReview.findMany({
      where: {userId: id},
      include: {
        book: true
      }
    })
    return res.status(200).json(foundBookReviews)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyBookReviews
