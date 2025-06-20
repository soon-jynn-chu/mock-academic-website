import {
	FaLinkedin,
	FaGithub,
	FaGoogleScholar,
	FaOrcid,
} from "react-icons/fa6";
import data from "@/app/data/socialMediaURL.json";
import classes from "./SocialIcon.module.css";

const iconSize = 50;

const iconMap = {
	linkedin: <FaLinkedin size={iconSize} />,
	github: <FaGithub size={iconSize} />,
	googlescholar: <FaGoogleScholar size={iconSize} />,
	orcid: <FaOrcid size={iconSize} />,
};

export default function SocialIcon() {
	return (
		<div className="flex justify-center gap-3">
			{data.map((item) => (
				<a
					className={classes["social-icon"]}
					key={item.media}
					style={{ color: item.color }}
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{iconMap[item.media as keyof typeof iconMap]}
				</a>
			))}
		</div>
	);
}
