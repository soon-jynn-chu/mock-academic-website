import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PageTitle from "@/components/custom/PageTitle";
import ListLeadership from "./_ListLeadership";
import ListAcademicService from "./_ListAcademicService";
import ListInvitedTalk from "./_ListInvitedTalk";
import ListMembership from "./_ListMembership";
import ListCommunityEngagement from "./_ListCommunityEngagement";

import leadershipData from "@/app/data/leaderships.json";
import academicServiceData from "@/app/data/academicServices.json";
import membershipData from "@/app/data/memberships.json";
import communityEngagementData from "@/app/data/communityEngagements.json";
import invitedTalkData from "@/app/data/invitedTalks.json";

const mapping = [
	{
		title: "Leaderships",
		value: "leadership",
	},
	{
		title: "Academic Services",
		value: "academicService",
	},
	{
		title: "Invited Talks",
		value: "invitedTalk",
	},
	{
		title: "Memberships",
		value: "membership",
	},
	{
		title: "Community Engagement",
		value: "communityEngagement",
	},
];

export default function ListActivity() {
	return (
		<div className="w-full">
			<PageTitle title="Activity" />
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
				<TabsContent value="leadership">
					<ListLeadership data={leadershipData} />
				</TabsContent>
				<TabsContent value="academicService">
					<ListAcademicService data={academicServiceData} />
				</TabsContent>
				<TabsContent value="invitedTalk">
					<ListInvitedTalk data={invitedTalkData} />
				</TabsContent>
				<TabsContent value="membership">
					<ListMembership data={membershipData} />
				</TabsContent>
				<TabsContent value="communityEngagement">
					<ListCommunityEngagement data={communityEngagementData} />
				</TabsContent>
			</Tabs>
		</div>
	);
}
