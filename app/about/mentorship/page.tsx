import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PageTitle from "@/components/custom/PageTitle";
import ListTeaching from "./_ListTeaching";
import ListAdvising from "./_ListAdvising";

import teachingData from "@/app/data/teachings.json";
import adviseeData from "@/app/data/advisees.json";

export default function Mentorship() {
	return (
		<div className="w-full">
			<PageTitle title="Mentorship" />
			<Tabs defaultValue="teaching" className="w-full">
				<TabsList className="w-full h-full p-0 rounded-none tabslist flex flex-wrap justify-start items-center">
					<TabsTrigger
						value="teaching"
						className="rounded-none rounded-t flex-auto tabstrigger"
					>
						Teaching
					</TabsTrigger>
					<TabsTrigger
						value="advising"
						className="rounded-none rounded-t flex-auto tabstrigger"
					>
						Advising
					</TabsTrigger>
				</TabsList>
				<TabsContent value="teaching">
					<ListTeaching data={teachingData} />
				</TabsContent>
				<TabsContent value="advising">
					<ListAdvising data={adviseeData} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
