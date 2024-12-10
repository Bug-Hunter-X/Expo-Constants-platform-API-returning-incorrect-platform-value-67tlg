# Expo Constants.platform API returning incorrect platform value

This repository demonstrates a bug where the `Constants.platform` property in the Expo Constants API returns an unexpected value on certain Android devices and emulators. This leads to conditional rendering issues where code intended for one platform (e.g., iOS) might execute on another (e.g., Android).

## Problem

The `Constants.platform` API call, expected to reliably return 'ios' or 'android', provides incorrect values.  This often happens with older Android versions or emulators, causing conditional logic relying on accurate platform detection to fail. The inconsistency results in unexpected behavior and application crashes in certain scenarios.

## Solution

The most reliable solution involves a fallback mechanism using other properties that provide more consistent information across different device and OS versions.  It uses the `Constants.manifest.android` property which is generally reliable in detecting Android devices, even with inconsistencies in `Constants.platform`.