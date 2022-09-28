function Footer() {
  return (
    <div className="fixed flex bottom-3 w-full items-end border-t-2 px-24 pt-2 text-xs">
      <div className="flex w-2/4 space-x-4">
        <p>2022 Airbnb, Inc. CLONE</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Sitemap</p>
        <p>Destinations</p>
      </div>

      <div className="flex justify-end w-2/4 space-x-4 font-semibold">
        <p>English</p>
        <p>$ USD</p>
        <p>Support & resources</p>
      </div>
    </div>
  );
}

export default Footer;
