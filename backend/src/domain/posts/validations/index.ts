import { create } from "./post/create";
import { getOne } from "./post/getOne";
import { destroy}  from "./post/destroy";
import { update } from "./post/update";
import { getUserPost } from "./post/getUserPost";


export const PostValidation = {
  create,
  getOne,
  destroy,
  update,
  getUserPost,
};

