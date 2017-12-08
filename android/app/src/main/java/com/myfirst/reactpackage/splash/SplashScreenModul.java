package com.myfirst.reactpackage.splash;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by zhangshexin on 2017/11/23.
 */

public class SplashScreenModul extends ReactContextBaseJavaModule{


    public SplashScreenModul(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SplashScreenModul";
    }

    @ReactMethod
    public void show(){
        SplashScreen.showDialog(getCurrentActivity());
    }

    @ReactMethod
    public void hide(){
        SplashScreen.dismissDialog(getCurrentActivity());
    }

}
