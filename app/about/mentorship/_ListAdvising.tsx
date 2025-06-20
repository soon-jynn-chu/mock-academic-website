import path from "path";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import nextConfig from "@/next.config";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import classes from "./page.module.css";
import { Advisee } from "./_types";

const basePath = nextConfig.basePath as string;
const defaultProfileImagePath = "images/default-profile.svg";

function GenerateAdviseeCard({ item }: { item: Advisee }) {
	return (
		<Card className="h-full card">
			<CardHeader>
				<Image
					width={500}
					height={500}
					className={classes["advisee-image"]}
					src={
						item.image
							? path.join(basePath, item.image)
							: defaultProfileImagePath
					}
					alt={item.name + " card"}
				/>
			</CardHeader>
			<CardContent>
				<p>{item.name}</p>
				<p>
					<em>{item.advisingRole}</em>
				</p>
			</CardContent>
		</Card>
	);
}

function GenerateAdviseeDialog({ item }: { item: Advisee }) {
	return (
		<div className="grid grid-cols-3 gap-3 mt-3">
			<div className="col-span-3 lg:col-span-1 text-center">
				<Image
					width={500}
					height={500}
					className={`${classes["advisee-image"]} w-1/3 lg:w-full mb-3 mx-auto`}
					src={path.join(basePath, item.image)}
					alt={item.name + " image"}
				/>
				<div className="grid grid-cols-2">
					{item.website && (
						<a href={item.website} className="url">
							<span
								className="inline-block"
								style={{ verticalAlign: "middle" }}
							>
								<FaGlobe />
							</span>{" "}
							Website
						</a>
					)}
					{item.email && (
						<a href={item.email} className="url">
							<span
								className="inline-block"
								style={{ verticalAlign: "middle" }}
							>
								<MdEmail />
							</span>{" "}
							Email
						</a>
					)}
				</div>
			</div>

			<div className="col-span-3 lg:col-span-2">
				<div className="mb-3 text-center lg:text-start">
					<p>
						<strong>
							{item.major}, <em>{item.institution}</em>
						</strong>
					</p>
					<p>{item.classFull}</p>
					<p>
						{item.startYear} - {item.endYear ? item.endYear : `present`}
					</p>
				</div>
				<div className="text-center mb-3">
					{item.description && (
						<p>
							<em>{'"' + item.description + '"'}</em>
						</p>
					)}
				</div>

				{item.thesisTitle && (
					<p className="mt-3">
						<strong>Thesis: </strong>
						{item.thesisTitle}
					</p>
				)}
				{item.graduated && (
					<p className="mt-3">
						<strong>Current role: </strong>
						{item.currentRole}
					</p>
				)}
				{item.awards && (
					<>
						<p className="mt-3">
							<strong>Awards:</strong>
						</p>
						<ul className={"list-disc list-inside"}>
							{item.awards.map((x) => (
								<li key={x}>{x}</li>
							))}
						</ul>
					</>
				)}
				{item.projectInvolved && (
					<>
						<p className="mt-3">
							<strong>Project Involved:</strong>
						</p>
						<ul className={"list-disc list-inside"}>
							{item.projectInvolved.map((x) => (
								<li key={x}>{x}</li>
							))}
						</ul>
					</>
				)}
				{item.keywords && (
					<p className="mt-3" style={{ fontWeight: "lighter" }}>
						<em style={{ textDecoration: "underline" }}>Keywords</em>:{" "}
						{item.keywords.join(", ")}
					</p>
				)}
			</div>
		</div>
	);
}

function GenerateAdvisingItem({ item }: { item: Advisee }) {
	return (
		<Dialog>
			<DialogTrigger>
				<GenerateAdviseeCard item={item} />
			</DialogTrigger>
			<DialogContent className="dialogcontent">
				<DialogHeader>
					<DialogTitle>{item.name}</DialogTitle>
				</DialogHeader>
				<GenerateAdviseeDialog item={item} />
			</DialogContent>
		</Dialog>
	);
}

export default function ListAdvising({ data }: { data: Advisee[] }) {
	const targets = ["current", "past"];

	return (
		<Accordion
			type="single"
			collapsible
			className="w-full mt-3"
			defaultValue="current"
		>
			{targets.map((item) => (
				<AccordionItem key={item} value={item} className="accordionitem">
					<AccordionTrigger className="px-3">
						{item.charAt(0).toUpperCase() + item.slice(1) + " Student(s)"}
					</AccordionTrigger>
					<AccordionContent className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-3 accordioncontent">
						{data
							.filter((x) => x.graduated === (item !== "current"))
							.map((subItem) => (
								<GenerateAdvisingItem key={subItem.name} item={subItem} />
							))}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
