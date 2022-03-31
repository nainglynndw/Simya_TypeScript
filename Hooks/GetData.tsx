import OrderedData from "../Data/DataArray";
const firstTenData = OrderedData.slice(0, 10);

interface Data {
  data: {};
}

const GetData = (searchName: string) => {
  if (firstTenData.find((item) => item.name.toLowerCase() === searchName)) {
    return firstTenData;
  } else if (
    OrderedData.find((item) => item.name.toLowerCase() === searchName)
  ) {
    const [gg] = OrderedData.filter(
      (item) => item.name.toLowerCase() === searchName
    );
    const shallowData = [...firstTenData];
    shallowData.splice(9, 1, gg);
    return shallowData;
  } else {
    return [];
  }
};

export default GetData;
