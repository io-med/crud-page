import { Button } from "../Button"

type Props = {
  isReverse: boolean;
  query: string;
  setSortBy: (sortBy: string) => void;
  reverse: () => void;
  setQuery: (query: string) => void;
  resetSort: () => void;
}

export const SearchAndSort: React.FC<Props> = ({
  isReverse,
  query,
  setSortBy,
  reverse,
  setQuery,
  resetSort,
}) => {
  return (
    <div className="SearchAndSort">
      <input
        className="SearchAndSort__input"
        type="text"
        value={query}
        placeholder="search..."
        onChange={(event) => {
          setQuery(event.target.value)
        }}
      />

      <select
        className="SearchAndSort__select"
        onChange={(event) => {
          setSortBy(event.target.value)
        }}
      >
        <option value="title">
          english name
        </option>

        <option value="text">
          latin name
        </option>

        <option value="order">
          order
        </option>

        <option value="updated">
          updated
        </option>
      </select>

      <Button
        text={isReverse ? 'v' : '^'}
        clickHandler={reverse}
        isWhite={true}
      />
      
      <Button
        text="reset"
        isWhite={true}
        clickHandler={resetSort}
      />
    </div>
  )
}