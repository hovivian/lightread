import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  content: yup.string().required(),
  book: yup.object({
    identifierId: yup.string().required(),
    image: yup.string().required(),
    title: yup.string().required(),
    author: yup.string().required()
  })
})

const controllersApiBookReviewsCreate = async (req, res) => {
  try {
    const { body, session: { user: { id } } } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const newBookReview = await prisma.bookReview.create({
      data: {
        ...verifiedData,
        book: {
          connectOrCreate: {
            where: { identifierId: verifiedData.book.identifierId },
            create: verifiedData.book
          }
        },
        user: {
          connect: { id }
        }
      }
    })
    return res.status(201).json(newBookReview)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiBookReviewsCreate
