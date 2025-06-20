export type Advisee = {
	name: string;
	class: string;
	classFull: string;
	major: string;
	institution: string;
	description: string;
	keywords: string[];
	projectInvolved: string[];
	thesisTitle: string;
	advisingRole: string;
	graduated: boolean;
	startYear: string;
	endYear: string;
	currentRole: string;
	email: string;
	website: string;
	image: string;
	awards: string[];
};

export type Teaching = {
	courseNumber: string;
	level: string;
	title: string;
	institute: string;
	instructors: string[];
	teachingAssistants: string[];
	semesters: string[];
	lastOfferedYear: number;
	lastOfferedMonth: number;
	description: string;
	lectureNotesUrl: string;
};
