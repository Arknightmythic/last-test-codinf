"use client";

const frameworks = [
  {
    value: "admin",
    label: "admin",
  },
  {
    value: "user",
    label: "user",
  },
];

export function Sort({ sortQuery, setSortQuery }) {
  return (
    <>
      <select
        id="Role"
        value={sortQuery}
        onChange={(e) => setSortQuery(e.target.value)}
        autoComplete="country-name"
        className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      >
        
        <option value="">sort by...</option>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
    </>
  );
}
