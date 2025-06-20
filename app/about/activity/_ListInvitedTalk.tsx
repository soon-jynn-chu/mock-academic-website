import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ListInvitedTalkProps } from "./_types";

export default function ListInvitedTalk({ data }: ListInvitedTalkProps) {
	const sortedData = data.sort((a, b) => {
		if (a.year !== b.year) {
			return b.year - a.year;
		} else {
			return b.month - a.month;
		}
	});

	return (
		<div className="table-outer-div mt-3">
			<Table>
				<TableHeader>
					<TableRow className="tablerowheader">
						<TableHead className="tablehead">Description</TableHead>
						<TableHead className="tablehead">Institution</TableHead>
						<TableHead className="tablehead">Location</TableHead>
						<TableHead className="tablehead">Year</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sortedData.map((item, index) => (
						<TableRow key={index} className="tablerowbody">
							<TableCell>
								<div className="text-wrap">{item.description}</div>
							</TableCell>
							<TableCell className="text-center">
								<div className="text-wrap">{item.institution}</div>
							</TableCell>
							<TableCell className="text-center">
								<div className="text-wrap">{item.location}</div>
							</TableCell>
							<TableCell className="text-center">
								<div className="text-wrap">{item.year}</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
