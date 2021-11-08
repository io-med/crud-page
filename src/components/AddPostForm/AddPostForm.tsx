import { useState } from "react";
import { createPost } from "../../api/api";
import { Post } from "../../types/Post";
import { Button } from "../Button";
import { ResultMessage } from "../ResultMessage";

type Props = {
  addPost: (post: Post) => void;
  hidePopUp: () => void;
}

export const AddPostForm: React.FC<Props> = ({ addPost, hidePopUp }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [errorWasReceived, setErrorWasReceived] = useState(false);
  const [postWasAdded, setPostWasAdded] = useState(false);

  const newPost = {
    title,
    text,
    image,
    url,
  }

  const clear = () => {
    setTitle('');
    setText('');
    setImage('');
    setUrl('');
  }

  const submitHandler = (
    event: React.FormEvent<HTMLFormElement>,
    postToAdd: Partial<Post>,
  ) => {
    event.preventDefault();
    createPost(postToAdd)
      .then((resp) => {
        addPost(resp);
        setPostWasAdded(true);
      })
      .catch(() => {
        setErrorWasReceived(true);
      })
    clear();
  };

  return (
    <form
      className="AddPostForm"
      onSubmit={(event) => {
        submitHandler(event, newPost)
      }}
    >
      {errorWasReceived || postWasAdded ||
        <div className="AddPostForm__content">
          <h2
            className="AddPostForm__heading"
          >
            Add new post
          </h2>

          <input
            className="AddPostForm__input"
            type="text"
            value={title}
            onChange={(event => {
              setTitle(event.target.value)
            })}
            placeholder="enter english name"
            required
          />

          <input
            className="AddPostForm__input"
            type="text"
            value={text}
            onChange={(event => {
              setText(event.target.value)
            })}
            placeholder="enter latin name"
            required
          />

          <input
            className="AddPostForm__input"
            type="text"
            value={image}
            onChange={(event => {
              setImage(event.target.value)
            })}
            placeholder="add image url"
            required
          />

          <input
            className="AddPostForm__input"
            type="text"
            value={url}
            onChange={(event => {
              setUrl(event.target.value)
            })}
            placeholder="add article url"
            required
          />

          <div className="AddPostForm__buttons">
            <Button
              text="add post"
              isSubmit={true}
            />

            <Button
              text="cancel"
              clickHandler={hidePopUp}
              isWhite={true}
            />
          </div>
        </div>
      }
      {errorWasReceived &&
        <ResultMessage
          hidePopUp={hidePopUp}
          itWasError={errorWasReceived}
        />
      }
      {postWasAdded &&
        <ResultMessage
          hidePopUp={hidePopUp}
          itWasError={errorWasReceived}
        />
      }
    </form>
  )
}
