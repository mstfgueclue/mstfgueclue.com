import Image from "next/image";

export function ContactCard() {
  return (
    <div className="shadow rounded-lg bg-white p-2 rotate-3">
      <div className="relative w-64 h-72 overflow-hidden rounded-lg">
        <Image
          src="/images/portrait-mustafa.JPG"
          sizes="400px"
          alt="Mustafa from the side"
          fill
          className="object-cover object-[65%_center]"
        />
      </div>
    </div>
  );
}
