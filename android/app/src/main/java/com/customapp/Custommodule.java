package com.customapp;

import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;



public class Custommodule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    Custommodule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void show() {
        Toast.makeText(reactContext, "hello World !!", Toast.LENGTH_LONG ).show();
    }

    @NonNull
    @Override
    public String getName() {
        return "TESTING_MODULE1";
    }
}
