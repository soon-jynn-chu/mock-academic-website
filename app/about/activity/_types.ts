export type ListAcademicServiceProps = {
	data: {
		organization: string;
		role: string;
		location: string;
		year: number;
		month: number;
	}[];
};

export type ListCommunityEngagementProps = {
	data: {
		title: string;
		organization: string;
		location: string;
		years: number[];
		description: string;
		url: string;
		lastengagedyear: number;
		lastengagedmonth: number;
	}[];
};

export type ListInvitedTalkProps = {
	data: {
		description: string;
		institution: string;
		location: string;
		year: number;
		month: number;
	}[];
};

export type ListLeadershipProps = {
	data: {
		organization: string;
		role: string;
		description: string;
		yearsActive: string[];
		highlights: string[];
		lastActiveYear: number;
		lastActiveMonth: number;
	}[];
};

export type ListMembershipProps = {
	data: {
		title: string;
		organization: string;
		yearsActive: string[];
		lastActiveYear: number;
		lastActiveMonth: number;
	}[];
};
