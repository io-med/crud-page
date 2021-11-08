import classNames from "classnames";
import { useEffect, useState } from "react";
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
  const [isHidden, SetIsHidden] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

  const changeVisibility = () => {
    SetIsHidden(current => !current);
  };

  useEffect(() => {
    setTimeout(changeVisibility, 0)
  }, []);

  const hidePopUp = () => {
    popUpDisplayHandler(false);
  }

  const deletePost = (idOfPostToDelete: number) => {
    removePost(idOfPostToDelete)
      .then(() => {
        setPostWasDeleted(true);
        setPosts((current: Post[]) => {
          return current
            .filter(post => post.id !== postId);
        });
      })
      .catch(() => {
        setErrorWasReceived(true)
      })
  }

  const clickHandler = () => {
    deletePost(postId);
    setButtonIsDisabled(true)
  }

  return (
    <div className="ConfirmPopUp">
      <PopUpOverlay
        hidePopUp={hidePopUp}
      />

      <div
        className={classNames(
          'ConfirmPopUp__content',
          { 'ConfirmPopUp__content--hidden': isHidden },
        )}
      >
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
                fixedWidth={true}
                isDisabled={buttonIsDisabled}
              />

              <Button
                clickHandler={hidePopUp}
                text="no"
                fixedWidth={true}
              />
            </div>
          </div>
        }

        <div className="ConfirmPopUp__message">
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
    </div>
  )
}
