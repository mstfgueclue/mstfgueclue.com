import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center font-decoration gap-1 -skew-y-2">
      <span className="-translate-y-[2px] translate-x-[2px]">M</span>
      <span className="translate-y-[2px] -translate-x-[2px]">G</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="py-8">
      <div className="px-6 sm:px-8">
        <div className="max-w-3xl mx-auto flex justify-between gap-4 items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
}
