import Image from "next/image";
import PageTitle from "@/components/custom/PageTitle";
import classes from "./page.module.css";

const profileImagePath = "/images/logo.png";
const aboutContent =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet laoreet ex, facilisis cursus ligula. Pellentesque dapibus interdum vehicula. Aenean viverra tortor et turpis tempor faucibus. Sed commodo leo diam, nec egestas odio porta ut. Sed viverra fringilla volutpat. Fusce efficitur nunc nec ultrices suscipit. Curabitur ullamcorper, magna consectetur condimentum feugiat, urna nunc sollicitudin ligula, at varius odio enim in elit. Aliquam placerat eu ligula vel rutrum. Etiam rutrum orci sed justo ultricies placerat. Nullam vitae risus scelerisque, luctus metus vel, aliquet urna. Nulla convallis ex orci, in placerat tortor ornare eu. Suspendisse potenti. Donec rutrum condimentum justo. Duis neque est, tempor efficitur accumsan vel, pharetra et ipsum. Ut ultricies mollis mauris quis condimentum. Fusce iaculis risus sed nunc posuere fringilla. Donec efficitur leo at tortor faucibus finibus. Donec eu sollicitudin massa. Quisque laoreet metus ac scelerisque placerat. Nulla id pellentesque ante. Aenean dignissim interdum nulla at feugiat. Sed in diam ultrices, fermentum risus eu, sodales risus. Maecenas non molestie ante. Ut consectetur vehicula ipsum nec consequat.Nam eu turpis nec magna luctus ullamcorper. Pellentesque neque libero, commodo et gravida quis, lobortis et dui. Vivamus placerat in arcu quis mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vehicula tincidunt augue a facilisis. Sed consectetur mi magna, at sagittis nisi consectetur lobortis. Pellentesque gravida odio vitae ante tempor, vel molestie urna convallis. Fusce non lorem nec augue sodales porta vitae ac arcu. Vestibulum volutpat neque eu nulla pretium ornare. Etiam ut mi mollis, convallis est eu, facilisis purusVestibulum cursus facilisis dui et porttitor. Praesent gravida malesuada nisi. Integer lobortis accumsan tempor. Mauris condimentum leo non interdum rhoncus. Curabitur sollicitudin, nulla ac maximus facilisis, nibh purus convallis sem, vel commodo elit ante sed sem. Donec aliquam lorem nec ex malesuada, in porttitor risus consequat. Nunc venenatis eros dui, et posuere tellus congue non. Aenean vel ante dui. Pellentesque id risus eu leo commodo porttitor. Fusce auctor, lorem at molestie feugiat, mi enim eleifend turpis, quis vulputate dolor erat non mi. In vel lorem tincidunt, dapibus nulla eu, ullamcorper eros. Aliquam quis nibh neque. Nulla dignissim volutpat magna vitae facilisis. Integer risus augue, vulputate eget aliquam hendrerit, maximus non ipsum. Cras consectetur arcu a nibh rhoncus euismodDonec vel dictum leo, volutpat tempus mi. Duis imperdiet congue consequat. Cras quis ex id urna euismod tristique. Ut ac nisi suscipit, dapibus magna a, tincidunt orci. Cras scelerisque velit vel rutrum imperdiet. Praesent consequat eleifend nulla vel venenatis. Nam fermentum quam et justo tincidunt volutpat. In nec mattis erat. Fusce auctor nisi nec est condimentum, sit amet cursus ligula semper. Donec odio quam, elementum ac dictum sed, fermentum nec velit. Cras posuere, tortor a euismod feugiat, est augue consequat sapien, sit amet porta ex magna sit amet velit. Mauris vitae laoreet dolor, sit amet pellentesque erat. Aliquam erat volutpat.";

export default function About() {
	return (
		<div>
			<PageTitle title="About Me" />
			<div className={classes["about-inner-div"]}>
				<Image
					width={500}
					height={500}
					className={`sm:w-75 md:w-65 mx-auto mb-3 ${classes["about-img"]}`}
					src={profileImagePath}
					alt="profile image"
				/>
				<p className={classes["about-content"]}>{aboutContent}</p>
			</div>
		</div>
	);
}
