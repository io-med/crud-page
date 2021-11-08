import classNames from "classnames"
import { Post } from "../../types/Post"
import { EditOrDelete } from "../EditOrDelete"

type Props = {
  postData: Post;
  isInEditMode: boolean;
  setPosts: (posts: Post[] | ((current: Post[]) => Post[])) => void;
}

export const PostCard: React.FC<Props> = ({
  postData,
  isInEditMode,
  setPosts,
}) => {
  return (
    <div className="PostCard">
      <h2 className="PostCard__heading">
        {postData.title}
      </h2>

      <p className="PostCard__latin-name">
        {postData.text}
      </p>

      <a
        href={postData.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={classNames(
            'PostCard__image',
            {'PostCard__image--tall': !isInEditMode}
          )}
          src={postData.image}
          alt={postData.title}
        />
      </a>

      {isInEditMode &&
        <EditOrDelete
          postData={postData}
          setPosts={setPosts}
        />}
    </div>
  )
}
