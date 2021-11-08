import './App.scss';
import { useEffect, useState } from 'react';
import { getPosts } from './api/api';
import { AddPost } from './components/AddPost';
import { AddPostButton } from './components/AddPostButton';
import { Post } from './types/Post';
import { Header } from './components/Header';
import { ListOfPosts } from './components/ListOfPosts';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [addPopUpIsShown, setAddPopUpIsShown] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [isReversed, setIsReversed] = useState(false);
  const [query, setQuery] = useState('');

  const reverse = () => {
    setIsReversed(current => !current);
  }

  const resetSort = () => {
    setSortBy('');
    setIsReversed(false);
    setQuery('');
  }

  const sorted = posts.filter(post => {
    return (
      post.title
        .toLowerCase()
        .includes(query.toLowerCase())
      || post.text
        .toLowerCase()
        .includes(query.toLowerCase())
    )
  })

  sorted.sort((postA, postB) => {
    switch (sortBy) {
      case 'title':
        return postA.title.localeCompare(postB.title);

      case 'text':
        return postA.text.localeCompare(postB.text);

      case 'order':
        if (postA.sort_order && postB.sort_order) {
          return (postA.sort_order - postB.sort_order)
        } else if (postA.sort_order) {
          return -1;
        } else if (postB.sort_order) {
          return 1;
        } else {
          return -1;
        };

      case 'updated':
        const dateA = new Date(postA.updated_at).getTime();
        const dateB = new Date(postB.updated_at).getTime();

        return (dateA - dateB);

      default:
        return 0;
    }
  })

  if (isReversed) {
    sorted.reverse();
  }

  const modeToggler = () => {
    setIsInEditMode(current => !current)
  }

  const addPopUpToggler = () => {
    setAddPopUpIsShown(current => !current);
  }

  const loadAllPosts = () => {
    getPosts()
      .then(postsFormServer => {
        setPosts(postsFormServer);
      });
  }

  const addPost = (post: Post) => {
    setPosts(prev => {
      return [...prev, { ...post, active: 1 }];
    });
  };

  useEffect(() => {
    loadAllPosts();
  }, [])

  return (
    <>
      <Header
        modeToggler={modeToggler}
        isInEditMode={isInEditMode}
        isReversed={isReversed}
        query={query}
        setSortBy={setSortBy}
        reverse={reverse}
        setQuery={setQuery}
        resetSort={resetSort}
      />
      <main>
      <ListOfPosts
        posts={sorted}
        isInEditMode={isInEditMode}
        setPosts={setPosts}
      />
        {isInEditMode &&
          <AddPostButton
          addPopUpToggler={addPopUpToggler}
          />}
        {addPopUpIsShown &&
          <AddPost
            setAddPopUpIsShown={setAddPopUpIsShown}
            addPost={addPost}
          />}
      </main>
    </>
  );
}

export default App;
