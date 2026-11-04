# Checkpoint questions

1. `visible` controls whether the `Modal` is rendered on screen. We keep it in state so user actions can open and close the modal without recreating the component.

2. `onRequestClose` handles requests to close the modal, especially the Android system back button. Without closing it there, the Android back action will not dismiss the modal as expected.

3. `transparent={true}` lets the content behind the modal remain visible, so an overlay can be drawn manually. The three `animationType` values are `none`, `slide`, and `fade`.

4. `ScrollView` makes content scrollable when it does not fit in the available space; a long `View` can extend beyond the screen. I would choose `FlatList` for larger or dynamic lists because it renders items lazily and uses less memory.

5. `style` styles the outer scroll container, while `contentContainerStyle` styles the inner container that holds the scrollable children.

6. `SafeAreaView` keeps content away from the device status bar, notch, rounded corners, and home indicator areas. `react-native-safe-area-context` provides reliable safe-area insets across platforms and device configurations.

7. Use one modal only for a short, focused action, keep the content in each `ScrollView` reasonably limited, and keep the screen inside a `SafeAreaView`. A modal is not a good idea for a long workflow or a page-sized form that needs navigation and frequent context.
