import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="text-secondary font-semibold text-lg">All Category</h1>
      <div className="grid grid-cols-1 gap-2">
        {categories.map((cat, idx) => (
          <NavLink
            to={`/categories/${cat.id}`}
            className={"btn bg-base-100 border-0 hover:bg-base-200"}
            key={idx}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
