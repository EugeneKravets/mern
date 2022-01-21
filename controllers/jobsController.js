import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, notFoundError, UnAuthenticatedError } from "../errors/index.js";
import checkPermissions from "../utils/CheckPermissions.js";

const createJob = async (req, res) => {
   const { position, company } = req.body;

   if (!position || !company) {
      throw new BadRequestError("Please provide all values");
   }
   req.body.createdBy = req.user.userId;
   const job = await Job.create(req.body);
   res.status(StatusCodes.CREATED).json({ job });
};
//
const getAllJobs = async (req, res) => {
   const jobs = await Job.find({ createdBy: req.user.userId });
   res.status(StatusCodes.OK).json({ totalJobs: jobs.length, numOfPages: 1, jobs });
};

const updateJob = async (req, res) => {
   const { id: jobId } = req.params;
   const { company, position } = req.body;
   if (!position || !company) {
      throw new BadRequestError("Please provide all values");
   }
   const job = await Job.findOne({ _id: jobId });
   if (!job) {
      throw new notFoundError(`no jod with: ${jobId}`);
   }
   // check permissions
   checkPermissions(req.user, job.createdBy);

   const updatedJob = await Job.findByIdAndUpdate({ _id: jobId }, req.body, {
      new: true,
      runValidators: true,
   });
   res.status(StatusCodes.OK).json({ updatedJob });
};
const deleteJob = async (req, res) => {
   const { id: jobId } = req.params;
   const job = await Job.findOne({ _id: jobId });
   if (!job) {
      throw new notFoundError(`no jod with: ${jobId}`);
   }
   // check permissions
   console.log(req.user);
   checkPermissions(req.user, job.createdBy);

   await job.remove();
   res.status(StatusCodes.OK).json({ msg: "Success Job removed" });
};

const showStats = async (req, res) => {
   res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
