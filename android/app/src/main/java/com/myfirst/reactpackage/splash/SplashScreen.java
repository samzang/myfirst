package com.myfirst.reactpackage.splash;

import android.app.Activity;
import android.app.Dialog;

import com.myfirst.R;

import java.lang.ref.WeakReference;

/**
 * Created by zhangshexin on 2017/11/23.
 */

public class SplashScreen {
    public static Dialog dialog;
    public static WeakReference<Activity> activityWeakReference;

    public static void showDialog(final Activity activity,final boolean fullScreen){
        activityWeakReference=new WeakReference<Activity>(activity);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if(!activity.isFinishing()){
                    dialog=new Dialog(activity, fullScreen?R.style.SplashScreen_Fullscreen:R.style.SplashScreen_SplashTheme);
                    dialog.setContentView(R.layout.launch_splash);
                    dialog.setCancelable(false);
                    if(!dialog.isShowing()){
                        dialog.show();
                    }
                }
            }
        });
    }

    public static void showDialog(Activity activity){
        showDialog(activity,false);
    }

    public static void dismissDialog(Activity activity){
        if(activity==null)
        {
            if(activityWeakReference.get()==null)
                return;
            activity=activityWeakReference.get();
        }
        if(activity.isFinishing())
            return;
        if(dialog==null)
            return;
        if(!dialog.isShowing())
            return;
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dialog.dismiss();
                dialog=null;
            }
        });
    }
}
