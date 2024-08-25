"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

import SearchBar from "./ui/SearchBar";

const NavBar = () => {
  const router = useRouter();
  const [searchContent, setSearchContent] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };
  const onSubmit = () => {
    router.push(`/search-result?query=${searchContent}`);
  };

  return (
    <div className="navbar bg-slate-100">
      <div className="flex-1">
        <div
          className="flex flex-col items-center cursor-pointer"
          role="button"
          onClick={() => router.push("/")}
        >
          <IoFastFood className="text-4xl" />
          <span className="text-xl font-bold">FOFood</span>
        </div>
      </div>
      <div className="flex-none gap-2">
        <SearchBar onChange={onChange} onSubmit={onSubmit} />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <FaRegUserCircle className="w-full h-full" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
