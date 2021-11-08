import { Post } from "../../types/Post";
import { AddPostForm } from "../AddPostForm";
import { PopUpOverlay } from "../PopUpOverlay";

type Props = {
  setAddPopUpIsShown: (addPopUpIsShown: boolean) => void;
  addPost: (post: Post) => void;
}

export const AddPost: React.FC<Props> = ({
  setAddPopUpIsShown,
  addPost,
}) => {

  const hidePopUp = () => {
    setAddPopUpIsShown(false);
  }

  return (
    <div className="AddPost">
      <PopUpOverlay 
        hidePopUp={hidePopUp}
      />

      <AddPostForm
        addPost={addPost}
        hidePopUp={hidePopUp}
      />
    </div>
  )
}
