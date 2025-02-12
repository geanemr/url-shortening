import React from "react";

const FooterNavbar: React.FC = () => {

  const sections = "flex flex-col items-center";
  const options = "hover:text-white cursor-pointer text-neutral-grayishViolet ";

  return (
    <nav className="flex flex-col md:flex-row gap-8 text-white justify-center">
      <section className={sections}>
        <strong className="mb-4">Features</strong>
        <span className={options}>Link Shortening</span>
        <span className={options}>Branded Links</span>
        <span className={options}>Analytics</span>
      </section>
      <section className={sections}>
        <strong className="mb-4">Resources</strong>
        <span className={options}>Blog</span>
        <span className={options}>Developers</span>
        <span className={options}>Support</span>
      </section>
      <section className={sections}>
        <strong className="mb-4">Company</strong>
        <span className={options}>About</span>
        <span className={options}>Our Team</span>
        <span className={options}>Careers</span>
        <span className={options}>Contact</span>
      </section>
    </nav>
  );
};

export default FooterNavbar;