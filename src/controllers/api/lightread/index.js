import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersPagesLightReadIndex = async (req, res) => {
  try {
    // Filters
    const q = req.query.q || ''
    const orderBy = req.query.orderBy || 'id'
    const sortBy = req.query.sortBy || 'asc'

    // Pagination
    const take = 10
    const page = Number(req.query.page || '1')
    const skip = (page - 1) * take

    const where = {
      OR: [
        {
          title: {
            contains: q
          }
        }, {
          description: {
            contains: q
          }
        }
      ]
    }

    const totalBookReviews = await prisma.bookReview.count({ where })
    const foundBookReviews = await prisma.bookReview.findMany({
      take,
      skip,
      where,
      orderBy: {
        [orderBy]: sortBy
      }
    })

    return res.status(200).json({
      bookReviews: foundBookReviews,
      meta: { currentPage: page, totalPages: Math.ceil(totalBookReviews / take) }
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersPagesLightReadIndex
