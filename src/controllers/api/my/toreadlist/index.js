import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyToReadList = async (req, res) => {
  try {
    const {session: { user: { id } } } = req
    const foundToReadList = await prisma.toReadList.findUnique({
        where: { userId: id },
        include: {
          user: true,
          books: true
      },
        rejectOnNotFound: true })
    return res.status(200).json(foundToReadList)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyToReadList
