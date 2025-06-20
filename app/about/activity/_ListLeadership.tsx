import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ListLeadershipProps } from "./_types";

export default function ListLeadership({ data }: ListLeadershipProps) {
	const sortedData = data.sort((a, b) => {
		if (a.lastActiveYear !== b.lastActiveYear) {
			return b.lastActiveYear - a.lastActiveYear;
		} else {
			return b.lastActiveMonth - a.lastActiveMonth;
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
					key={item.organization}
					value={index.toString()}
					className="accordionitem"
				>
					<AccordionTrigger className="px-3">
						{item.organization}
					</AccordionTrigger>

					<AccordionContent className="flex flex-col gap-4 p-3 accordioncontent">
						<p>
							<strong>{item.role}</strong>,{" "}
							<em>
								{item.yearsActive[0]} - {item.yearsActive[1]}
							</em>
						</p>
						<p>{item.description}</p>
						<p>
							<strong>Highlights: </strong>
						</p>
						<ul className={"list-disc list-inside"}>
							{item.highlights.map((entry, index) => (
								<li key={index}>{entry}</li>
							))}
						</ul>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
