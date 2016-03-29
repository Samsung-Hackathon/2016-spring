package com.spring2016;

import com.facebook.react.ReactActivity;
import com.imagepicker.ImagePickerPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import io.realm.react.RealmReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;
 import io.realm.react.RealmReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "spring2016";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            // new MainReactPackage(),
            new ImagePickerPackage(),
            new ReactMaterialKitPackage(),
            new RealmReactPackage(),
            new VectorIconsPackage(),
            new FacebookLoginPackage()
            new RealmReactPackage()
        );
    }
}
