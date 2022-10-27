// import yup from 'yup'

// import prisma from '../../../_helpers/prisma.js'
// import handleErrors from '../../../_helpers/handle-errors.js'

// const createSchema = yup.object({
//   identifierId: yup.string().required(),
//   image: yup.string().required(),
//   title: yup.string().required(),
//   author: yup.string().required(),
// })

// const controllersApiToReadListCreate = async (req, res) => {
//   try {
//     const { body, session: { user: { id } } } = req
//     const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
//     const newToReadList = await prisma.ToReadList.create({
//       data: {
//         ...verifiedData,
//         book: {
//           connectOrCreate: {
//             where: { identifierId: verifiedData.identifierId },
//             create: verifiedData
//           }
//         }
//       }
//     })
//     return res.status(201).json(newToReadList)
//   } catch (err) {
//     return handleErrors(res, err)
//   }
// }

// export default controllersApiToReadListCreate

import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  identifierId: yup.string().required(),
  image: yup.string().required(),
  title: yup.string().required(),
  author: yup.string().required(),
})

const controllersApiToReadListCreate = async (req, res) => {
  try {
    const { body, session: { user: { id } } } = req
    const verifiedData = await createSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const newToReadList = await prisma.toReadList.create({
      data: {
        books: {
          connectOrCreate: {
            where: { identifierId: verifiedData.identifierId },
            create: verifiedData
          }
        },
        user: {
          connect: { id }
        }
      }
    })
    return res.status(201).json(newToReadList)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiToReadListCreate
