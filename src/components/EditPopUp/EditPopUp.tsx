import { useState } from "react";
import { editPost } from "../../api/api";
import { Post } from "../../types/Post";
import { Button } from "../Button";
import { PopUpOverlay } from "../PopUpOverlay";
import { ResultMessage } from "../ResultMessage";

type Props = {
  popUpDisplayHandler: (isDisplayed: boolean) => void;
  setPosts: (posts: Post[] | ((current: Post[]) => Post[])) => void;
  postData: Post;
}

export const EditPopUp: React.FC<Props> = ({
  popUpDisplayHandler,
  postData,
  setPosts,
}) => {
  const [title, setTitle] = useState(postData.title);
  const [text, setText] = useState(postData.text);
  const [image, setImage] = useState(postData.image);
  const [url, setUrl] = useState(postData.url);
  const [errorWasReceived, setErrorWasReceived] = useState(false);
  const [postWasChanged, setPostWasChanged] = useState(false);

  const modifiedPost = {
    title,
    text,
    image,
    url,
  }

  const changeSelectedPost = (posts: Post[], response: Post) => {
    return posts.map(post => {
      if (post.id === response.id) {
        return { ...post, ...response };
      }

      return post;
    })
  }

  const hidePopUp = () => {
    popUpDisplayHandler(false);
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editPost(modifiedPost, postData.id)
      .then((response) => {
        setPosts(current => {
          return changeSelectedPost(current, response)
        });
        setPostWasChanged(true);
      })
      .catch(() => {
        setErrorWasReceived(true);
      });
  };

  return (
    <div className="EditPopUp">
      <PopUpOverlay
        hidePopUp={hidePopUp}
      />

      <form
        className="EditPopUp__form"
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        {errorWasReceived || postWasChanged ||
          <div className="EditPopUp__interface">
            <input
              type="text"
              value={title}
              onChange={(event => {
                setTitle(event.target.value)
              })}
              placeholder="enter english name"
              required
            />

            <input
              className="EditPopUp__input"
              type="text"
              value={text}
              onChange={(event => {
                setText(event.target.value)
              })}
              placeholder="enter latin name"
              required
            />

            <input
              className="EditPopUp__input"
              type="text"
              value={image}
              onChange={(event => {
                setImage(event.target.value)
              })}
              placeholder="add image url"
              required
            />

            <input
              className="EditPopUp__input"
              type="text"
              value={url}
              onChange={(event => {
                setUrl(event.target.value)
              })}
              placeholder="add article url"
              required
            />

            <Button
              text="submit"
              isSubmit={true}
            />

            <Button
              text="cancel"
              clickHandler={hidePopUp}
            />
          </div>
        }

        {errorWasReceived &&
          <ResultMessage
            hidePopUp={hidePopUp}
            itWasError={errorWasReceived}
          />
        }

        {postWasChanged &&
          <ResultMessage
            hidePopUp={hidePopUp}
            itWasError={errorWasReceived}
          />
        }
      </form>
    </div>
  )
}
