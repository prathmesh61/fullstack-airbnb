import { linkArrayOne, linkArrayTwo, linkArrayThree } from "@/lib/FooterLinks";
import Link from "next/link";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="flex flex-col gap-2 mt-10 p-5">
      <div className="flex flex-wrap justify-around gap-5">
        <div className="flx flex-col items-start gap-4">
          <h2 className="text-lg font-bold text-left">Airbnb</h2>
          <div className="flex flex-col gap-2">
            {linkArrayOne.map((link: FooterLink) => (
              <Link
                href={link.link}
                className="text-sm hover:underline"
                key={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flx flex-col items-start gap-4">
          <h2 className="text-lg font-bold text-left">Hosting</h2>
          <div className="flex flex-col gap-2">
            {linkArrayTwo.map((link: FooterLink) => (
              <Link
                href={link.link}
                className="text-sm hover:underline"
                key={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flx flex-col items-start gap-4">
          <h2 className="text-lg font-bold text-left">Support</h2>
          <div className="flex flex-col gap-2">
            {linkArrayThree.map((link: FooterLink) => (
              <Link
                href={link.link}
                className="text-sm hover:underline"
                key={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default Footer;
