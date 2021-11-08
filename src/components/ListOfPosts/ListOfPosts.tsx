import { Post } from "../../types/Post";
import { PostCard } from "../PostCard";

type Props = {
  posts: Post[];
  isInEditMode: boolean;
  setPosts: (posts: Post[] | ((current: Post[]) => Post[])) => void;
}

export const ListOfPosts: React.FC<Props> = ({ posts, isInEditMode, setPosts }) => {

  return (
    <ul className='ListOfPosts'>
      {posts.map(post => (
        (post.active === 1) &&
        <li
          className='ListOfPosts__item'
          key={post.id}
        >
          <PostCard
            isInEditMode={isInEditMode}
            postData={post}
            setPosts={setPosts}
          />
        </li>
      ))}
    </ul>
  )
};
