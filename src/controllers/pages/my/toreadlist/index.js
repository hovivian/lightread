const controllersApiToReadListIndex = async (req, res) => {
  try {
    const foundToReadList = await prisma.ToReadList.findMany()
    return res.status(200).json(foundToReadList)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiToReadListIndex
