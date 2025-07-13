import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HoverDropdownMobile = ({ setIsMenuOpen, ItemCategoryList }) => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleSubMenu = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className="relative bg-[#181818] rounded-md shadow-lg">
            {/* Dropdown */}
            <div className="max-h-[90vh] overflow-y-scroll">
                {ItemCategoryList?.map((category, index) => (
                    <div key={index} className="border-b border-gray-700">
                        {/* Parent Category */}
                        <div
                            className="flex justify-between items-center px-4 py-3 text-primary-text cursor-pointer"
                            onClick={() => toggleSubMenu(category.category)}
                        >
                            <NavLink to={`/fashion-store/c/${category.category}`}
                                onClick={() => setIsMenuOpen(false)}>
                                {category.category}
                            </NavLink>
                            {category.subcategories?.length > 0 && (
                                <button className="text-lg">
                                    {openCategory === category.category ? "−" : "+"}
                                </button>
                            )}
                        </div>

                        {/* Subcategories */}
                        {openCategory === category.category && category.subcategories?.length > 0 && (
                            <div className="flex flex-col bg-[#181818] pl-4 pb-2">
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <NavLink
                                        to={`/fashion-store/c/${category.category}/${subcategory}`}
                                        key={subIndex}
                                        className="px-4 py-2 text-primary-text cursor-pointer"
                                        onClick={() => { setOpenCategory(null); setIsMenuOpen(false) }}
                                    >
                                        {subcategory}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HoverDropdownMobile;
