import Link from "next/link";
import { useRouter } from "next/router";
const { cloneElement } = require("react");

export default function ActiveLink({ children, activeLinkClass, ...props }) {
  const { pathname } = useRouter();
  let className = children.props.className || "";

  if (pathname === props.href) {
    className = `${className} ${
      activeLinkClass ? activeLinkClass : "text-indigo-600"
    }`;
  }

  return <Link {...props}>{cloneElement(children, { className })}</Link>;
}
