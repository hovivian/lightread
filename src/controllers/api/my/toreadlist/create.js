import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  title: yup.string().required(),
})

const controllersApiToReadListCreate = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const newToReadList = await prisma.toReadList.create({ data: verifiedData })
    return res.status(201).json(newToReadList)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiToReadListCreate
