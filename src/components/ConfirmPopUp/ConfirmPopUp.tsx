import { useState } from "react";
import { removePost } from "../../api/api";
import { Post } from "../../types/Post";
import { Button } from "../Button";
import { PopUpOverlay } from "../PopUpOverlay";
import { ResultMessage } from "../ResultMessage";

type Props = {
  popUpDisplayHandler: (isDisplayed: boolean) => void;
  setPosts: (posts: Post[] | ((current: Post[]) => Post[])) => void;
  postId: number;
}

export const ConfirmPopUp: React.FC<Props> = ({ popUpDisplayHandler, postId, setPosts }) => {
  const [errorWasReceived, setErrorWasReceived] = useState(false);
  const [postWasDeleted, setPostWasDeleted] = useState(false);

  const hidePopUp = () => {
    popUpDisplayHandler(false);
  }

  const deletePost = (idOfPostToDelete: number) => {
    removePost(idOfPostToDelete)
      .then(() => {
        setPosts((current: Post[]) => {
          return current.filter(post => post.id !== postId);
        });
        setPostWasDeleted(true);
      })
      .catch(() => {
        setErrorWasReceived(true)
      })
  }

  const clickHandler = () => {
    deletePost(postId);
  }

  return (
    <div className="ConfirmPopUp">
      <PopUpOverlay
        hidePopUp={hidePopUp}
      />

      <div className="ConfirmPopUp__content">
        {errorWasReceived || postWasDeleted ||
          <div className="ConfirmPopUp__interface">
            <p className="ConfirmPopUp__text">
              Are you sure?
            </p>

            <div className="ConfirmPopUp__buttons">
              <Button
                clickHandler={clickHandler}
                text="yes"
                isWhite={true}
              />

              <Button
                clickHandler={hidePopUp}
                text="no"
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

        {postWasDeleted &&
          <ResultMessage
            hidePopUp={hidePopUp}
            itWasError={errorWasReceived}
          />
        }
      </div>
    </div>
  )
}
