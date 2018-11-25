function attachEvents() {
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    const $phoneBook = $('#phonebook');
    const $person = $('#person');
    const $phone = $('#phone');

    $('#btnLoad').on('click', loadContacts)
    $('#btnCreate').on('click', createContact)

    function loadContacts() {
        try {
            $.get(url).then((users) => {
                if (!users) {
                    throw new Error('There is no users in DataBase, you need to create first :)')
                }
                successUsers(users);
            }).fail(handleError);
        } catch (e) {
            alert(e)
        }
    }


    function successUsers(users) {
        $phoneBook.empty();
        Object.keys(users).forEach((userId) => {
            $li = $('<li>');
            $li.text(`${users[userId].person}: ${users[userId].phone}`);
            $button = $('<button>');
            $button.text('[Delete]');
            $button.on('click', () => { deleteContact(userId) });
            $li.append($button);
            $phoneBook.append($li);
    })
}

    function deleteContact(userId) {
        let request = {
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${userId}.json`,
            method: 'DELETE',
            success: loadContacts,
            error: handleError
        }
        $.ajax(request);
    }

    function createContact() {
        try {
            if (!$person.val() || !$phone.val()) {
                throw new Error('Person and phone are mandatory fields', handleError);
            }

            let data = {
                person: $person.val(),
                phone: $phone.val(),
            }
            $.post(url, JSON.stringify(data)).then((id) => {
                alert(`Object saved with id: ${id.name}`);
                $person.val('');
                $phone.val('');
                loadContacts();
            }).fail(handleError);
        }
        catch (err) {
            alert(err);
        }
    }

    function handleError(err) {
        alert(err);
        console.log(err);
    }
}
