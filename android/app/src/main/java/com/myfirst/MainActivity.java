package com.myfirst;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;
import com.myfirst.reactpackage.splash.SplashScreen;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "myfirst";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.showDialog(this);
        super.onCreate(savedInstanceState);
    }
}
