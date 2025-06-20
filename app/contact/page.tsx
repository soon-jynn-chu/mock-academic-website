import PageTitle from "@/components/custom/PageTitle";
import SocialIcon from "@/components/custom/SocialIcon";
import classes from "./page.module.css";

export default function Contact() {
	return (
		<div>
			<PageTitle title="Contact Me" />
			<div className="grid grid-cols-2 text-center gap-3 h-fit">
				<div className="col-span-2 lg:col-span-1 self-center">
					<h3 className="mb-3">You can find me here:</h3>

					<div className="mb-3">
						<SocialIcon />
					</div>

					<div className="lg:px-5 mb-2 lg:mb-0">
						<p>
							{`I'm always excited to meet curious, open-minded individuals who
							are passionate about what they do.`}
						</p>
						<p>
							{`Whether you have questions about my work, or just want to share
							your own journey and ideas, I'd love to hear from you. Use the
							form to drop me a message, and I'll get back to you as soon as I
							can. Let's start a conversation!`}
						</p>
					</div>
				</div>
				<iframe
					className={`col-span-2 lg:col-span-1 ${classes["google-form"]}`}
					src="data:text/html, .... URLencoded HTML data ...."
				>
					Loading…
				</iframe>
			</div>
		</div>
	);
}
