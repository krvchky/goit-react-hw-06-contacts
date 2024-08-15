import style from "./searchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function inputChange(event) {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <div>
      <div>
        <label
          htmlFor="search-contact"
          className={style.formSearch}>
          Search contact🔍
        </label>
        <input
          className={style.inputSearch}
          type="text"
          id="search-contact"
          name="searchContact"
          placeholder="Enter contact name"
          value={filter}
          onChange={inputChange}
        />
      </div>
    </div>
  );
}
