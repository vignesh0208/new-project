# New Project

#### Install the Ionic CLI with npm:

```
npm install -g @ionic/cli
```

#### If there was a previous installation of the Ionic CLI

```
npm uninstall -g ionic
npm install -g @ionic/cli
```

#### Clone this project to your system

```
git clone https://github.com/vignesh0208/new-project.git
```

#### Install node

```
npm init -y
npm install
```

#### View this project in web

```
ionic serve
```

## To create a apk or ios file follow this instructions given below: 

##### Install Oracle JDK

```
sudo add-apt-repository ppa:webupd8team/java
```

##### Install Java

```
sudo apt install openjdk-8-jdk-headless
```

#### Install android studio

* Install android SDK to [download](https://developer.android.com/studio)
* Installed android SDK file using this [guid](https://developer.android.com/studio/install)
* Or follow this [android tutorial](https://ionicframework.com/docs/developing/android) and [ios tutorial](https://ionicframework.com/docs/developing/ios)

#### Install gradle

* Follow this [link](https://gradle.org/install/)

#### Now create andriod package

```
ionic cordova build android --prod --release
```

Your apk file in this location "platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk"