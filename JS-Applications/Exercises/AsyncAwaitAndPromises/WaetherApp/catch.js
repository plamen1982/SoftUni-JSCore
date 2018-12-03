async function attachEvents() {
    const baseUrl = "https://baas.kinvey.com/appdata/kid_BJMMIoWk4/";
    const username = "pax";
    const password = "774";
    const divCatches = $("#catches");
    const $addForm = $("#addForm");

    let btnLoad = $("#aside").find(".load");
    let btnAdd = $("#aside").find(".add");
    btnLoad.on("click", loadCatches);
    btnAdd.on("click", addCatch);

    async function loadCatches() {
        try {
            let catches = await sendRequest("GET", "biggestCatches");
            renderAllCatches(catches);
        } catch(error) {
            handleError(error);
        }
    }
    
    function sendRequest(method, extension, body) {
        return $.ajax({
            method: method,
            url: baseUrl + extension,
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password)
            },
            contentType: 'application/json',
            data: JSON.stringify(body)
        });
    }

    async function addCatch() {
        let catchedFish = buildCatch($addForm);
        try {
            await sendRequest('POST', "biggestCatches", catchedFish);
            loadCatches();
        } catch(error) {
            handleError(error);
        }
    }

    function buildCatch($inputForm) {
        let angler = $inputForm.find(".angler");
        let weight = $inputForm.find(".weight");
        let species = $inputForm.find(".species");
        let location = $inputForm.find(".location");
        let bait = $inputForm.find(".bait");
        let captureTime = $inputForm.find(".captureTime");

        return {
            angler: angler.val(),
            weight: Number(weight.val()),
            species: species.val(),
            location: location.val(),
            bait: bait.val(),
            captureTime: Number(captureTime.val())
        };
    }

    function renderAllCatches(catches) {
        divCatches.empty();
        catches.forEach(fish => {
            let div = $("<div>").addClass("catch").prop("data-id", `${fish._id}`);
            div.append($("<label>Angler</label>")).append($("<input>").attr("type", "text").addClass("angler").val(`${fish.angler}`))
                .append($("<label>Weight</label>")).append($("<input>").attr("type", "number").addClass("weight").val(`${fish.weight}`))
                .append($("<label>Species</label>")).append($("<input>").attr("type", "text").addClass("species").val(`${fish.species}`))
                .append($("<label>Location</label>")).append($("<input>").attr("type", "text").addClass("location").val(`${fish.location}`))
                .append($("<label>Bait</label>")).append($("<input>").attr("type", "text").addClass("bait").val(`${fish.bait}`))
                .append($("<label>Capture Time</label>")).append($("<input>").attr("type", "number").addClass("captureTime").val(`${fish.captureTime}`));
            div.append($("<button>Update</button>").addClass("update").on("click", updateCatch))
                .append($("<button>Delete</button>").addClass("delete").on("click", deleteCatch));
            divCatches.append(div);
        });
    }

    async function updateCatch() {
        let element = $(this).parent();
        let body = getNewCatch(element);
        let id = element.prop("data-id");
        try {
            await sendRequest('PUT', `biggestCatches/${id}`, body)
            loadCatches();
        } catch(error) {
            handleError(error);
        }
    }

    async function deleteCatch() {
        let element = $(this).parent();
        let id = element.prop("data-id");
        try {
            await sendRequest('DELETE', `biggestCatches/${id}`)
            loadCatches();
        } catch(error) {
            handleError(error);
        }
    }

    function handleError(err) {
        console.log(err)
    }
}