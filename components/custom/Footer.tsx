import username from "@/app/data/username.json";

export default function Footer() {
	return (
		<footer>
			<p>© {username.full}</p>
		</footer>
	);
}
