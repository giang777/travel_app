import { FlatList } from "react-native";
import { ItemCompleted } from "../../../common/renderItemBooking";
import { arrFakeDataCompleted } from "../fakeData";

export default CompletedScreen = () => {
  return (
    <FlatList
      style={{ paddingHorizontal: 10 }}
      data={arrFakeDataCompleted}
      renderItem={({ item }) => <ItemCompleted item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
