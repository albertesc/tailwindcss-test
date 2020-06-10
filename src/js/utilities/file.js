; (function (window, undefined) {
    "strict mode";

    // Config
    // -----------------------
    /*  Coloca las classes (con .) de los elementos correspondientes de tu html ej:
        <label class="..."">
            <input type="file" class="hidden file" />
            <span class="file__name">Select a file</span>
        </label>

        IMPORTANTE! El input i el nombre deben estar enmarcados con un label.
        */

    let inputs = ".file";
    let name = ".file__name";
    // -----------------------
    // End config

    let fileInputs = document.querySelectorAll(inputs);

    fileInputs.forEach(file => {
        file.addEventListener("change", () => {
            let filePath = file.value;
            let archive = filePath.split("\\");
            let fileName = archive[2];
            file.parentNode.querySelectorAll(name)[0].innerHTML = fileName;
        });
    });
})(window);
