import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ListMembershipProps } from "./_types";

export default function ListMembership({ data }: ListMembershipProps) {
	const sortedData = data.sort((a, b) => {
		if (a.lastActiveYear !== b.lastActiveYear) {
			return b.lastActiveYear - a.lastActiveYear;
		} else {
			return b.lastActiveMonth - a.lastActiveMonth;
		}
	});

	return (
		<div className="table-outer-div mt-3">
			<Table>
				<TableHeader>
					<TableRow className="tablerowheader">
						<TableHead className="tablehead">Organization</TableHead>
						<TableHead className="tablehead">Member Level</TableHead>
						<TableHead className="tablehead">Active Year(s)</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sortedData.map((item, index) => (
						<TableRow key={index} className="tablerowbody">
							<TableCell>
								<div className="text-wrap">{item.organization}</div>
							</TableCell>
							<TableCell className="text-center">
								<div className="text-wrap">{item.title}</div>
							</TableCell>
							<TableCell className="text-center">
								<div className="text-wrap">{item.yearsActive.join(", ")}</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
