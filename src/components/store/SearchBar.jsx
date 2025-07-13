import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    return (
        <>
            <div className="flex items-center max-xl:mt-3 gap-2 w-full xl:w-96 xl:fixed z-10 xl:p-3 xl:top-10 xl:right-10 rounded-xl searchbar">
                {/* Animated Search Bar */}
                <div
                    className={`opacity-100 translate-y-0 uppercase h-full w-full`}
                >
                    <input
                        type="text"
                        className="w-full bg-[#18181895] backdrop-blur-sm rounded-xl text-primary-text h-full border-2 px-3 py-2 border-primary-border outline-none"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && search !== "") {
                                navigate(`/fashion-store/s/${search}`);
                            }
                        }}
                    />
                </div>

                {/* Search Icon */}
                <div
                    className="text-xl text-primary-text cursor-pointer"
                    onClick={() => {
                        if (search !== "") {
                            navigate(`/fashion-store/s/${search}`);
                        }
                    }}
                >
                    <IoSearchSharp />
                </div>

            </div >
        </>
    );
};

export default SearchBar;
