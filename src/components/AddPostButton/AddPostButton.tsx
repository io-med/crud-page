import { Button } from "../Button"

type Props = {
  addPopUpToggler: () => void;
}

export const AddPostButton: React.FC<Props> = ({ addPopUpToggler }) => {
  return (

    <div
      className="AddPostButton"
    >
      <Button
        text="create new post"
        clickHandler={addPopUpToggler}
      />
    </div>
  )
}