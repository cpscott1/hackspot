import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap, { Power3 } from "gsap";

export default function CustomLink({ name, path }) {
  let link = useRef(null);

  const onHover = () => {
    gsap.to(link, {
      duration: 0.2,
      css: { color: "#0a89ff", top: "5px", left: "2px" },
      ease: Power3,
    });
  };

  const onExit = () => {
    gsap.to(link, {
      duration: 0.2,
      css: { color: "black", top: "0px", left: "0px" },
      ease: Power3,
    });
  };
  return (
    <Link href={path}>
      <a
        ref={(el) => {
          link = el;
        }}
        onMouseEnter={onHover}
        onMouseLeave={onExit}
      >
        {name}
      </a>
    </Link>
  );
}
