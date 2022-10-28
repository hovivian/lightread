import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyToReadListShow = async (req, res) => {
  try {
    const { params: { id, title } } = req
    const foundToReadList = await prisma.toReadList.findUnique({
      where: { id: Number(id) },
      include: {
        books: true,
        user: true
      },
      rejectOnNotFound: true
    })
    return res.status(200).json(foundToReadList)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyToReadListShow
