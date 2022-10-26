import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  book: yup.string().required(),
  content: yup.string()
})

const controllersApiBookReviewsCreate = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const newBookReview = await prisma.bookReview.create({ data: verifiedData })
    return res.status(201).json(newBookReview)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiBookReviewsCreate
