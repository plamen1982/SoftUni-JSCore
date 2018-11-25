function attachEvents() {
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook';
    const $phoneBook = $('#phonebook');
    const $person = $('#person');
    const $phone = $('#phone');

    $('#btnLoad').on('click', () => { loadContacts() })
    $('#btnCreate').on('click', () => { createContact() })

    function loadContacts() {
            $phoneBook.empty();
            let request = {
                url: url + ".json",
                method: "GET",
                success: successUsers,
                error: handleError
            };
            $.ajax(request);
        }

    function successUsers(users) {
        Object.keys(users).forEach((userId) => {
            $li = $('<li>');
            $li.text(`${users[userId].person}: ${users[userId].phone}`);
            $deleteBtn = $('<button>');
            $deleteBtn.text('[Delete]');
            $deleteBtn.on('click', () => { deleteContact(userId) });
            $li.append($deleteBtn);
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
                throw new Error('Person and phone are mandatory fields');
            }

            let contact = {
                person: $person.val(),
                phone: $phone.val(),
            }

            let request = {
                url: url + ".json",
                method: "POST",
                data: JSON.stringify(contact),
                success: loadContacts,
                error: handleError
            };
            $.ajax(request);
            $person.val('');
            $phone.val('');
        }
        catch (err) {
            handleError(err);
        }
    }

    function handleError(err) {
        alert(`Error:${err}`);
    }
}
