import { ActiveLink } from "@components/ui/common";

export default function BreadCrumb({ items }) {
  const rederredItems = items.map((item, i) => {
    return (
      <>
        <li
          key={item.href}
          className={`${
            i == 0 ? "pr-4" : "px-4"
          } font-medium text-gray-500 hover:text-gray-900`}
        >
          <ActiveLink href={item.href} activeLinkClass="text-yellow-500">
            <span>{item.value}</span>
          </ActiveLink>
        </li>
      </>
    );
  });
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {rederredItems}
      </ol>
    </nav>
  );
}
