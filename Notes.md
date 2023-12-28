# React Native

React Native is a framework for building native mobile apps using JavaScript and React. It allows you to create a single codebase that can be used to build apps for both iOS and Android. React Native is used by Facebook, Instagram, Uber, Tesla, Walmart, and more. It is one of the most popular frameworks for building mobile apps.

#### Advantages

- Cross-platform development (iOS and Android)
- Hot Reloading (instantly see changes)
- Strong community support (lots of packages)
- Easy to learn (if you know React)

## Expo

- A tool like _create-react-app_/_Vite_ for React Native
- Allows you to build React Native apps without having to install Xcode or Android Studio
- No need to configure native build tools
- Gives you access to native APIs (camera, navigation, push notifications, maps, etc.)

## React Native vs. React

Instead of using HTML elements, you use React Native components.

###### React

```jsx
import react from 'react';

const App = () => {
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
};
```

###### React Native

```jsx
import react from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World</Text>
    </View>
  );
};
```

So instead of rendering HTML elements, you render Native mobile components.

#### Text Component

- `<Text>` is the equivalent of `<p>` in HTML
- `<Text>` is the only component that can render text
- `<Text>` can be styled with the `style` prop

#### View Component

- `<View>` is the equivalent of `<div>` in HTML
- `<View>` is used to create layout structures for other components (rows, columns, etc.)
- Has number of props to control its appearance and behavior
- Uses flexbox layout by default

## Touchable Components

There are a number of components that can be used to make your app interactive. These components provide a lot of customization options.

#### TouchableOpacity

- Used to create a button that fades in opacity when pressed

```jsx
import react from 'react';
import { TouchableOpacity, Text } from 'react-native';

const App = () => {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed')}>
      <Text>Press Me</Text>
    </TouchableOpacity>
  );
};
```

#### ActivityIndicator

- Used to show a loading indicator

```jsx
import react from 'react';
import { ActivityIndicator } from 'react-native';

const App = () => {
  return <ActivityIndicator size="large" color="#0000ff" />;
};
```

#### FlatList

- Used to render a long list of items that can be scrolled
- Takes an array of data and renders a list of items
- Similar to the `map` method in JavaScript

```jsx
import react from 'react';
import { FlatList, Text } from 'react-native';

const App = () => {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
};
```

- It has performance optimizations built-in
- It only renders the items that are currently visible on the screen
- Use `FlatList` for long lists of data and `map` for short lists

#### ScrollView

- Used to render a long list of items that can be scrolled
- Like a box that can contain other components and views
- Similar to `overflow: scroll` in CSS

#### SafeAreaView

- Used to render content within the safe area boundaries of a device
- Safe area is the portion of the screen that is not covered by the device status bar, notches, or home indicator
- Ensures that content is in visible area making it accessible to users
