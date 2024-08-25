interface Props {
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onSubmit, onChange }: Props) => {
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;
