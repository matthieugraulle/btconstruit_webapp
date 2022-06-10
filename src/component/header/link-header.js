export const LinkHeaderComponent = ({ name, link }) => (
  <div>
    <a href={link} className="font-thin text-lg ml-4">
      {name}
    </a>
  </div>
);
