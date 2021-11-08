import classNames from "classnames";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post";
import { Button } from "../Button";
import { ConfirmPopUp } from "../ConfirmPopUp";
import { EditPopUp } from "../EditPopUp";

type Props = {
  postData: Post;
  setPosts: (posts: Post[] | ((current: Post[]) => Post[])) => void;
}

export const EditOrDelete: React.FC<Props> = ({ postData, setPosts }) => {
  const [confirmIsShown, setConfirmIsShown] = useState(false);
  const [editIsShown, setEditIsShown] = useState(false);
  const [isHidden, SetIsHidden] = useState(true);

  const changeVisibility = () => {
    SetIsHidden(current => !current);
  };

  useEffect(() => {
    setTimeout(changeVisibility, 0)
  }, []);

  const showEdit = () => {
    setEditIsShown(true);
  }

  const showConfirm = () => {
    setConfirmIsShown(true);
  }

  return (
    <div
      className={classNames(
        'EditOrDelete',
        { 'EditOrDelete--hidden': isHidden },
      )}
    >
      <Button
        text="edit"
        clickHandler={showEdit}
        fixedWidth={true}
      />

      <div>
        {confirmIsShown &&
          <ConfirmPopUp
            popUpDisplayHandler={setConfirmIsShown}
            postId={postData.id}
            setPosts={setPosts}
          />
        }

        {editIsShown &&
          <EditPopUp
            postData={postData}
            popUpDisplayHandler={setEditIsShown}
            setPosts={setPosts}
          />
        }
      </div>

      <Button
        text="delete"
        isWhite={true}
        clickHandler={showConfirm}
        fixedWidth={true}
      />
    </div>
  )
};
