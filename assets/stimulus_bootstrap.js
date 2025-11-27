import { startStimulusApp } from "@symfony/stimulus-bridge";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

app.load(
    definitionsFromContext(
        require.context(
            "@symfony/stimulus-bridge/lazy-controller-loader" +
            "!../templates",
            true,
            /\.[jt]sx?$/
        )
    )
);
