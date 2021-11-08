import { Button } from "../Button";
import { SearchAndSort } from "../SearchAndSort";

type Props = {
  modeToggler: () => void;
  isInEditMode: boolean;
  isReversed: boolean;
  query: string;
  setSortBy: (sortBy: string) => void;
  reverse: () => void;
  setQuery: (query: string) => void;
  resetSort: () => void;
}

export const Header: React.FC<Props> = ({
  modeToggler,
  isInEditMode,
  isReversed,
  query,
  setSortBy,
  reverse,
  setQuery,
  resetSort,
}) => {
  return (
    <header className="Header">
      <h1 className="Header__heading">
        CRUD
      </h1>
      <SearchAndSort
        isReverse={isReversed}
        query={query}
        setSortBy={setSortBy}
        reverse={reverse}
        setQuery={setQuery}
        resetSort={resetSort}
      />
      <Button
        text={isInEditMode ? 'exit edit mode' : 'enter edit mode'}
        fixedWidth={true}
        clickHandler={modeToggler}
      />
    </header>
  )
};
