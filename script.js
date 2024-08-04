function selectGender(gender) {
    var femaleButton = document.querySelector('.female');
    var maleButton = document.querySelector('.male');
    var femaleOptions = document.getElementById('female-options');
    var genderStatus = document.getElementById('gender-status');

    if (gender === 'female') {
        femaleButton.classList.add('selected');
        maleButton.classList.remove('selected');
        femaleOptions.style.display = 'block';
    } else {
        femaleButton.classList.remove('selected');
        maleButton.classList.add('selected');
        femaleOptions.style.display = 'none';
    }

    genderStatus.style.display = 'block';
}

function expandInput(input) {
    var characterLimit = 55;
    var characterCount = input.value.length;
    var numberOfLines = Math.ceil(characterCount / characterLimit);

    input.style.height = "auto";
    input.style.height = (20 + (numberOfLines * 20)) + "px";
}

function saveAllData() {
    const data = {
        nome: document.getElementById('nome').value,
        raca: document.getElementById('raca').value,
        data_nascimento: document.getElementById('data_nascimento').value,
        vacinas: document.getElementById('vacinas').value,
        num_filhotes: document.getElementById('num_filhotes').value,
        data_cios: document.getElementById('data_cios').value,
        gender: document.querySelector('.female.selected') ? 'female' : 'male',
        castration: document.querySelector('input[name="castration"]:checked') ? document.querySelector('input[name="castration"]:checked').value : null
    };

    $.post('/save', data, function(response) {
        const url = window.location.href + 'data?id=' + response.id;
        $('#qrcode').empty().qrcode(url); // Gera o QR Code
        document.getElementById('link-id').innerHTML = `<a href="${url}" target="_blank">Acesse os dados aqui: ${url}</a>`;
        alert('Dados salvos com sucesso. QR Code gerado!');
    });
}

function deleteAllData() {
    $('#qrcode').empty(); // Limpa o QR Code
    document.getElementById('link-id').innerHTML = ''; // Limpa o link
    alert('Dados apagados com sucesso');
}


