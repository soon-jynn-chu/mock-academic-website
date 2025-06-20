import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageTitle from "@/components/custom/PageTitle";
import ListPublication from "./_ListPublication";
import data from "../data/references.json";

interface Mapping {
	title: string;
	type: string;
	value: string;
}

const mapping: Mapping[] = [
	{ title: "Journals", type: "article-journal", value: "journal" },
	{ title: "Conferences", type: "paper-conference", value: "conference" },
	{ title: "Thesis/Dissertation", type: "thesis", value: "thesis" },
	{ title: "Others", type: "document", value: "other" },
];

export default function Publication() {
	return (
		<div className="w-full">
			<PageTitle title="Publication" />
			<Tabs defaultValue={mapping[0].value} className="w-full">
				<TabsList className="w-full h-full p-0 rounded-none tabslist flex flex-wrap justify-start items-center">
					{mapping.map((item) => (
						<TabsTrigger
							key={item.value}
							value={item.value}
							className="rounded-none rounded-t flex-auto tabstrigger"
						>
							{item.title}
						</TabsTrigger>
					))}
				</TabsList>
				{mapping.map((item) => (
					<TabsContent key={item.value + "Content"} value={item.value}>
						<ListPublication data={data} type={item.type} />
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
