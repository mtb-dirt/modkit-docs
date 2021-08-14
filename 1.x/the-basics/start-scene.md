# Start Scene

[[toc]]

The MTB Dirt Modkit provides a ready to use unity start scene with default hdrp lightning and the player

#### Light

The `Light` game object already includes the **required** post processing overrides (motion blur + lens distortion). Feel free to change anything else

#### Player

The `Player` game object is a placeholder gameobject with an equivalent scale to the real player. Just place the `Player` game object where you want to spawn the real player

### Setup

To setup the unity start scene is very easy. 
Just double click the `scene.unitypackage` in `Packages/Modkit/Package/scene.unitypackage` and export everything. 
After the export you can find the Start Scene in `Assets/Sample/Sample.unity`.

![Unity Start Scene](/1.x/the-basics/start-scene/unitypackage.gif)