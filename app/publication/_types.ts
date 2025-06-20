export type Author = {
	family: string;
	given: string;
};

export type Publication = {
	id?: string;
	author: Author[];
	"citation-key"?: string;
	"event-place"?: string;
	genre?: string;
	issued: {
		"date-parts": string[][];
	};
	publisher?: string;
	"publisher-place"?: string;
    URL?: string;
	title?: string;
	type?: string;
	volume?: string;
	issue?: string;
	page?: string;
	"container-title"?: string;
};

export type ListPublicationProps = {
	data: Publication[];
	type: string;
};
