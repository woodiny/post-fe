import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { PostMetaType } from "../types/post";

export default function PostMeta({
  createdAt,
  likes,
  commentCount,
}: PostMetaType) {
  return (
    <div className="flex items-center text-sm text-gray-500">
      <time dateTime={createdAt}>
        {new Date(createdAt).toLocaleDateString()}
      </time>
      <span className="mx-2">·</span>
      <div className="flex items-center gap-1">
        <FaHeart className="w-4 h-4" />
        <span>{likes}</span>
      </div>
      <span className="mx-2">·</span>
      <div className="flex items-center gap-1">
        <FaComment className="w-4 h-4" />
        <span>{commentCount}</span>
      </div>
    </div>
  );
}
