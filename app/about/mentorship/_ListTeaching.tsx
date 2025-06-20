import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Teaching } from "./_types";

function GenerateTeachingBody({ item }: { item: Teaching }) {
	return (
		<>
			<p>
				<strong>
					{item.courseNumber} ({item.level}),{" "}
					<span style={{ fontStyle: "italic" }}>{item.institute}</span>
				</strong>
			</p>
			<p>{item.description}</p>
			<div>
				<p>
					<strong>Instructor(s): </strong>
					{item.instructors.join(", ")}
				</p>
				{item.teachingAssistants && (
					<p className="mb-0">
						<strong>TA(s): </strong>
						{item.teachingAssistants.join(", ")}
					</p>
				)}
				<p>
					<strong>Semester(s): </strong>
					{item.semesters.join(", ")}
				</p>
				{item.lectureNotesUrl && (
					<p>
						<strong>Notes: </strong>
						<a
							className="url"
							href={item.lectureNotesUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.lectureNotesUrl}
						</a>
					</p>
				)}
			</div>
		</>
	);
}

export default function ListTeaching({ data }: { data: Teaching[] }) {
	const sortedData = data.sort((a, b) => {
		if (a.lastOfferedYear !== b.lastOfferedYear) {
			return b.lastOfferedYear - a.lastOfferedYear;
		} else {
			return b.lastOfferedMonth - a.lastOfferedMonth;
		}
	});

	return (
		<Accordion
			type="single"
			collapsible
			className="w-full mt-3"
			defaultValue="0"
		>
			{sortedData.map((item, index) => (
				<AccordionItem
					key={item.title}
					value={index.toString()}
					className="accordionitem"
				>
					<AccordionTrigger className="px-3">{item.title}</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 p-3 text-balance accordioncontent">
						<GenerateTeachingBody item={item} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
