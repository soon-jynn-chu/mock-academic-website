import { FaFile } from "react-icons/fa6";
import username from "../data/username.json";
import { Author, Publication, ListPublicationProps } from "./_types";

function GenerateAuthors(authors: Author[]) {
	const formatted = authors.map((author) => {
		if (author.family?.toLowerCase() === "others") return "others";
		const initials = author.given
			.split(" ")
			.map((n) => n[0].toUpperCase() + ".")
			.join(" ");
		return `${initials} ${author.family}`;
	});

	const finalText = formatted.map((name, index) => {
		const isLast = index === formatted.length - 1;
		const multiple = formatted.length > 2;
		const twoAuthors = formatted.length === 2;

		let text = "";
		if (isLast && index !== 0) text += "and ";
		text += name;
		if (!isLast) {
			text += multiple ? ", " : twoAuthors ? " " : "";
		}

		return name === username.abbrv ? (
			<strong key={name}>{text}</strong>
		) : (
			<span key={name}>{text}</span>
		);
	});

	return <span>{finalText}</span>;
}

function GeneratePublisher(item: Publication) {
	const publisher = item.publisher;
	const containerTitle = item["container-title"];

	if (!publisher && !containerTitle) return null;

	const selected = containerTitle || publisher;

	return (
		<>
			{item.type === "paper-conference" && "in "}
			<span style={{ fontStyle: "italic" }}>{selected}</span>
		</>
	);
}

function GenerateFullCitation({ item }: { item: Publication }) {
	return (
		<p className="mb-3">
			<span className="inline-block" style={{ verticalAlign: "baseline" }}>
				<FaFile size={13} />
			</span>{" "}
			{GenerateAuthors(item.author)}, {`"${item.title},"`}{" "}
			{item.type == "thesis" &&
				(item.genre == "phdthesis" ? "Ph.D. Dissertation" : "M.S. Thesis") +
					", "}
			{GeneratePublisher(item)}, {item.volume && "vol. " + item.volume + ", "}
			{item.issue && "no. " + item.issue + ", "}
			{item.page && "pp. " + item.page + ", "}
			{item.issued["date-parts"][0][0] + ". "}
			{item.URL && (
				<>
					[Online]. Available:{" "}
					<a
						className="url"
						href={item.URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.URL}
					</a>
				</>
			)}
		</p>
	);
}

export default function ListPublication(props: ListPublicationProps) {
	const targets = props.data.filter((item) => item.type == props.type);
	const years = [
		...new Set(
			targets.map((item) => parseInt(item.issued["date-parts"][0][0]))
		),
	]
		.sort()
		.reverse();

	return (
		<div>
			{years.map((year, index) => (
				<div
					key={year}
					className="grid grid-cols-6"
					style={{
						backgroundColor:
							index % 2 !== 0 ? "var(--color-background-secondary)" : undefined,
					}}
				>
					<div className="text-center col-span-6 lg:col-span-1">
						<h5>{year}</h5>
					</div>
					<div className="text-center lg:text-start col-span-6 lg:col-span-5">
						{targets
							.filter(
								(item) => parseInt(item.issued["date-parts"][0][0]) === year
							)
							.map((item) => (
								<GenerateFullCitation key={item.title} item={item} />
							))}
					</div>
				</div>
			))}
		</div>
	);
}
