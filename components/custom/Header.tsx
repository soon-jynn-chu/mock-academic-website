"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
	SheetTitle,
	SheetHeader,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import username from "@/app/data/username.json";
import classes from "./Header.module.css";

type SubLink = {
	title: string;
	href: string;
};

type NavLink = {
	title: string;
	href: string;
	sublinks?: SubLink[];
};

const links: NavLink[] = [
	{
		title: "About",
		href: "/about",
		sublinks: [
			{ title: "Achievement", href: "/about/achievement" },
			{ title: "Mentorship", href: "/about/mentorship" },
			{ title: "Activity", href: "/about/activity" },
			{ title: "CV", href: "/about/cv" },
		],
	},
	{
		title: "Project",
		href: "/project",
	},
	{
		title: "Publication",
		href: "/publication",
	},
	{
		title: "Contact",
		href: "/contact",
	},
];

function NavigationSheetItem({ item }: { item: NavLink }) {
	if (!item.sublinks) {
		return (
			<li className={classes.sheetitem}>
				<SheetClose asChild>
					<Link href={item.href}>{item.title}</Link>
				</SheetClose>
			</li>
		);
	}

	return (
		<div>
			<li>
				<div className={classes.sheetitem}>
					<SheetClose asChild>
						<Link href={item.href}>{item.title}</Link>
					</SheetClose>
				</div>
				<ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
					{item.sublinks.map((subItem) => (
						<li key={subItem.href} className={classes.sheetitem}>
							<SheetClose asChild>
								<Link href={subItem.href}>{subItem.title}</Link>
							</SheetClose>
						</li>
					))}
				</ul>
			</li>
		</div>
	);
}

function NavigationSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className={classes.sheettrigger}>
				<SheetHeader>
					<SheetTitle>
						<Link href="/">{username.full}</Link>
					</SheetTitle>
				</SheetHeader>
				<ul className="my-2 space-y-3 ml-1 pl-4">
					{links.map((item) => (
						<NavigationSheetItem key={item.title} item={item} />
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
}

function NavigationItem({ item }: { item: NavLink }) {
	if (!item.sublinks) {
		return (
			<NavigationMenuItem key={item.title + "_sheet"}>
				<NavigationMenuLink asChild className={classes["nav-btn"]}>
					<Link href={item.href}>{item.title}</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
		);
	}

	return (
		<NavigationMenuItem key={item.title + "_sheet"}>
			<NavigationMenuTrigger className={classes["nav-btn"]}>
				<NavigationMenuLink asChild className={classes["nav-btn"]}>
					<Link href={item.href}>{item.title}</Link>
				</NavigationMenuLink>
			</NavigationMenuTrigger>
			<NavigationMenuContent
				className={classes["nav-dropdown"] + " focus:!ring-transparent"}
			>
				<ul>
					{item.sublinks.map((sublink) => (
						<li key={sublink.title}>
							<NavigationMenuLink
								asChild
								className={classes["nav-dropdown-item"]}
							>
								<Link href={sublink.href}>{sublink.title}</Link>
							</NavigationMenuLink>
						</li>
					))}
				</ul>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
}

export default function Header() {
	return (
		<header className="flex flex-column justify-between items-center">
			<h2>
				<Link className={classes["nav-brand"]} href="/">
					{username.full}
				</Link>
			</h2>
			<div className="hidden md:block">
				<NavigationMenu>
					<NavigationMenuList>
						{links.map((item) => (
							<NavigationItem key={item.title} item={item} />
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="md:hidden">
				<NavigationSheet />
			</div>
		</header>
	);
}
