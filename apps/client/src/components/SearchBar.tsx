import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Search />
      <Input
        type="text"
        placeholder="ស្វែងរក"
        className="w-full px-4 py-2 border border-gray-300 rounded-full"
      />
    </div>
  );
};

export default SearchBar;
