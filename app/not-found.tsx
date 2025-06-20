import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Custom404() {
	return (
		<div className="text-center my-auto">
			<h1 className="mb-3">404</h1>
			<p className="mb-3">Page not found</p>
			<Button asChild>
				<Link href="/">Return to Home Page</Link>
			</Button>
		</div>
	);
}
