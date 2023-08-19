import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemeste.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.createAcademicSemesterController
);

router.get('/', AcademicSemesterController.getAllAcademicSemestersControllers);

router.get('/:id', AcademicSemesterController.getSingleSemesterController);

export const AcademicSemesterRoutes = router;
