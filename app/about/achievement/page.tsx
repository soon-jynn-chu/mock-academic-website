import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaTrophy, FaAward, FaCertificate, FaBookOpen } from "react-icons/fa6";

import PageTitle from "@/components/custom/PageTitle";
import ListAchievement from "./_ListAchievement";
import { AchievementTabMappingItem } from "./_types";
import awardData from "@/app/data/awards.json";
import certificationData from "@/app/data/certifications.json";
import competitionData from "@/app/data/competitions.json";
import certificateData from "@/app/data/certificates.json";

const mapping:AchievementTabMappingItem[] = [
	{
		title: "Awards & Recognition",
		data: awardData,
		value: "award",
		icon: <FaAward />,
	},
	{
		title: "Professional Certificate",
		data: certificationData,
		value: "certification",
		icon: <FaCertificate />,
	},
	{
		title: "Competitions",
		data: competitionData,
		value: "competition",
		icon: <FaTrophy />,
	},
	{
		title: "Course Certificates",
		data: certificateData,
		value: "certificate",
		icon: <FaBookOpen />,
	},
];

export default function Achievement() {
	return (
		<div className="w-full">
			<PageTitle title="Achievement" />
			<Tabs defaultValue={mapping[0].value} className="w-full">
				<TabsList className="w-full h-full p-0 rounded-none tabslist flex flex-wrap justify-start items-center">
					{mapping.map((item) => (
						<TabsTrigger
							key={item.value}
							value={item.value}
							className="rounded-none rounded-t flex-auto tabstrigger"
						>
							<p>{item.title}</p>
						</TabsTrigger>
					))}
				</TabsList>
				{mapping.map((item) => (
					<TabsContent key={item.title} value={item.value}>
						<ListAchievement data={item.data} icon={item.icon} />
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
