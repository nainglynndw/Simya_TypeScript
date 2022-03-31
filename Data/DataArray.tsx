import untypeData from "../assets/data/leaderboard.json";

interface DataType {
  [key: string]: any;
  // {
  //   bananas: number;
  //   lastDayPlayed: string;
  //   longestStreak: number;
  //   name: string;
  //   stars: number;
  //   subscribed: boolean;
  //   uid: string;
  // };
}
const data: DataType = untypeData;
const DataArray = Object.keys(data).map((key: string) => data[key]);
const OrderedData = DataArray.sort((a, b) => {
  if (a.bananas < b.bananas) return 1;
  if (a.bananas > b.bananas) return -1;
  return 0;
});

OrderedData.map((a, index) => (a.rank = index + 1));

export default OrderedData;
