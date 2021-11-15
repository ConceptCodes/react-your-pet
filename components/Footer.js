
const items = [
  {
    title: "product",
    items: ["download", "location", "services", "address", "map", "pricing"],
  },
  {
    title: "community",
    items: ["accesibility", "frontline", "gift", "quest", "about us", "contact", "center"],
  },
  {
    title: "about",
    items: ["investors", "careers", "founders", "work", "newsroom"],
  },
];

function Footer() {
  return (
    <footer className="flex justify-between mt-20 text-gray-500">
      <div className="flex flex-col">
        <div className="font-bold text-2xl pb-5 text-black">
          Yourpet<span className="text-blue-600">.</span>
        </div>
        <address>
          1234 Anywhere st
          <br />
          NA, USA 00000
        </address>
        <p>info@yourpet.com</p>
        <p>555 555-5555</p>
      </div>
      {
        items.map((x, index) => (
          <div key={index} className="flex flex-col">
            <h1 className="font-bold pb-2 text-xl uppercase text-black">{x.title}</h1>
            <ul>
              {
                x.items.map((x, index) => <li className="text-lg capitalize" key={index}>{x}</li>)
              }
            </ul>
          </div>
        ))
      }
      
    </footer>
  );
}

export default Footer;
