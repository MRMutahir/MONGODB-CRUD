import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      mix: 500,
    },
    img: {
      type: String,
    },
    Like: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const post = mongoose.model("Post", postSchema);

export { post };
