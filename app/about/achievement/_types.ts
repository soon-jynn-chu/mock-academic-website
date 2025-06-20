export type Achievement = {
	title: string;
	institute: string;
	rank?: string;
	year: number;
	month?: number;
};

export type ListAchievementProps = {
	data: Achievement[];
	icon: React.ReactNode;
};

export type AchievementTabMappingItem = {
	title: string;
	data: Achievement[];
	value: string;
	icon: React.ReactNode;
};
