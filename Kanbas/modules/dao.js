import mongoose from "mongoose";
import model from "./model.js";
export const createModule = (module) => {
    module._id = new mongoose.Types.ObjectId();
    return model.create(module);
};
export const findModulesForCourse = (courseId) => model.find({ course: courseId});
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });