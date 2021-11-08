import classNames from 'classnames';
import { Button } from '../Button';

type Props = {
  hidePopUp: () => void;
  itWasError: boolean;
}

export const ResultMessage: React.FC<Props> = ({ hidePopUp, itWasError }) => {

  let message = 'Success!';

  if (itWasError) {
    message = 'Oops, something went wrong!'
  }

  return (
    <div className="ResultMessage">
      <p
        className={classNames(
          'ResultMessage__text',
          { 'ResultMessage__text--error': itWasError },
        )}
      >
        {message}
      </p>

      <Button
        text="close"
        fixedWidth={true}
        clickHandler={hidePopUp}
      />
    </div>
  )
}
