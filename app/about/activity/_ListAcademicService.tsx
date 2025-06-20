import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ListAcademicServiceProps } from "./_types";

export default function ListAcademicService({
	data,
}: ListAcademicServiceProps) {
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
						<TableHead className="tablehead">Organization</TableHead>
						<TableHead className="tablehead">Role</TableHead>
						<TableHead className="tablehead">Location</TableHead>
						<TableHead className="tablehead">Year</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sortedData.map((item, index) => (
						<TableRow key={index} className="tablerowbody">
							<TableCell>
								<div className="text-wrap">{item.organization}</div>
							</TableCell>
							<TableCell className="text-center">
								<div className="text-wrap">{item.role}</div>
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
