"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  techStack = [],
}) {
  const isExternal = (url) => !!url && /^https?:\/\//i.test(url);

  // Reusable action link (bottom buttons)
  const ActionLink = ({ href, children, label }) => {
    if (!href) return null;
    const classes =
      "inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10";
    return isExternal(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
        title={label}
      >
        {children}
      </a>
    ) : (
      <Link href={href} aria-label={label} className={classes} title={label}>
        {children}
      </Link>
    );
  };

  // Overlay link (on image hover) — prefers gitUrl, falls back to previewUrl
  const overlayHref = gitUrl || (previewUrl && previewUrl !== "/" ? previewUrl : null);

  return (
    <div className="min-w-0 h-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10">
      {/* Image + Hover Overlay */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl group">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
          priority={false}
        />

        {/* Clickable overlay (code icon) */}
        {overlayHref && (
          isExternal(overlayHref) ? (
            <a
              href={overlayHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} - open link`}
              title="Open"
              className="absolute inset-0 flex items-center justify-center rounded-xl
                         bg-black/50 opacity-0 transition-opacity duration-200
                         group-hover:opacity-100 group-focus-within:opacity-100"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/80">
                <CodeBracketIcon className="h-8 w-8 text-white" />
                <span className="sr-only">Open</span>
              </span>
            </a>
          ) : (
            <Link
              href={overlayHref}
              aria-label={`${title} - open link`}
              title="Open"
              className="absolute inset-0 flex items-center justify-center rounded-xl
                         bg-black/50 opacity-0 transition-opacity duration-200
                         group-hover:opacity-100 group-focus-within:opacity-100"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-white/80">
                <CodeBracketIcon className="h-8 w-8 text-white" />
                <span className="sr-only">Open</span>
              </span>
            </Link>
          )
        )}
      </div>

      {/* Title + description */}
      <div className="mt-4 min-w-0">
        <h3 className="truncate text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{description}</p>
      </div>

      {/* Tech stack chips (wrap + truncate safely) */}
      <div className="mt-3 min-w-0">
        <div className="flex flex-wrap gap-2 min-w-0">
          {techStack.map((t) => (
            <span
              key={t}
              title={t}
              className="shrink-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap
                         rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] leading-5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom actions */}
      {/* <div className="mt-4 flex flex-wrap gap-2">
        {gitUrl && (
          <ActionLink href={gitUrl} label={`${title} - source code`}>
            <CodeBracketIcon className="h-4 w-4" />
            <span>Code</span>
          </ActionLink>
        )}
        {previewUrl && previewUrl !== "/" && (
          <ActionLink href={previewUrl} label={`${title} - preview`}>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            <span>Preview</span>
          </ActionLink>
        )}
      </div> */}
    </div>
  );
}
