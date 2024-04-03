import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from '../constants/colors';

function BookmarkButton(props) {
  // if bookmark btn pressed
  if (props.pressed) {
    // fill bookmark icon
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-alt" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    // else, only outline
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

// Export to different files
export default BookmarkButton;