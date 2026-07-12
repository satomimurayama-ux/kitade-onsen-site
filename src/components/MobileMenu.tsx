"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/site";

/**
 * スマートフォン用メニュー。
 * ハンバーガーボタンを押すと全画面のメニューが開きます。
 * リンクを押すと自動で閉じます。
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-steam"
      >
        <span
          className={`block h-0.5 w-5 bg-indigo-deep transition-transform ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-indigo-deep transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-indigo-deep transition-transform ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="スマートフォン用メニュー"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-steam bg-white shadow-lg"
        >
          <ul className="divide-y divide-steam px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-indigo-deep"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1 text-sm text-indigo-soft"
                        >
                          − {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
