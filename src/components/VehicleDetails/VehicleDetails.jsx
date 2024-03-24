export const VehicleDetails = ({ advert, arr }) => {
  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-m font-medium mb-[14px]"
          >
            <p className="capitalize">{item}</p>
            <p className="capitalize">{advert[item]}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
