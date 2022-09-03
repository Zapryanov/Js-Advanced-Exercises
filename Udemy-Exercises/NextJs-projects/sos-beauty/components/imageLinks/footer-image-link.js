import Link from "next/link";
import Image from "next/image";

function FooterImageLink({link, image}) {
    return (
        <Link href={link}>
            <a target="_blank">
                <Image width={280} height={175} src={image} alt="google-map" />  
            </a>
        </Link>
    )
}

export default FooterImageLink;