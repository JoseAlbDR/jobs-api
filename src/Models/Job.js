"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
var mongoose_1 = require("mongoose");
var JobSchema = new mongoose_1.default.Schema({
    company: {
        type: String,
        required: [true, "Please provide company name"],
        maxlength: 50,
    },
    position: {
        type: String,
        required: [true, "Please provide position"],
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ["interview", "declined", "pending"],
        default: "pending",
    },
    createdBy: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user"],
    },
    jobLocation: {
        type: String,
        required: [true, "Please provide location"],
        default: "my city",
    },
    jobType: {
        type: String,
        enum: ["full-time", "part-time", "remote", "internship"],
        default: "full-time",
    },
}, { timestamps: true });
exports.Job = mongoose_1.default.model("Job", JobSchema);
