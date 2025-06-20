import Link from "next/link";
import { Button } from "@/components/ui/button";
import classes from "./page.module.css";
import { PiHeadCircuitThin } from "react-icons/pi";

export default function Home() {
	return (
		<div
			className={`container flex flex-column gap-3 items-center ${classes["home-card"]}`}
		>
			<div className="md:w-7/12 text-center md:text-start">
				<h1 className="mb-3">
					AI,<span className="block">Robotics,</span>Psychology
				</h1>

				<p className="mb-3">
					Pioneering autonomous systems and human-robot interaction through
					cutting-edge AI research.
				</p>

				<div className="flex gap-3 justify-center md:justify-start">
					<Button size="lg" asChild>
						<Link href="/project">Explore Project</Link>
					</Button>
					<Button variant="outline" size="lg" asChild>
						<Link href="/contact">Contact Me</Link>
					</Button>
				</div>
			</div>

			<div className="w-0/12 md:w-5/12">
				<PiHeadCircuitThin className={classes["home-img"]} />
			</div>
		</div>
	);
}
