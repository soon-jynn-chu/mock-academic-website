import path from "path";
import classes from "./page.module.css";
import nextConfig from "@/next.config";

const basePath = nextConfig.basePath as string;

export default function CV() {
	return (
		<embed
			className={classes["cv-pdf"]}
			src={path.join(basePath, "/assets/cv.pdf#navpanes=0&view=FitH")}
			type="application/pdf"
		/>
	);
}
