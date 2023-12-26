import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { createReviewIntoDB, getAllCourseFromDB } from './review.service'

// create review controller
const createReviewController = catchAsync(async (req, res) => {
  const result = await createReviewIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Review created successfully',
    data: result,
  })
})

const getAllReviewsController = catchAsync(async (req, res) => {
  const result = await getAllCourseFromDB()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Review Get successfully',
    data: result,
  })
})
export { createReviewController, getAllReviewsController }
