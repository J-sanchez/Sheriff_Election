import Item from "./Item";
import { CITY, COUNTY, BAM, VOTE } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3 gap-10 sm:px-10 px-8 py-18">
      <Item Links={COUNTY} title="RIO ARRIBA COUNTY" />
      <Item Links={BAM} title="BILLY A. MERRIFIELD" />
      <Item Links={VOTE} title="DATES TO VOTE" />
    </div>
  );
};

export default ItemsContainer;