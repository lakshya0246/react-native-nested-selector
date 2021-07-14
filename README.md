# react-native-nested-selector

A selector for nested data for React Native

This is a possible alternative to Ant Design’s [Cascader](https://ant.design/components/cascader/) or [TreeSelect](https://ant.design/components/tree-select/). A live demo/proof-of-concept can be found [here](https://lakshya.dev/better-nested-selector/).

## Description

Sometimes the user needs to select nested data. Nested menus are quite common and work well pointing with a mouse. However, they don’t make for a good experience on touch or mobile devices. With this, users can go as deep into the tree as they want, and can stop at any level. They can go back one level quickly, or go to any level and start from there again. At all times, previous selections are clearly visible.

Works best with symmetrical data, you can provide an array that describes the hierarchy and the user gets a clear indication of which level they’re on.

## Roadmap

- Add support to override styles
- Add iOS support
- Add search for quickly adding single option as well as a whole chain of options

In the project directory, you can run:

### `expo start --android`

Note: `expo` needs to be globally installed. More instructions can be found [here](https://reactnative.dev/docs/environment-setup)
