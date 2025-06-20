type PageTitleProps = {
	title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
	return <h2 className="font-bold text-center mx-auto mb-5">- {title.toUpperCase()} -</h2>;
}
