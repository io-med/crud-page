import classNames from "classnames";
import { useEffect, useState } from "react";
import { Button } from "../Button"

type Props = {
  addPopUpToggler: () => void;
}

export const AddPostButton: React.FC<Props> = ({ addPopUpToggler }) => {
  const [isHidden, SetIsHidden] = useState(true);

  const changeVisibility = () => {
    SetIsHidden(current => !current);
  };

  useEffect(() => {
    setTimeout(changeVisibility, 0)
  }, []);

  return (

    <div
      className={classNames(
        'AddPostButton',
        {'AddPostButton--hidden': isHidden},
      )}
    >
      <Button
        text="create new post"
        clickHandler={addPopUpToggler}
      />
    </div>
  )
}