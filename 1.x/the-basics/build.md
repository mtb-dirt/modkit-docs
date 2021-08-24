# Build

[[toc]]

To build your map is very easy - the modkit includes everything you need. 
For this section imagine that we want to build up a mod with the name `Trail Park`.

#### Background informations

The mod system is built up on [unity asset bundles](https://docs.unity3d.com/Manual/AssetBundlesIntro.html). 

### Mods Path

The mods stored in the [unity persistent data path](https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html): `%userprofile%\AppData\LocalLow\Lucas Loeffel\MTB Dirt\Mods`

### Scene

You need to rename your `Assets/Sample/Sample.unity` to the name of your mod. For this example you need to rename your `Assets/Sample/Sample.unity` to `Assets/Sample/Trail Park.unity`.

:::warning
The name of your mod/scene needs to be globally unique!
:::

### Asset Labels

You need to label your Scene with `scene.map`

![Asset Labels](/1.x/the-basics/build/asset-labels.gif)

### Trajectory System

:::warning
Your lowest point of your map needs to be greater then >= 0 on the Y axis!
:::

### Build your mod

The modkit provides a one click solution to build your mod.

![Asset Labels](/1.x/the-basics/build/build.gif)

### Images

Now you can put the mod images `preview.png` and `loading.png` into `%userprofile%\AppData\LocalLow\Lucas Loeffel\MTB Dirt\Mods\Trail Park`.

### Ready to go

You should now see your map in the game! You can press `F5` to reload your map to develop as fast as possible

