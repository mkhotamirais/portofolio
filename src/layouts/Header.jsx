import { useState } from "react";

const menus = [
  { href: "about", text: "about" },
  { href: "skills", text: "skills" },
  { href: "projects", text: "projects" },
  { href: "contact", text: "contact" },
];

const Header = () => {
  const [active, setActive] = useState(null);

  const onActiveNav = (e, i) => {
    setActive(i);
  };

  return (
    <header className="z-50 h-16 border-b px-3 lg:px-16 flex items-center justify-between sticky top-0 backdrop-blur backdrop-saturate-100 bg-[rgba(255,255,255,0.5)]">
      <a href="/" className="font-semibold text-xl uppercase">
        mkhotami
      </a>
      <div className="flex gap-2 sm:gap-4 lg:gap-10">
        {menus.map((menu, i) => (
          <a
            key={i}
            href={`#${menu.href}`}
            onClick={(e) => onActiveNav(e, i)}
            className={`${active === i ? "opacity-50" : null} capitalize hover:opacity-50`}
          >
            {menu.text}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
