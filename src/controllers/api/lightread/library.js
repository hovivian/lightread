import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

// validate
//

const controllersPagesLightReadLibrary = async () => {
  try {
    const readingList = await prisma.readingList.update({
      where: { userId },
      data: {
        books: {
          connectOrCreate: {
            where: { id: body.id },
            create: { id: body.id, title: body.title, author: body.author },
          }
        }
      }
    })
    res.json(readingList)
  } catch (err) {
    return handleErrors(res, err);
  }
}

export default controllersPagesLightReadLibrary
