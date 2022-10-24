import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiMyBookReviews = async (req, res) => {
  try {
    const { params: { id } } = req
    const foundBookReviews = await prisma.myBookReviews.findUnique({ where: { id: Number(id) }, rejectOnNotFound: true })
    return res.status(200).json(foundBookReviews)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyBookReviews
