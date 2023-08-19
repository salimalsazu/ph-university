import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicSemesterFIlterableFileds } from './academicSemester.constant';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemesterController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemesterService(
      req.body
    );

    sendResponse<AcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created successfully',
      data: result,
    });
  }
);

const getAllAcademicSemestersControllers = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicSemesterFIlterableFileds);

    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    console.log('filters....', filters);
    console.log('options....', options);

    const result = await AcademicSemesterService.getAllAcademicSemestersService(
      filters,
      options
    );

    sendResponse<AcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleSemesterController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getSingleSemesterService(
      req.params.id
    );
    sendResponse<AcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Fetched successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemesterController,
  getAllAcademicSemestersControllers,
  getSingleSemesterController,
};
