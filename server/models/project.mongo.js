/* eslint-disable no-undef */
const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
  {
    project_name: {
      type: String,
      required: [true, "Please provide project name."],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Please Provide project image."]
    },
    github:{
        type:String,
        required:[true,"Please provide github link"]
    },
    languages: {
        type: Array,
        required: [true, "Please provide project languages."],
    },
    description: {
      type: String,
      required: [true, "please provide description."],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projects", projectsSchema);
