import React from "react";

export function TextSection({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-20 sm:py-28 lg:px-8 isolate ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-decoration text-5xl mb-8 -skew-y-2 text-balance">
          {title}
        </h2>
        <div className="text-lg space-y-4 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
