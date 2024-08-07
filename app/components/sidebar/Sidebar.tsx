"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarContactLinks, sidebarRouteLinks } from "@/lib/LinkData";
import { ModeToggle } from "../modeToggle/ModeToggle";
import Image from "next/image";
import { LogOut, X } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SideBar({ session }: any) {
  const pathname = usePathname();

  const filteredSidebarRouteLinks = sidebarRouteLinks.filter((item) => {
    if (item.key === "my-profile") {
      return session?.user?.email;
    }
    return true;
  });

  return (
    <>
      <section className="-z-30 absolute md:z-30 xl:fixed w-[249px]">
        <div className="md:border-r border-slate min-h-screen pt-10 flex flex-col justify-between md:fixed">
          <div>
            <div className="justify-between px-3 pr-4 pb-6 hidden md:flex">
              <div className="flex gap-x-2">
                <Image
                  src="/rasheed-img.jpeg"
                  alt="profile image"
                  width={100}
                  height={100}
                  priority
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold">Rasheed Olatunde</p>
                  <Link href="/about" className="text-sm text-primary">
                    View Profile
                  </Link>
                </div>
              </div>
              <ModeToggle />
            </div>

            <div className="hidden md:relative md:flex flex-col items-start w-full border-t md:border-slate pb-1">
              <div className="fixe left-0 w-60">
                {/* ============ LINKS AND ICONS =========== */}
                {filteredSidebarRouteLinks?.map((item, index) => (
                  <div
                    key={index}
                    className="mt-2 flex flex-col items-start text-sm w-full"
                  >
                    <div className="flex w-full">
                      <Link
                        href={`${item.href}`}
                        className={`${
                          pathname === item.href
                            ? "rounded-sm bg-accent dark:bg-accent w-full flex"
                            : "flex items-center"
                        }
                  flex items-center w-full hover:bg-accent dark:hover:bg-accent rounded-lg px-4 mx-3 py-2`}
                      >
                        <span>
                          <item.icon
                            size={16}
                            className="h-4 w-4 group-hover:cursor-pointer mr-4 mb-1 text-primary"
                          />
                        </span>
                        <p
                          className={`${pathname === item.href ? "" : ""}
                     text-sm hover:cursor-pointer text-foreground
                  `}
                        >
                          {item.name}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex flex-col items-start border-t border-slate  w-full md:h-32 lg:h-  mt-60 md:mt-6">
              <div className="fixed left-0 w-60">
                {/* ============ LINKS AND ICONS =========== */}
                {sidebarContactLinks?.map((item, index) => (
                  <div
                    key={index}
                    className="mt-2 flex flex-col items-start text-sm w-full"
                  >
                    <div className="flex  w-full">
                      <Link
                        href={`${item.href}`}
                        className={`${
                          pathname === item.href
                            ? "rounded-sm  bg-accent dark:bg-accent w-full"
                            : ""
                        }
                  flex items-center gap-4 hover:cursor-pointer w-full hover:bg-accent dark:hover:bg-accent rounded-lg px-4 mx-3 py-2`}
                      >
                        <span>
                          <item.icon
                            size={16}
                            className="h-4 w-4 group-hover:cursor-pointer mb-1 text-primary"
                          />
                        </span>
                        <p
                          className={`${pathname === item.href ? "" : ""}
                     text-sm hover:cursor-pointer text-foreground
                  `}
                        >
                          {item.name}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============Login and SignOut Button ========== */}
          <section className="border-t border-slate pt-6 px-4 mt-28 hidden md:block pb-6">
            {session?.user?.email ? (
              <div
                className="bg-accent dark:bg-accent rounded-lg text-foreground flex items-center justify-center gap-4 p-2  cursor-pointer"
                onClick={async () => {
                  await signOut();
                  redirect("/");
                }}
              >
                <LogOut size={16} />
                <p>Sign out</p>
              </div>
            ) : (
              <div className="bg-primary rounded-lg text-foreground flex items-center justify-center gap-4 p-2  cursor-pointer">
                <AlertDialog>
                  <AlertDialogTrigger className="flex items-center text-white text-sm">
                    <FaGoogle className="mr-2" size={16} /> Login with Google
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle className="flex justify-between">
                      Login
                      <AlertDialogCancel>
                        <X />
                      </AlertDialogCancel>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Please Login to access the full Platform
                    </AlertDialogDescription>

                    <AlertDialogAction
                      className="w-full mt-3 text-white"
                      onClick={() => signIn("google")}
                    >
                      <FaGoogle className="mr-4" size={16} />
                      Login with Google
                    </AlertDialogAction>
                    <AlertDialogDescription>
                      By creating an account, you agree to our Terms of Service
                      and Privacy Policy.
                    </AlertDialogDescription>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
