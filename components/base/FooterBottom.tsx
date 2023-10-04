import { Facebook, Instagram, Twitter } from "lucide-react";

function FooterBottom() {
  return (
    <div className="flex justify-center lg:justify-between gap-4 flex-wrap items-center mt-5 mb-4">
      <p className="font-light text-sm">
        © 2023 Airbnb, Inc.·Privacy - Terms - Sitemap - Company details
      </p>
      <div className="flex items-center space-x-2">
        <Twitter size={22} />
        <Facebook size={22} />
        <Instagram size={22} />
      </div>
    </div>
  );
}

export default FooterBottom;
