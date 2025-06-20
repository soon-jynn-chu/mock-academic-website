import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ListCommunityEngagementProps } from "./_types";

export default function ListCommunityEngagement({
	data,
}: ListCommunityEngagementProps) {
	const sortedData = data.sort((a, b) => {
		if (a.lastengagedyear !== b.lastengagedyear) {
			return b.lastengagedyear - a.lastengagedyear;
		} else {
			return b.lastengagedmonth - a.lastengagedmonth;
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
					<AccordionContent className="flex flex-col gap-4 p-3 accordioncontent">
						<p>{item.description}</p>
						<div>
							<p>
								<strong>Organization: </strong>
								{item.organization}
							</p>
							<p>
								<strong>Location: </strong>
								{item.location}
							</p>
							<p>
								<strong>Year(s) active: </strong>
								{item.years.join(", ")}
							</p>
							<p>
								<strong>Website: </strong>
								<a className="url" href={item.url}>
									{item.url}
								</a>
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
