import path from "path";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import nextConfig from "@/next.config";
import PageTitle from "@/components/custom/PageTitle";
import data from "@/app/data/projects.json";
import classes from "./page.module.css";

const basePath = nextConfig.basePath as string;

export default function Project() {
	return (
		<div>
			<PageTitle title="Highlighted Projects" />
			<Carousel className="w-8/10 lg:w-3/4 carousel p-5 mx-auto">
				<CarouselContent>
					{data.map((item) => (
						<CarouselItem key={item.title}>
							<div className="text-center">
								<Image
									width={500}
									height={500}
									className={`${classes["image"]} mb-3 mx-auto`}
									src={path.join(basePath, item.image)}
									alt={item.title}
								/>
								<h3 className="mb-3">{item.title}</h3>
								<p>{item.content}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
