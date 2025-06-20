import { ListAchievementProps } from "./_types";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export default function ListAchievement({ data, icon }: ListAchievementProps) {
	const years = [...new Set(data.map((item) => item.year))].sort().reverse();

	return (
		<div>
			{years.map((year, index) => (
				<div
					key={year}
					className="grid grid-cols-6"
					style={{
						backgroundColor:
							index % 2 !== 0 ? "var(--color-background-secondary)" : undefined,
					}}
				>
					<div className="text-center col-span-6 lg:col-span-1">
						<h4>{year}</h4>
					</div>
					<div className="text-center lg:text-start col-span-6 lg:col-span-5">
						{data
							.filter((item) => item.year === year)
							.map((item) => (
								<div key={item.title} className="mb-3">
									<p className="p-lead items-center">
										<span
											className="inline-block"
											style={{ verticalAlign: "middle" }}
										>
											{icon}
										</span>{" "}
										{item.title}
									</p>
									<p>
										<span style={{ fontStyle: "italic" }}>
											{item.institute}
										</span>
										{item.rank && " | Rank: " + item.rank}
										{item.month && " | " + months[item.month - 1]}
									</p>
								</div>
							))}
					</div>
				</div>
			))}
		</div>
	);
}
